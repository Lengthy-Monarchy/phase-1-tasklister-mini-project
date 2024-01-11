document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const tasksList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById('new-task-description').value;

    const newTask = document.createElement('li');
    newTask.textContent = taskDescription;

    tasksList.appendChild(newTask);

    form.reset();
  });
});
