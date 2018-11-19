/*

  Users should be able to:
  1. Enter an item into #item
  2. Click on #clickme
  3. New item is appended as a <li> element to the #list
  4. After the <li> is added, the text inside #item should clear

  Requirements: Create a separate function, called appendItem, that accepts one argument, item, that is called when #clickme is clicked and appends the <li> to #list

  Bonus: Focus on #item after the item is added (research jQuery focus method)
  Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user (if/else conditions)
  Legendary Bonus: Remove individual <li> elements when they are clicked (will have to use $(this) + research how to remove dynamically added elements)

  To Get Started:
  1. Attach a .click() event to #clickme
  2. This .click() should call a function: handleClick
  3. Inside handleClick, create a variable, newItem, that is equal to the value of #item
  4. handleClick should call a separate function, named appendItem, and pass it the variable newItem
  5. handleClick should then clear the text inside of #item
  6. Finally, write the function, appendItem (see above)

*/

$('#clickme').click(handleClick)

function handleClick(text) {
  var newItem = $('#item').val()
  $('#list').append('<li>' + newItem + '</li>')

//3. Return focus to <input id="item"
  $('#item').focus()

//4. Clear input id="item" (cacn add *.val('')* in 3. after .focus())
$('#item').val('')  
}



// function appendItem(text) {
//   $('#list').html(newItem)

//Remove dynamically created <li>'s.
$(document).on('click','li', handleRemove)

$('li').click(handleRemove)

function handleRemove() {
  $(this).remove()
}

//or: 4('#clickme').click(appendItem)
//    function appendItem()







