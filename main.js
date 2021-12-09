// Select element and assign them in variables

let form = document.querySelector('form');
let inputBox = document.querySelector('.inputBox');
let incompliteUl = document.querySelector('.incomUl');
let compliteUl = document.querySelector('.complite_task ul');

// function 

let createTask = function(task){
    let taskList = document.createElement("li");
    let label = document.createElement("label");
    let checkBox = document.createElement("input");

    checkBox.type = "checkBox";

    label.innerText =task;
    taskList.appendChild(checkBox);
    taskList.appendChild(label);

    return taskList;

}
let addTask = function(event){
    event.preventDefault();

    let taskList =createTask(inputBox.value);
    incompliteUl.appendChild(taskList);
    inputBox.value = "";

    incompliteTask(taskList, compliteTask)
    
}
let deletebtn = function(list, deleteList){
    let liList = list;
    let deleteBtnn = liList.querySelector('input[type="submit"]');
    deleteBtnn.onclick = deleteList;
}
let deleteMe = function(){
    let listOf = this.parentNode;
    listOf.remove();
}
let compliteTask = function(){
    let taskList = this.parentNode;
    let checkBox = taskList.querySelector('input[type="checkbox"]');
    let deltes = document.createElement("input");
    deltes.type = "submit";
    deltes.value = "Delete";
    taskList.appendChild(deltes);

    checkBox.remove();
    compliteUl.appendChild(taskList);
    deletebtn(taskList, deleteMe);

}

let incompliteTask = function(listItem, clickIt){
    let checkBox = listItem.querySelector('input[type="checkBox"]');
    checkBox.onchange = clickIt;
}

for( let i=0; i<incompliteUl.children.length; i++){
    incompliteTask(incompliteUl.children[i], compliteTask);
}
for( let i=0; i<compliteUl.children.length; i++){
    deletebtn(compliteUl.children[i], deleteMe);
}

// Functin Call

form.addEventListener("submit", addTask);