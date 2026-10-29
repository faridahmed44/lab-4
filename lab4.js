const tasks = [];

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const renderBtn = document.getElementById("renderBtn");
const list = document.getElementById("taskList");

function addTask() {
    const text = input.value.trim();
    if (text === "") return;    //edge case 3ashan yatagahal el empty text box
    
    tasks.push(text);
    input.value = "";
    
}

function render() {
    list.innerHTML = "";// clear the old list


   for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += "- " + tasks[i] + "<br>";
    }

}
addBtn.addEventListener("click", addTask);
renderBtn.addEventListener("click", render);

