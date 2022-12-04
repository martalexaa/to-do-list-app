function newItem(){

//add new item to the list
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  //crossing out a list item

function crossOut() {
    li.toggleClass("strike");
}

li.on("click", function crossOut() {
li.toggleClass("strike");
}) 


//creating an X delete button

let deleteButton = document.createElement('deleteButton');
deleteButton.append(document.createTextNode('X'));
li.append(deleteButton);

deleteButton.addEventListener('click', function () {
    li.addClass('delete');
})
}

$('#list').sortable();





