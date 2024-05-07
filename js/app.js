/* ELEMENT VARIABLE */
const addListButton = document.querySelector('#addNewList');
const boardAreaEl = document.querySelector('#boardArea');

addListButton.addEventListener('click', createNewList)

function createNewList(){
    // Create the card element
    const asideEl = document.createElement('aside');
    const divEl = document.createElement('div');
    const para = document.createElement('p');
    const fontAwesomeIconOpt = document.createElement('i');

    // append asideEl, divEl, fontAwesomeIconPlus to boardArea;
    boardAreaEl.appendChild(asideEl);

    //adding First Element
    asideEl.appendChild(divEl);
    divEl.appendChild(para);
    divEl.appendChild(fontAwesomeIconOpt);

     // Set attributes first element
     asideEl.setAttribute("class", "new-card-list");
     fontAwesomeIconOpt.setAttribute("class", "fa-solid fa-ellipsis-vertical opt-btn-model");

    // Second Div Element
    const addTaskDiv = document.createElement('div');
    const fontAwesomeIconPlus = document.createElement('i');
    const addTaskSpan = document.createElement('span');

    // append child to board area
    asideEl.appendChild(addTaskDiv);
    addTaskDiv.appendChild(fontAwesomeIconPlus);
    addTaskDiv.appendChild(addTaskSpan);

    // set attribute send element
    addTaskDiv.setAttribute('class', 'add-task-div');
    fontAwesomeIconPlus.setAttribute('class', 'fa-solid fa-plus');
    addTaskSpan.setAttribute('class', 'add-task-span');

    // set text content
    addTaskSpan.textContent = 'Add a task';
    para.textContent = "Programming";

    addTaskDiv.addEventListener('click', ()=>{
        const todoParentDiv = document.createElement('div');
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const li2 = document.createElement('li');
        const fontAwesomeIconOpt2 = document.createElement('i');
        const checkboxEl = document.createElement('input');
        const textarea1 = document.createElement('textarea');
        const textarea2 = document.createElement('textarea');

        console.log(todoParentDiv)
        asideEl.appendChild(todoParentDiv);
        todoParentDiv.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(checkboxEl);
        li.appendChild(textarea1);
        li.appendChild(fontAwesomeIconOpt2);
        // li.appendChild(textarea2);

        // List items two
        ul.appendChild(li2);
        li2.appendChild(textarea2)

        // set attribute
        todoParentDiv.setAttribute('class', 'todo-parent');
        fontAwesomeIconOpt2.setAttribute("class", "fa-solid fa-ellipsis-vertical opt-btn-model");
        checkboxEl.setAttribute('type', 'checkbox');
        checkboxEl.setAttribute('class', 'checkbox');
        checkboxEl.setAttribute('name', 'checkbox');

        textarea1.setAttribute('class', 'text-area-one');
        textarea1.setAttribute('cols', '25');
        textarea1.setAttribute('wrap', 'hard');
        textarea1.setAttribute('rows', 'auto');
        textarea1.setAttribute('maxlength', '15');
        // textarea1.setAttribute('rows', '10');

        textarea2.setAttribute('class', 'text-area-two');
    })
}
