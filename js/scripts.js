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

  //Crossing out an item from the List
  li.on("dblclick", function crossOut(){
    li.toggleClass("strike");
  });

  //Adding the delete button (X)
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  //Adding the class delete from css:
  function deleteListItem() {
    li.addClass("delete"); //hides the item with display:none on css
  }
  crossOutButton.on("click", deleteListItem);

  //Reordering the items in a list
  $("#list").sortable();
}
