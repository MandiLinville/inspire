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
			currentTodo: '',
			todoNumber: 0
		},
		mounted: function () {
			todoService.getTodos(this.setTodos)
		},
		methods: {
			submitTodo() {
				this.todos.push(this.currentTodo)
				this.saveTodos()
				this.todoNumber ++
				completed: false //why is this red?
			},
			saveTodos() {
				todoService.saveTodos(this.todos)
			},
			setTodos(todos) {
				this.todos = todos;
				this.todoNumber = todos.length
			},
			removeTodo(task) {
				var i = this.todos.indexOf(task)
				this.todos.splice(i, 1)
				this.todoNumber--
			},
			completedTodo(currentTodo) {
				currentTodo.completed = !currentTodo.completed
			}
		}
	})
} ()) 
