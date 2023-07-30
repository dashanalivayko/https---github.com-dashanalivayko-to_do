import { memo, useEffect, useState } from 'react';
import './diagram.css';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { useAppSelector } from '../../store/hooks';
import { ITodo, selectTodos } from '../../store/todoSlice';
import { filterTodos } from '../../helpers/helpers';

const Diagram = memo(() => {
	const todos: ITodo[] = useAppSelector(selectTodos);
	const [completedTasksCount, setCompletedTasksCount] = useState(filterTodos(todos).completedTasksCount);

	useEffect(() => {
		setCompletedTasksCount(filterTodos(todos).completedTasksCount)
	}, [todos]);

	useEffect(() => {
		const data = {
			datasets: [{
				label: 'completed tasks',
				data: [completedTasksCount, todos.length - completedTasksCount],
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
				],
				hoverBackgroundColor: ["#175000", "#003350"],
				// hoverOffset: 4
			}]
		};

		const config = {
			type: 'doughnut',
			data: data,
			options: {
				legend: {
					position: 'left'
				},
			}
		};

		const chart = new Chart(
			document.getElementById('canvas') as HTMLCanvasElement,
			config as ChartConfiguration,
		);

		return () => {
			chart.destroy();
		}
	}, [completedTasksCount, todos.length])

	return (
		<div className='chart-wrapper'>
			<canvas id="canvas" width="200" height="200"></canvas>
			<div className='number'>total: {todos.length}</div>
			<p style={{ left: '30px' }}>{todos.length - completedTasksCount}</p>
			<p style={{ right: '30px' }}>{completedTasksCount}</p>
		</div>
	);
});

export { Diagram };
