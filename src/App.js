import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function Hello() {
	useEffect(() => {
		console.log("hi :)");
		return () => console.log("bye :(");
	}, []);
	return <h1>Hello</h1>;
}

function App() {
	const [counter, setCounter] = useState(0);
	const [keyword, setKeyword] = useState("");
	const [show, setShow] = useState(false);

	const onClick2 = () => {
		setShow(!show);
	};

	const onChange = (event) => {
		setKeyword(event.target.value);
	};

	const onClick = () => {
		setCounter((current) => current + 1);
	};

	useEffect(() => {
		console.log("I run only once.");
	}, []); // 단 한번만 호출.

	useEffect(() => {
		console.log("I run when 'keyword' changes.");
	}, [keyword]); // keyword가 변화할 때만 코드가 실행.

	useEffect(() => {
		console.log("I run when 'counter' changes.");
	}, [counter]); // counter가 변화할 때만 코드가 실행.

	useEffect(() => {
		console.log("I run when keyword & counter changes.");
	}, [keyword, counter]); // keyword 또는 counter가 변화할 때 코드가 실행.

	return (
		<div className="App">
			<h1 className={styles.title}>Hello</h1>
			<Button text={"Continue"} />

			<hr />

			<input type="text" value={keyword} onChange={onChange} />
			<h2>{counter}</h2>
			<button onClick={onClick}>Click me</button>

			<hr />

			{show ? <Hello /> : null}
			<button onClick={onClick2}>{show ? "hide" : "show"}</button>
		</div>
	);
}

export default App;
