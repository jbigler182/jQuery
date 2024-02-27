//******MY jQUERY NOTES********//

//DOM MANIPULATION ON ROIDS! So much simplier

//What do we do with jQuery?
  //We can select elements using the dollar sign $('ul')
  //jQuery() is $(). You can use jQuery(), but why?
  
  //When we work with jQuery we get back a jQuery object.
      //So it is different the getElement or querySelector. They contain the same elements but the return value is different. querySelector returns a nodelist 
      //$('h1').get()  will give me a node (samething as querySelector) if I want it
      //jQuery is a multi purpose method
        //Vanilla js .getAttribute(attrName) and .setAttribute(attrName)
        //jQuery .attr(attrName, newValue)


//SELECT SOMETHING $() then do something to .something(.text .html .val etc.)
  //Common jQuery methods
    //.val(), .text(), .attr(), .html(), .css(), .addClass(), and many more

    //1. .text - allows us to get innerText
    $('h1').text()               // can retrieve the text
    $('h1').text('VALCANOOOOOO') // can set the text
  //2. .html - get the innerHTML (first element in the set or update all elements)
    $('li').html()
    $('li').html(<b>BOLD</b>)   // can add to element
  //3. .attr
    $('a').attr('href')
    $('a').attr('href', 'http://www.chickennuggets.com') //Can update all atributes really easy
    const newAttr = {src: 'http://somewebstirehere.com'}
    $('img').attr(newAttr) //This would update all images to the newAttr variable from the stored object
  //4. .val() - 
    $('input').val()  //would give me the first value
    $('input').eq(4).val()  //can get the 5th input off the page by position if you wanted with. eq()
    $('input').val('') //would clear every input on the screen

//jQuery CSS and Classes
$('a').css('color')   //prints computed style: "rgb(0, 0 238)"
$('a').css('font-size', "30px")
const bigTealStyles = {color: 'teal', 'font-size': '40px'}
$('a').css(bigTealStyles)   //pass in our object and all a tags will be big and teal

$('hi').addClass('highlight') //add css class using jQuery
$('li').addClass('highlight') //can add classes
$('li').removeClass('highlight') //can remove all classes

//Method chaining (Chaining with jQuery)
const $h1 = $('h1')      //Could do it like this one line at a time
$h1.addClass('highlight')
$h1.css
        //Or you could chain and do it like this
$('h1').css('background-color', 'purple').addClass('highlighter').text('Chaining is fun!')
//Not every jQuery returns a jQuery object but most do. Thats what makes chaining possible.

//Traversal .find .parent .previous 
const $specialLi = $('li').eq(3)
$specialLi.next() //gives us the next li
$specialLi.prv()  //gives the previous li
$specialLi.parent() //which gives us the ul(parent element)
$('li a').parent() //we get 7 different li's 
$('ul').children() //looks for direct children only. Not multi levels
$('ul').find('a') //will look through multiple layers, not just children

//Creating, Appending and Removing
document.createElement('h1') //the old way
$('ul').append('<li class="highlight">I am new!</li>') //DAMN! CAn do this all at once
$('li').append('<input type="checkbox" />')
$('li').prepend('<input type="checkbox" />')
$('<h1>') //THIS WILL CREATE A NEW H1! It's smart enough to know i want to create it not search for it
$('<h1>Hellow!</h1>').css('color', 'orange').appendTo('p')
//create an object throught the DOM, .css edit it, .appendTo() tells newly created item where to to!
$('li').after('<bold>HI</bold>')
$('h1').remove() //All h1's be gone

//jQuery EVENTS (How do we add event listeners?)
$('img').click(function(){    //can add three event listeners with no loop! Awesome
alert(Hello)
})          //event       //What to do when event is seen
$('img').on('mouseleave', function(){ //.on is prefered we will talk about why later
console.log('leaving an image')
})
$('img').on('mouseleave', function(){ 
$(this).css('border', '10px solid purple')                 //this does not refer to a jQuery object have to $() it! To make it a jQuery object in order to use the jQuery method
})                    

//Why use on()?
//If we need to work with event delegation (when elements don't exsist when the page loads, but we need out event listener and its function to effect them)
$('#add-input').on('click', function(){
  $('form').append('input type="text');
})                      //jQuery allows for this middle selector
$('form').on('focus', 'input', function(){ //this is saying listen for events on the class .meme. So if a new element is added so long as it has the class .meme it will work
  $(this).val('Bamboozed')     //This is what we do when we want event delegation    
})

//There's a method call fadout()
$('img').on('click', function(){
  $(this).fadeOut(function(){
    $(this).remove();
  })
})
  //There's fadeup() //he pretty much said don't use this stuff ("don't lean on")
  //.animate - allows you to pass in a list of objects you want to animate
        //Can look into this further indepth later





// $('img').click(function () {
//   alert('HELLO!')
// })







// $('img').on('mouseenter', function () {
//     $(this).css('border', '10px solid purple')
//   })

//   $('img').on('click', function () {
//     // $(this).fadeOut(3000, function () {
//     //   $(this).remove()
//     // })
//     $(this).animate({
//       opacity: 0,
//       width: '50px', //DO NOT ANIMATE WIDTH (POOR PERFORMANCE)
//     }, 3000, function () {
//       $(this).remove();
//     })
//   })

//   $('#add-input').on('click', function () {
//     $('form').append('<input type="text"/>');
//   })

//   $('form').on('focus', 'input', function () {
//     $(this).val('BAMBOOZLED')
//   })











//   // 1: Vanilla Events on Items
// //
// //   Adds click handler directly to existing <li>s
// //   Doesn't work for newly-added <li>s

// for (let li of document.body.querySelectorAll("#one li")) {
//     li.addEventListener("click", function (evt) {
//       evt.target.parentNode.removeChild(li);
//     });
//   }

//   // 2: Vanilla Delegation
//   //
//   //   Adds click handler to <ul>, checks if click is one <li>
//   //   Does work for newly-added <li>s

//   document.body.querySelector("#two ul")
//     .addEventListener("click", function (evt) {
//       if (evt.target.tagName === "LI") {
//         evt.target.parentNode.removeChild(evt.target);
//       }
//   });


//   // 3: jQuery Events on Items
//   //
//   //   Adds click handler direclty to existing <li>s
//   //   Doesn't work for newly-added <li>s

//   $("#three li").on("click", function (evt) {
//     $(evt.target).remove();
//   });


//   // 4: jQuery Delegation
//   //
//   //   Adds click handler to <ul>, checks if click is on <li>
//   //   Does work for newly-added <li>s

//   $("#four ul").on("click", "li", function (evt) {
//     $(evt.target).remove();
//   });




// Make "add new" buttons add a new <li>

let newNum = 1;

for (let id of ["one", "two", "three", "four"]) {
  $(`#${id} button`).on("click", function (evt) {
    $(`#${id} ul`).append(`<li>new ${newNum++}</li>`);
  });
}






