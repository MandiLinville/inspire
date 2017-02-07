(function () {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var tc = this;
	var todoService = new TodoService();


	new Vue({
		el: '#todo',
		data: {
			todos: [],
			currentTodo: ''
		},
		mounted: function () {
			todoService.getTodos(this.setTodos)
		},
		methods: {
			submitTodo() {
				this.todos.push(this.currentTodo)
				this.saveTodos()
				completed: false
			},
			saveTodos() {
				todoService.saveTodos(this.todos)
			},
			setTodos(todos) {
				this.todos = todos;
			},
			removeTodo(task) {
				var i = this.todos.indexOf(task)
				this.todos.splice(i, 1)
			},
			completedTodo(currentTodo) {
				currentTodo.completed = !currentTodo.completed
			}
		}
	})
} ())
