const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('Write something here')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        inputBox.value = '';
    }
}

document.getElementById('add-task').addEventListener('click', addTask);