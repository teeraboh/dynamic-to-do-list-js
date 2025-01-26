// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load Tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
  }

  // Create the addTask Function
  function addTask(taskText, save = true) {
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
    removeButton.classList.add('remove-btn');

    removeButton.onclick = function () {
      taskList.removeChild(newLi);
      updateTasks();
    };

    newLi.appendChild(removeButton);
    taskList.appendChild(newLi);

    if (save) {
      updateTasks();
    }
  }

  // Update Tasks in Local Storage
  function updateTasks() {
    const taskListArray = Array.from(taskList.children).map(li => li.firstChild.textContent);
    localStorage.setItem('tasks', JSON.stringify(taskListArray));
  }

  // Load Tasks from Local Storage
  loadTasks();

  // Attach Event Listeners
  addButton.addEventListener('click', function () {
    addTask(taskInput.value);
    taskInput.value = '';
  });

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask(taskInput.value);
      taskInput.value = '';
    }
  });
});
