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

        //First Text Area Element
        textarea1.setAttribute('class', 'text-area-one');
        textarea1.setAttribute('cols', '25');
        textarea1.setAttribute('wrap', 'hard');
        textarea1.setAttribute('rows', '2');
        textarea1.setAttribute('maxlength', '300');
        textarea1.setAttribute('placeholder', 'Title');

        // Send Text Area Element
        textarea2.setAttribute('class', 'text-area-two');
        textarea2.setAttribute('cols', '25');
        textarea2.setAttribute('wrap', 'hard');
        textarea2.setAttribute('rows', '2');
        textarea2.setAttribute('maxlength', '600');
        textarea2.setAttribute('placeholder', 'Details');

        const cardTitleInput = document.querySelectorAll('.text-area-one');
        const cardDetailInput = document.querySelectorAll('.text-area-two');
        
        cardTitleInput.forEach((item)=>{
            item.addEventListener('input', setHeight)
        })

        cardDetailInput.forEach((item)=>{
            item.addEventListener('input', setHeight)
        })

        // function to increase height on click
        function setHeight(){
            this.style.height = 'auto';
            this.style.height =  this.scrollHeight + 'px';

        let height = parseFloat(this.style.height);

            if(height > 120) {
                this.style.overflowY = 'scroll';
                this.style.height = '120px';
            }
        };

        // Create Elements
        const fileDiv = document.createElement('div');
        const fileUL = document.createElement('ul');

        const dateLi = document.createElement('li');
        const labelLi = document.createElement('li');
        const attachLi = document.createElement('li');

        // Set Attribues
        labelLi.setAttribute('class', 'label-li')

        // input tag for calendar
        const dataIcon = document.createElement('input');
            dataIcon.type = 'datetime-local';
            dataIcon.id = 'meeting-time';
            dataIcon.name = 'meeting-time';

        // input tag for the label
        const labelIcon = document.createElement('input');
            labelIcon.setAttribute('type', 'button');
            labelIcon.setAttribute('class', 'label-icon');



        // 
        const attachIcon = document.createElement('input');
    
        


        //Append element to parent
        todoParentDiv.appendChild(fileDiv);
        fileDiv.appendChild(fileUL);
        fileUL.appendChild(dateLi);
        fileUL.appendChild(labelLi);
        fileUL.appendChild(attachLi);
        dateLi.appendChild(dataIcon);
        labelLi.appendChild(labelIcon);
        attachLi.appendChild(attachIcon);

        // Set Attributes
        fileDiv.setAttribute('class', 'file-parent-div');
        fileUL.setAttribute('class', 'file-wrapper-ul');
        dateLi.setAttribute('class', 'date-li');
        

        dataIcon.setAttribute('class', 'date-icon');

            const span = document.createElement('span');
            span.setAttribute('class', 'display-time');
            dateLi.appendChild(span);

        dataIcon.addEventListener('input', calendarValue)

        function calendarValue(){
            const calendar = this.value;
            const date = new Date(calendar);

            const formattedDate = date.toLocaleString('en-GB', {
                day: 'numeric',
                weekday: 'short',
                month: 'short',
                year: 'numeric'
            });

            span.textContent = formattedDate;
            console.log({formattedDate})
        }

            labelLi.addEventListener('click', (event)=>{
                event.stopPropagation();
              // Creating pop up model for label button
                const bodyElement = document.querySelector('body');

                const cardLabel = document.createElement('section');
                const cardHeading = document.createElement('div');
                const cardBody = document.createElement('div');
                const cardFooter = document.createElement('div');
                const img = document.createElement('img');
                const h1 = document.createElement('h1');
                const para1 = document.createElement('p');
                const para2 = document.createElement('p');
                const linkTag1 = document.createElement('a');
                const linkTag2 = document.createElement('a');

                //applying set attributes
                bodyElement.setAttribute('class', 'active');

                cardLabel.setAttribute('class', 'card-label active');
                h1.setAttribute('class', 'card-label-h1');
                cardHeading.setAttribute('class', 'card-heading');
                cardBody.setAttribute('class', 'card-body');
                cardFooter.setAttribute('class', 'card-footer');
                img.setAttribute('class', 'card-label-image');
                para1.setAttribute('class', 'para-one');
                para2.setAttribute('class', 'para-two');
                linkTag1.setAttribute('class', 'link-tag-one');
                linkTag2.setAttribute('class', 'link-tag-two');

                // appending elements to the body of the document

                bodyElement.appendChild(cardLabel);
                cardLabel.appendChild(cardHeading);
                cardLabel.appendChild(cardBody);
                cardBody.appendChild(img);
                cardLabel.appendChild(cardFooter);
                cardHeading.appendChild(h1);
                cardHeading.appendChild(para1);
                cardHeading.appendChild(para2);
                cardFooter.appendChild(linkTag1);
                cardFooter.appendChild(linkTag2);
                

                //adding href to links
                linkTag1.href = 'https://tasksboard.com/premium/upgrade';
                linkTag2.href = 'https://tasksboard.com/premium';

                //Setting the card image attributes
                img.src = `images/label.png`

                // Applying text content
                h1.textContent = 'Task labels is a Premium Feature';
                para1.textContent = 'Easily organize and prioritize your tasks with labels so';
                para2.textContent = "you'll always know exactly what to work on next";
                linkTag1.textContent = "Try Premium for free";
                linkTag2.textContent = "Learn more about Premium";

                // const bodyElement = document.querySelector('body');  
                bodyElement.addEventListener('click', ()=>{
                    bodyElement.classList.remove('active');
                    cardLabel.classList.remove('active');
                })

            })

            

    })

    

}

