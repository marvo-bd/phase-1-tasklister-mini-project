document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    if (taskDescription.trim() !== "") { // Check if input is not empty or just whitespace
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.addEventListener("click", function() {
        taskItem.remove();
      });

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      taskInput.value = ""; // Clear input field after adding task
    } else {
      alert("Please enter a valid task description!");
    }
  });
});
