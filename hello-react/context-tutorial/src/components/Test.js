import React, { useEffect, useState } from 'react';
// import { isWhiteSpace } from './utils';

function TodoInput() {
	const [todoText, setTodoText] = useState('');

	useEffect(() => {
		console.log(todoText);
	}, [todoText]);

	const onChange = (e) => {
		setTodoText(e.target.value);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="할 일을 입력하세요."
				onChange={onChange}
			/>
		</div>
	);
}

export default TodoInput;