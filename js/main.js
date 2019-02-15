let toDoList = [
    { 
        listItem: `Have breakfast`, 
        comState: false 
    }, 
    { 
        listItem: `Go to gym`, 
        comState: true 
    }, 
    { 
        listItem: `Meditate`, 
        comState: false 
    }, 
    { 
        listItem: `Read book`, 
        comState: true 
    }, 
    { 
        listItem: `Write in journal`, 
        comState: false 
    }, 
    ];

toDoList.push(
    {
        listItem: `Jumping Jacks`,
        comState: false,
    },
);

toDoList.forEach(itm => {

// Create a new element:     <li></li>
let oneListItem = document.createElement(`li`);

// Add inner HTML to it
oneListItem.innerHTML = itm.listItem;

// Add a class to it
oneListItem.classList.add(`listItem`);

// If list item is complete
if (itm.comState == true)
    oneListItem.classList.add(`complete`);

// add to To-do list
document.getElementById(`toDoList`).appendChild(oneListItem);

});