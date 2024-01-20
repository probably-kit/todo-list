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
        listItem.innerHTML = `<strong>${newTodo.title}</strong> (${newTodo.priority}) - ${newTodo.description} <em>${newTodo.dueDate}</em>`;
      
        document.getElementById('taskList').appendChild(listItem);
      
        this.reset();
        document.getElementById('formPopup').style.display = 'none';
      });
      
      
});


