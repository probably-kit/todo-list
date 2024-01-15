import Todo from './todo';
import Project from './project';
import './../style.css';


console.log("webpack is working");

document.addEventListener('DOMContentLoaded', function () {
    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
    
        if (taskInput.value !== '') {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            li.appendChild(checkbox);
    
            const taskText = document.createElement('span');
            taskText.textContent = taskInput.value;
            li.appendChild(taskText);
    
            taskList.appendChild(li);
            taskInput.value = '';
    
            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    taskText.style.textDecoration = 'line-through';
                } else {
                    taskText.style.textDecoration = 'none';
                }
            });
        }
    }

    const addTaskButton = document.getElementById('addTask');
    addTaskButton.addEventListener('click', addTask);
    
});


