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
        saveData()

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
}


document.getElementById('input-box').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
      addTask();
    }

    saveData();
  });


listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked'); 
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false)


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();