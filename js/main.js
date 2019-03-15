let mainList = document.getElementById(`toDoList`);
let hiddenListItems = document.getElementById(`hiddenListItems`);

const newItemForm = document.getElementById(`addItem`);
const hiddenTasks = document.getElementById(`hiddenTasks`);
const filterList = document.getElementById(`filterList`);

let toDoList = [
    { 
        id: 0,
        listItem: `Have breakfast`, 
        comState: false,
        showState: true,
    }, 
    { 
        id: 1,
        listItem: `Go to gym`, 
        comState: true,
        showState: true,
    }, 
    { 
        id: 2,
        listItem: `Meditate`, 
        comState: true, 
        showState: false,
    }, 
    { 
        id: 3,
        listItem: `Read book`, 
        comState: true, 
        showState: true,
    }, 
    { 
        id: 4,
        listItem: `Write in journal`, 
        comState: true, 
        showState: true,
    }, 
    ];

toDoList.push(
    {
        id: 5,
        listItem: `Run a mile`,
        comState: false,
        showState: true,
    },
);





function printList(theListToPrint = toDoList) {

    let catToShow = filterList.category.value; 

    if (catToShow != `all` )
        theListToPrint = theListToPrint.filter(item => item.comState == catToShow)

        mainList.innerHTML = theListToPrint.map(item => `<li class="listItem"> ${item.listItem} </li>`).join(``);
};

document.getElementById(`filterList`).addEventListener(`click`, event => {
    if(event.target.matches(`input`)) {
        printList();
    }
});



// // Generic printer, just format and output whatever it was told to print
// function printList(theListToPrint = toDoList) {
//     mainList.innerHTML = theListToPrint.map(item => `<li class="listItem"> ${item.listItem} </li>`).join(``);};

// printList();




// Add a new item to the list ///////////////////////////

newItemForm.addEventListener('submit', event => {
    event.preventDefault();

    // Get text from the field
    let newListItem =  newItemForm.item.value;

    // Clear the text from the field (so we can add a new item)
    newItemForm.item.value = '';

    // Push it into our dataset (Array: listItems)
    toDoList.push(
        { 
            id: 6,
            listItem: newListItem,
            comState: false,
            showState: true,
        }, 
    );

    // Reprint the list
    printList();

});


// function printListCompleted(theListToPrint = toDoList) {
//     hiddenListItems.innerHTML = theListToPrint.map(item => `<li class="listItem"> ${item.listItem} </li>`).join(``);};


// hiddenTasks.addEventListener('button', event => {
//     event.printListCompleted( toDoList.filter(item => item.showState == false) );
// })








// toDoList.forEach(itm => {

// // Create a new element:     <li></li>
// let oneListItem = document.createElement(`li`);

// // Add inner HTML to it
// oneListItem.innerHTML = itm.listItem;

// // Add a class to it
// oneListItem.classList.add(`listItem`);

// // If list item is complete
// if (itm.comState == true)
//     oneListItem.classList.add(`complete`);

// // add to To-do list
// document.getElementById(`toDoList`).appendChild(oneListItem);

// });