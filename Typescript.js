var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    TodoList.prototype.addTodo = function (task, dueDate) {
        var newTodo = {
            id: this.nextId++,
            task: task,
            completed: false,
            dueDate: dueDate,
        };
        this.todos.push(newTodo);
    };
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.completed = true;
        }
        else {
            console.error("Todo with id ".concat(id, " not found."));
        }
    };
    TodoList.prototype.removeTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
    };
    TodoList.prototype.listTodos = function () {
        return this.todos;
    };
    TodoList.prototype.filterTodos = function (completed) {
        return this.todos.filter(function (todo) { return todo.completed === completed; });
    };
    TodoList.prototype.updateTodo = function (id, newTask) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.task = newTask;
        }
        else {
            console.error("Todo with id ".concat(id, " not found."));
        }
    };
    TodoList.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
    };
    return TodoList;
}());
// Example usage
var myTodoList = new TodoList();
myTodoList.addTodo("Learn TypeScript", new Date("2025-03-10"));
myTodoList.addTodo("Build a project", new Date("2025-03-15"));
console.log(myTodoList.listTodos());
myTodoList.completeTodo(1);
console.log(myTodoList.filterTodos(true));
myTodoList.removeTodo(2);
console.log(myTodoList.listTodos());
