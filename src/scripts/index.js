import Todo from './todo';
import Project from './project';
import '../style.css';

console.log("webpack is working");

document.addEventListener('DOMContentLoaded', function () {
    class Todo {
        constructor(title, description, dueDate, priority, completed = false) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.completed = completed;
        }
    }

    function addTaskToList(task) {
        const listItem = document.createElement('li');
    
        // Checkbox
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = 'check' + document.getElementById('taskList').childElementCount;
        checkBox.checked = task.completed;
        checkBox.addEventListener('change', () => {
            task.completed = checkBox.checked;
            updateLocalStorage();
        });
    
        // Label for the task
        const label = document.createElement('label');
        label.htmlFor = checkBox.id;
        label.textContent = task.title;
        label.setAttribute('data-content', task.title);
    
        // Info Checkbox (hidden)
        const infoCheckbox = document.createElement('input');
        infoCheckbox.type = 'checkbox';
        infoCheckbox.id = 'infoCheck' + document.getElementById('taskList').childElementCount;
        infoCheckbox.className = 'info-checkbox';
        infoCheckbox.style.display = 'none';
    
        // Info Label (animated element)
        const infoLabel = document.createElement('label');
        infoLabel.htmlFor = infoCheckbox.id;
        infoLabel.className = 'info-label';
        for (let i = 0; i < 3; i++) {
            const span = document.createElement('span');
            infoLabel.appendChild(span);
        }
    
        // Task info div
        const infoDiv = document.createElement('div');
        infoDiv.className = 'task-info';
        infoDiv.innerHTML = `
            <p class="task-description">${task.description}</p>
            <p class="task-dueDate"> ${task.dueDate}</p>
            <p class="task-priority">${task.priority}</p>
        `;
        infoLabel.addEventListener('click', function () {
            infoDiv.style.display = infoDiv.style.display === 'block' ? 'none' : 'block';
        });
    
        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'red-btn';
        deleteButton.onclick = function () {
            listItem.remove();
            updateLocalStorage();
        };
        infoDiv.appendChild(deleteButton);
    
        // Appending elements
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(infoCheckbox);
        listItem.appendChild(infoLabel);
        listItem.appendChild(infoDiv);
    
        document.getElementById('taskList').appendChild(listItem);
    }
    

    document.getElementById('openFormBtn').addEventListener('click', function () {
        document.getElementById('formPopup').style.display = 'block';
    });

    document.getElementById('closeFormBtn').addEventListener('click', function () {
        document.getElementById('formPopup').style.display = 'none';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('formPopup').style.display = 'none';
        }
    });

    document.getElementById('taskForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const newTodo = new Todo(
            document.getElementById('title').value,
            document.getElementById('description').value,
            document.getElementById('dueDate').value,
            document.getElementById('priority').value,
            false // initial completed status is false
        );

        addTaskToList(newTodo);
        this.reset();
        document.getElementById('formPopup').style.display = 'none';

        updateLocalStorage();
    });

    function updateLocalStorage() {
        const tasks = [];
        document.querySelectorAll('#taskList li').forEach(li => {
            const title = li.querySelector('label').textContent;
            const description = li.querySelector('.task-description').textContent.replace('Description: ', '');
            const dueDate = li.querySelector('.task-dueDate').textContent.replace('Deadline: ', '');
            const priority = li.querySelector('.task-priority').textContent.replace('Priority: ', '');
            const completed = li.querySelector('input[type="checkbox"]').checked;
            tasks.push(new Todo(title, description, dueDate, priority, completed));
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    

    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (savedTasks) {
            savedTasks.forEach(task => {
                addTaskToList(task);
            });
        }
    }

    loadTasks();
});
