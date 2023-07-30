import React, { useState } from 'react';
import './addForm.css';
import { PropsWithClassName } from '../../../helpers/helpers';
import classNames from 'classnames';
import { addTodo } from '../../../store/todoSlice';
import { useAppDispatch } from '../../../store/hooks';

interface IProps extends PropsWithClassName {
	placeholder?: string,
}

const AddForm = ({ placeholder = 'write your task...', className }: IProps) => {
	const dispatch = useAppDispatch();
	const [text, setText] = useState('');
	const [isError, setIsError] = useState(false);

	const onAdd = (e: React.MouseEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (text) {
			dispatch(addTodo({ text }))
			setText('');
		} else {
			setIsError(true);
		}
	}

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.currentTarget.value);
		setIsError(false);
	};

	return (
		<div className={classNames('form', { className: true })} >
			<form className='inputWrapper' onSubmit={onAdd}>
				<input className='input' placeholder={placeholder} value={text} onChange={(e) => onChange(e)} />
				<button className='btn add' type='submit'>Add</button>
			</form>
			<span className="error">{isError ? 'The field cannot be empty' : ''}</span>
		</div >
	)
}

export { AddForm };
