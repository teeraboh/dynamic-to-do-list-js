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
    const newLi = document.createElement('li');
    newLi.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn'); // Update this line

    removeButton.onclick = function () {
      taskList.removeChild(newLi);
    };

    newLi.appendChild(removeButton);
    taskList.appendChild(newLi);

    // Clear the task input field
    taskInput.value = '';
    }

    // ["loadTasks"]

    // ["localStorage.getItem", "tasks"]

    // ["JSON.parse", "JSON.stringify"]

  // Attach Event Listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});