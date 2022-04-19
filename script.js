window.onload = init;
function init() {
  displayToDos();
}

const toDoList = [];

function toDo(name, desc, urgency){
  this.name = name;
  this.desc = desc;
  this.urgency = urgency;
}

toDo.prototype.toString = function toDoToString(){
  return `${this.name}`;
};

function addNewToDo(){
  let toDoName = document.forms["createToDoForm"]["toDoName"].value;
  //console.log('name is: ' + toDoName);
  let toDoDesc = document.forms["createToDoForm"]["toDoDesc"].value;
  let toDoUrg = document.forms["createToDoForm"]["toDoUrg"].value;

  const newToDo = new toDo(toDoName, toDoDesc, toDoUrg);

  toDoList.push(newToDo);

  console.log(`Added todo ${newToDo.toString()} to the list!`)

  displayToDos();
}

function displayToDos(){
  console.log("displayToDos ran.");
  let displayStr = "";
  if (toDoList.length === 0){
    displayStr = "No current To-Do's";
  }
  else{
    for(let i = 0; i < toDoList.length; i++){
      displayStr += (toDoList[i].toString() + "\n");
    }
  }
  document.getElementById("toDoListTarget").innerHTML = displayStr;
}

function deleteToDo(){
  let toDoToDelete = document.forms["deleteToDoForm"]["toDoName"].value;
  if (toDoList.length !== 0){
    if (toDoList.find(toDo => toDo.name === toDoToDelete)){
      toDoList.splice(toDoList.indexOf(toDo), 1);
    }
    else{
      alert("There is no To-Do by that name in your To-Do list!");
    }
  }else{
    alert("Your To-Do list is empty!");
  }
  displayToDos();
}