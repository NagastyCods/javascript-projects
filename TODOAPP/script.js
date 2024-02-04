const taskList = document.getElementById('tasks')
const newtaskInput = document.getElementById('new-task')
const  addTaskButton = document.getElementById('add-task')


function addTask(){
    const newTaskText = newtaskInput.value;
    if(newTaskText){
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = newTaskText;
        // add a functionlity to mark task as complete, delete, etc
        taskList.appendChild(newTaskItem);
        newtaskInput.value=''; 
    }
}