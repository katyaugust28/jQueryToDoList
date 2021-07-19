$('#list')
let list = $('#list')


function newItem(){

  //to store the li element
  let li = $('<li></li>');
  list.append(li);

  //getting input values
  $('#input').val();
  //storing the input (not storing the value for some reason?)
  let inputValue = $('#input').val();
  //appending the input to the List

  $('input').on('click',fucntion(){
    li.append(inputValue);
  });
}



//marking an item as done (not doing it)
li.addClass("strike");

//deleting a task (deleted the number 2 completely)
li.addClass("delete");

//using an event handler to cross out an item (not working)
li.on("click", function (){
  li.addClass("strike");
});








//  let newElement=$('<li class="new-class">Add List Item</li>');
  //$('ol').append(newElement);
