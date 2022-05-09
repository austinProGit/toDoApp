window.onload = init;
function init() {
  displayToDos();
}

const toDoList = [];

function toDo(name, desc, urgency, date){
  this.name = name;
  this.desc = desc;
  this.urgency = urgency;
  this.date = date;
}

toDo.prototype.toString = function toDoToString(){
  return `To-Do: ${this.name} \nDescription: ${this.desc} \n\tUrgency: ${this.urgency} \n\tDate: ${this.date}`;
};

function addNewToDo(){
  let toDoName = document.forms["createToDoForm"]["toDoName"].value;
  //console.log('name is: ' + toDoName);
  let toDoDesc = document.forms["createToDoForm"]["toDoDesc"].value;
  let toDoUrg = document.forms["createToDoForm"]["toDoUrg"].value;
  let toDoDate = document.forms["createToDoForm"]["toDoDate"].value;

  const newToDo = new toDo(toDoName, toDoDesc, toDoUrg, toDoDate);

  toDoList.push(newToDo);

  console.log(`Added todo ${newToDo.toString()} to the list!`)

  displayToDos();
}

function displayToDos(){
  //console.log("displayToDos ran.");
  let list = document.getElementById("toDoListTarget");
  while (list.hasChildNodes()){
    list.removeChild(list.firstChild);
  }
  if (toDoList.length === 0){
    let li = document.createElement("li");
    li.innerText = "No current To-Do's";
    li.style.listStyleType = "none";
    list.appendChild(li);
  }
  else{
    toDoList.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    })
  }
}

function deleteToDo(){
  let name = document.forms["deleteToDoForm"]["toDoName"].value;
  let toDoDelete = undefined;
  console.log("name that we are searching for: " + name);
  if (toDoList.length !== 0){
    let toDoDelete = toDoList.find(obj => obj.name === name);
    if (toDoDelete !== undefined){
      toDoList.splice(toDoList.indexOf(toDoDelete), 1);
      console.log("Element deleted");
    }
    else{
      alert("There is no To-Do by that name in your To-Do list!");
    }
  }
  else{
    alert("Your To-Do list is empty!");
  }
  displayToDos();
}

function sortByUrgency(){
  toDoList.sort((a,b) => (a.urgency > b.urgency) ? 1 : -1)
  displayToDos();
}

function sortByDate(){
  toDoList.sort((a,b) => (a.date > b.date) ? 1 : -1)
  displayToDos();
}