import Todo from './todo';
import Project from './project';
import './../style.css';


console.log("webpack is working");
//POP UP MESSAGE WITH FORMI
//INFO FOR FORM CREATE TODO OBJECT
//CREATE LIST(PROJECT) CREATOR


document.addEventListener('DOMContentLoaded', function () {
  class TodoApp {
    constructor() {
        this.taskList = document.getElementById('taskList');
        this.addTaskButton = document.getElementById('addTaskButton');
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    init() {
        this.addTaskButton.addEventListener('click', () => this.showPopup());
        this.taskList.addEventListener('click', event => {
            if (event.target.type === 'checkbox') {
                this.removeTask(event.target);
            }
        });
        this.renderTasks();
    }

    showPopup() {
        const popup = document.getElementById("popup");
        popup.innerHTML = `
            <form id="taskForm" onsubmit="event.preventDefault(); app.addTask();">
                <label for="title">Title:</label>
                <input type="text" id="title" required>
                
                <label for="description">Description:</label>
                <textarea id="description" required></textarea>
                
                <label for="deadline">Deadline:</label>
                <input type="date" id="deadline" required>
                
                <label for="priority">Priority:</label>
                <select id="priority" required>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                
                <button type="submit">Add Task</button>
            </form>
        `;
        popup.style.display = 'block';
    }

    addTask() {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let deadline = document.getElementById('deadline').value;
        let priority = document.getElementById('priority').value;

        let task = { title, description, deadline, priority };

        this.tasks.push(task);
        this.updateLocalStorage();
        this.renderTask(task);
        this.closePopup();
    }

    renderTasks() {
        this.taskList.innerHTML = '';
        this.tasks.forEach(task => this.renderTask(task));
    }

    renderTask(task) {
        let listItem = document.createElement('li');
        listItem.className = 'task';
        listItem.innerHTML = `
            <input type="checkbox"> 
            <strong>${task.title}</strong><br>
            Description: ${task.description}<br>
            Deadline: ${task.deadline}<br>
            Priority: ${task.priority}
        `;
        this.taskList.appendChild(listItem);
    }

    removeTask(checkbox) {
        let index = Array.from(this.taskList.children).indexOf(checkbox.parentElement);
        this.tasks.splice(index, 1);
        this.updateLocalStorage();
        checkbox.parentElement.remove();
    }

    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    closePopup() {
        document.getElementById('taskForm').reset();
        document.getElementById('popup').style.display = 'none';
    }
}

const app = new TodoApp

});


