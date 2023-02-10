var Tasks = [];
function addTask(task) {
    Tasks.push(task);
    console.log("Task " + task + "add to the list.");
    return task.length;
}
function listAllTasks() {
    // for(let i=0; i<Tasks.length,i++){
    //   console.log(Tasks[i]);
    //  }
    Tasks.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var index = Tasks.indexOf(task);
    if (index > -1) {
        Tasks.splice(index, 1);
        console.log("Task " + task + "delete from list");
    }
    else {
        console.log("Task " + task + " not found in list");
    }
    return Tasks.length;
}
addTask("eat lunch ");
addTask("eat taytos ");
listAllTasks();
deleteTask("eat lunch ");
listAllTasks();
