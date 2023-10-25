let listTodo = [{
    name: 'washe dihes',
    duedate: '2022-22-22'
}];


//let listTodo = JSON.parse(localStorage.getItem('listTodo'));
//console.log(listTodo);


TodoLoop();
function TodoLoop(){
    let todoListHtml = '';
    //localStorage.setItem('listTodo', JSON.stringify(listTodo))

    for(let i = 0; i<listTodo.length; i++){
    const TodoObject = listTodo[i];
    //const {name} = TodoObject;
    const {duedate, name} = TodoObject;
    let html = `
    <p class="todo-p">
    ${name}   ${duedate}
    <button class="delete-button" onclick="
    listTodo.splice(${i},1);
    localStorage.setItem('listTodo', JSON.stringify(listTodo))
    TodoLoop();
    ">Delete</button>
    </p>
    `;
    todoListHtml += html;
    
    
}
document.querySelector('.todoElements').innerHTML = `${todoListHtml}`;
console.log(todoListHtml);
}

function add(){
    let dateTimeInput = document.querySelector('.date-time-input').value;
    console.log(dateTimeInput);
    let inputValue = document.querySelector('.inputArea').value;
     let inputValueElement = document.querySelector('.inputArea');
    let newTodoObject = {
        name: inputValue,
        duedate: dateTimeInput
    }
    
    listTodo.push(newTodoObject);
    console.log(listTodo);
    localStorage.setItem('listTodo', JSON.stringify(listTodo))
    TodoLoop();
    inputValueElement.value = '';
    
}
