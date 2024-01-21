import Todo from './todo';
import Project from './project';
import '../style.css';


console.log("webpack is working");
//POP UP MESSAGE WITH FORMI
//INFO FOR FORM CREATE TODO OBJECT
//CREATE LIST(PROJECT) CREATOR


document.addEventListener('DOMContentLoaded', function () {
    class Todo {
        constructor(title, description, dueDate, priority) {
          this.title = title;
          this.description = description;
          this.dueDate = dueDate;
          this.priority = priority;
        }
      
        // You can add methods here if needed
      }

      document.getElementById('closeFormBtn').addEventListener('click', function() {
        document.getElementById('formPopup').style.display = 'none';
    });

    // Event listener for the Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.getElementById('formPopup').style.display = 'none';
        }
    });

    document.getElementById('openFormBtn').addEventListener('click', function() {
        document.getElementById('formPopup').style.display = 'block';
      });
      
      document.getElementById('taskForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Create a new Todo object
        const newTodo = new Todo(
            document.getElementById('title').value,
            document.getElementById('description').value,
            document.getElementById('dueDate').value,
            document.getElementById('priority').value
        );
    
        // Create a list item using the Todo object
        const listItem = document.createElement('li');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = 'check' + document.getElementById('taskList').childElementCount;
    
        const label = document.createElement('label');
        label.htmlFor = checkBox.id;
        label.textContent = newTodo.title;
    
        const infoButton = document.createElement('button');
        infoButton.textContent = 'Info';
    
        const infoDiv = document.createElement('div');
        infoDiv.style.display = 'none';
        infoDiv.innerHTML = `
            <p>Description: ${newTodo.description}</p>
            <p>Due Date: ${newTodo.dueDate}</p>
            <p>Priority: ${newTodo.priority}</p>
        `;
    
        infoButton.onclick = function() {
            infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
        };
    
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(infoButton);
        listItem.appendChild(infoDiv);
    
        document.getElementById('taskList').appendChild(listItem);
    
        this.reset();
        document.getElementById('formPopup').style.display = 'none';
    });
    
      
      
});


