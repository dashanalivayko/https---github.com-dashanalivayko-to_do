import React, { memo, useState } from 'react';
import './todo.css';
import { ITodo, deleteTodo, editTodo, toggleTodo } from '../../../store/todoSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { disableEdit, selectIsDisableEdit } from '../../../store/statusSlice';

interface IProps extends ITodo {

}

const Todo = memo(({ id, text, complete }: IProps) => {
	const dispatch = useAppDispatch();
	const [isEdit, setIsEdit] = useState(false);
	const [edibleText, setEdibleText] = useState('');
	const isDisableEdit = useAppSelector(selectIsDisableEdit);
	// const [isSubtaskAdd, setIsSubtaskAdd] = useState(false); // TODO

	const onEditClick = () => {
		setIsEdit(true);
		dispatch(disableEdit(true));
	}

	const onCompleteClick = (id: number | undefined, complete: boolean | undefined) => {
		dispatch(toggleTodo({ id, complete }))
	};

	const onEditSubmit = (e: React.FormEvent<HTMLFormElement>, id: number | undefined) => {
		e.preventDefault();
		edibleText && dispatch(editTodo({ id, text: edibleText }));
		setIsEdit(false);
		dispatch(disableEdit(false));
	}

	return (
		<>
			{
				!isEdit ?
					(
						<>
							<div className='todoWrapper'>
								<input type='checkbox' className='checkbox' onChange={() => onCompleteClick(id, complete)} checked={complete} />
								<p className='text' onClick={() => onCompleteClick(id, complete)}>{text}</p>
								<button className='btn edit' onClick={onEditClick} disabled={isDisableEdit}>✎</button>
								<button className='btn delete' onClick={() => dispatch(deleteTodo({ id }))}>🗑️</button>
								{/* <button className='btn add-subtask' onClick={() => setIsSubtaskAdd(true)}>+</button> */}
							</div>
							{/* {isSubtaskAdd &&
								<AddForm addTodoDispatch={() => { }} placeholder={'write your subtask...'}></AddForm>} */}
						</>
					)
					:
					<form className='editWrapper' onSubmit={(e) => onEditSubmit(e, id)}>
						<input className='input' value={!edibleText ? text : edibleText} onChange={(e) => setEdibleText(e.currentTarget.value)} />
					</form>
			}
		</>
	);
});

export { Todo };
