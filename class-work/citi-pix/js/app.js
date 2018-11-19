/*
  User flow:
    1: User changes <select id="city-type">
    2: The page's background changes to a picture of the newly selected city

  Instructions:
    1. Attach the .change() event method to #city-type
    2. Associate the above change event with a function, handleChange, which should do the following:
    3. Create a variable, city, that stores the selected value of #city-type (hint: use .val())
    4. Remove all classes from the <body> element using the .removeClass() method
    5. The variable you created in step 4 maps to a CSS class (check style.css for more info)
       Use the .addClass() method to add this variable to <body>

  Bonus: Apply the concept of $(this) - think about what element is causing .change() to fire
*/

$('#city-type').change(handleChange)

function handleChange () {
//1. Get input and store in variable
  var city = $('#city-type').val()
 // var city = $(this).val() - more clear to use this 
 //instead of line 22. 

//2. Update UI/Output results
  $('body').removeClass()

  $('body').addClass(city)


}