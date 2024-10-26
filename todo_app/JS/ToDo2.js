

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

//adding event listener for form submission//

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.value;

    if (newTask === '') {
        alert('please enter a task!');
        return;
    }
    //additional code to add the task will go here//
  

    todoInput.value = ''; //clear the input field after adding the task//
    addTask(newTask);

     
});

//creating a function to add tasks//

function addTask(task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    listItem.appendChild(checkBox);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    listItem.appendChild(editButton);

    checkBox.addEventListener('change', function() {
        if (this.checked) {
            taskText,style.textDecoration = 'line-through';
        }
        else {
            taskText.style.textDecoration = 'none';
        }
    });

    deleteButton.addEventListener('click', function {
        const isEditing = listItem.classList.contains('editing');
        if (isEditing) {
            taskText.textContent = this.previousSibling.value;
            listItem.classList.remove('editing');
            editButton.textContent = 'Edit';
        }
        else {
            const input = document.createElement('input');

            input.type = 'text';
            input.value = taskText.textContent;
            listItem.insertBefore(input, taskText);
            listItem.removeChild(taskText);
            listItem.classList.add('editing');
            editButton.textContent = 'Save';
        }
    });

    saveTaskToLocalStorage()
}

function saveTasksToLocalStorage() {
    const tasks = [];
    document.querySelectorAll('#todo-list li').forEach(task => {
        const taskText = task.querySelector('span').textContent;
        const isCompleted = task.classList.contains('completed');
        task.push({ text: taskText, completed: isCompleted});
    });
    localStorage.estItem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        addTask(task.text);
    });
});