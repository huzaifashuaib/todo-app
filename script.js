let inputBox=document.getElementById("input-box")
let listContainer=document.getElementById("list-container")
let addTask=document.getElementById("addtask")

window.onload=()=>{
    showTask()
}

function addTodo(){
    if(inputBox.value==""){
        inputBox.focus();
        return;
    }
    else{
        let li=document.createElement('li');
        li.innerText=inputBox.value;
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML='\u00d7'
        li.appendChild(span)
        saveData()
        inputBox.value=""
    }
}
addTask.addEventListener("click",addTodo)

listContainer.addEventListener('click',(e)=>{
 if(e.target.tagName=='LI'){
    e.target.classList.toggle("checked")
    saveData()
 }
 else if(e.target.tagName=='SPAN'){
    e.target.parentElement.remove()
    saveData()
 }
})


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}