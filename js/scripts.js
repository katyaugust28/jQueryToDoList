function newItem(){
  //Adding a new item to a list
  let li=$("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue=== "") {
    alert("You must write something first!");
  } else {
    $("#list").append(li);
  }

  // add an X close button


}




//marking an item as done (not doing it)


//deleting a task (deleted the number 2 completely)


//using an event handler to cross out an item (not working)
