interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
  }
  
  class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;
  
    addTodo(task: string, dueDate: Date): void {
      const newTodo: TodoItem = {
        id: this.nextId++,
        task,
        completed: false,
        dueDate,
      };
      this.todos.push(newTodo);
    }
  
    completeTodo(id: number): void {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = true;
      } else {
        console.error(`Todo with id ${id} not found.`);
      }
    }
  
    removeTodo(id: number): void {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  
    listTodos(): TodoItem[] {
      return this.todos;
    }
  
    filterTodos(completed: boolean): TodoItem[] {
      return this.todos.filter(todo => todo.completed === completed);
    }
  
    updateTodo(id: number, newTask: string): void {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.task = newTask;
      } else {
        console.error(`Todo with id ${id} not found.`);
      }
    }
  
    clearCompleted(): void {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
  
  // Example usage
  const myTodoList = new TodoList();
  myTodoList.addTodo("Learn TypeScript", new Date("2025-03-10"));
  myTodoList.addTodo("Build a project", new Date("2025-03-15"));
  console.log(myTodoList.listTodos());
  myTodoList.completeTodo(1);
  console.log(myTodoList.filterTodos(true));
  myTodoList.removeTodo(2);
  console.log(myTodoList.listTodos());
  