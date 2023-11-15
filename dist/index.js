let tasks = [];
let addBtn = document.getElementById('add-task-btn').addEventListener('click', adding_task);
let inputTask = document.getElementById('add-task');
let listOfTask = document.getElementById('list-task');

function adding_task(e) {
    e.preventDefault();
    if (inputTask.value.trim() === "") {
        alert("Please write the task");
    } else {
        tasks.push({ "description": inputTask.value, "completed": false });
        render_task();
        inputTask.value = '';
    }
};

// Render the list of todos on the screen.
function render_task() {
    listOfTask.innerHTML = " "
    let index = 0;
    for (let task of tasks) {
        let new_task =
            `<li class="mt-2 bg-white">
            <div id="task" class="grid grid-cols-2 ml-2 gap-40 p-4">
                <div id="task-container" class="flex justify-evenly">
                    <input type="checkbox" name="" id="checked-task" onclick="check_task(${index})" />
                    <p id="task-description${index}">${task.description}</p>
                </div>
                <div id="btns" class="flex justify-between">
                    <button type="submit" onclick="editTask(${index})">Edit</button>
                    <button type="submit" onclick="delete_task(${index})">Remove</button>
                </div>
            </div>
            </li>`
        listOfTask.innerHTML += new_task;
        index++;
    }
}
// Render the list of todos on the screen.

// Completing a Todo
function check_task(index) {
    let task = tasks[index];
    let taskDescription = document.getElementById("task-description" + index);
    task.completed = !task.completed
    if (task.completed) {
        taskDescription.style.textDecorationLine = "line-through";
    } else {
        taskDescription.style.textDecoration = "none";
    }
}
// Completing a Todo

// Deleting a Todo
function delete_task(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        render_task();
    }
}
// Deleting a Todo

function editTask(index) {
    if (index >= 0 && index < tasks.length) {
        const task = prompt("Enter tasks:", tasks[index].description);
        tasks[index].description = task;
        render_task();
    }
}