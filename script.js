// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Create the addTask Function
  function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    // Task Creation and Removal
    const newLi = document.createElement('li'); // Create a new li element
    newLi.textContent = taskText; // Set its textContent to taskText

    const newButton = document.createElement('button'); // Create a new button element
    newButton.textContent = 'Remove'; // Set its textContent to “Remove”
    newButton.className = 'remove-btn'; // Give it a class name of ‘remove-btn’

    newButton.onclick = function () { // Assign an onclick event to the remove button
      taskList.removeChild(newLi); // Remove the li element from taskList
    };

    newLi.appendChild(newButton); // Append the remove button to the li element
    taskList.appendChild(newLi); // Append the li to taskList

    taskInput.value = ''; // Clear the task input field
  }

  // Attach Event Listeners
  addButton.addEventListener('click', addTask); // Add an event listener to addButton

  taskInput.addEventListener('keypress', function (event) { // Add an event listener to taskInput
    if (event.key === 'Enter') { // Check if event.key is equal to ‘Enter’
      addTask(); // Call addTask
    }
  });
});
