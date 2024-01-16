import Todo from './todo';
import Project from './project';
import './../style.css';


console.log("webpack is working");
//POP UP MESSAGE WITH FORMI
//INFO FOR FORM CREATE TODO OBJECT
//CREATE LIST(PROJECT) CREATOR


document.addEventListener('DOMContentLoaded', function () {
    function addTask() {
        // Get form values
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let deadline = document.getElementById('deadline').value;
        let priority = document.getElementById('priority').value;

        // Create a JavaScript object
        let task = {
            title: title,
            description: description,
            deadline: deadline,
            priority: priority
        };

        let taskList = document.getElementById('taskList');
        let listItem = document.createElement('li');
        listItem.className = 'task';
        listItem.innerHTML = `
      <input type="checkbox" onclick="removeTask(this)"> 
      <strong>${task.title}</strong><br>
      Description: ${task.description}<br>
      Deadline: ${task.deadline}<br>
      Priority: ${task.priority}
    `;

        taskList.appendChild(listItem);

        // Reset form and hide the popup
        document.getElementById('taskForm').reset();
        document.getElementById('popup').style.display = 'none';
    }

    function showPopup() {
        const popup = document.getElementById("popup");

        popup.innerHTML = `<form id="taskForm" onsubmit="addTask(); return false;">
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
      </form>`;

        popup.style.display = 'block';
    }

    

    function removeTask(checkbox) {
        // Get the parent li element and remove it
        let listItem = checkbox.parentNode;
        listItem.parentNode.removeChild(listItem);
      }


    // function addTask() {
    //     const taskInput = document.getElementById('taskInput');
    //     const taskList = document.getElementById('taskList');

    //     if (taskInput.value !== '') {
    //         const li = document.createElement('li');
    //         const checkbox = document.createElement('input');
    //         checkbox.type = 'checkbox';
    //         li.appendChild(checkbox);

    //         const taskText = document.createElement('span');
    //         taskText.textContent = taskInput.value;
    //         li.appendChild(taskText);

    //         taskList.appendChild(li);
    //         taskInput.value = '';

    //         checkbox.addEventListener('change', function () {
    //             if (checkbox.checked) {
    //                 taskText.style.textDecoration = 'line-through';
    //             } else {
    //                 taskText.style.textDecoration = 'none';
    //             }
    //         });
    //     }
    

    const addTaskButton = document.getElementById('addTaskButton');
addTaskButton.addEventListener('click', showPopup);

});


