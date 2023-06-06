let user = {
	name: '张三',
	age: 20
}

function App(){
	return (
		<div>
			姓名: {user.name},
			<br />
			年龄: {user.age}
		</div>
	);
}

export default App;