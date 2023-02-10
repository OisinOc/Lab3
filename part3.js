var Todo = /** @class */ (function () {
    function Todo() {
        this.Tasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log("Task " + task + "add to the list.");
        return this.Tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log("Task " + task + "delete from list");
        }
        else {
            console.log("Task " + task + " not found in list");
        }
        return this.Tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
myTodos.addTask("Eat");
myTodos.addTask("Work");
myTodos.addTask("Sleep");
myTodos.listAllTasks();
myTodos.deleteTask("Eat");
myTodos.listAllTasks();
