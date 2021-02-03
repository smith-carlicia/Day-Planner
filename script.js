$(document).ready(function () {
  
  // console.log(m.tostring());
 
    
    // 1. date and time
    var currentWorkHour = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentday").append(currentWorkHour);
   

// 2. onload function

// 3. display current date (location: top of calendar (CSS))
// 4. onscroll function (possible)
// 5. format: standard business hours - section off each hour 
var workHours = document.querySelector("#container");

var workHours = [ "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
for (var i = 0; i < workHours.length; i++){
    // var savedInput = localStorage.getItem(workHours[i]);
    var saveButton = $("<button>");
    // saveButton.attr("data-hours", workHours[i]);
    // textarea.text(savedInput);
    // var currentWorkHour = $("<p>");
    // currentWorkHour.attr("data-letter", workHours[i]);
    // currentWorkHour.text(workHours[i]);
    
    // parsInt(workHours)

    // if (workHours === currentWorkHour) {
    //   textInput.addClass(".present");
    // }
    // else if (workHours > currentWorkHours) {
    //   textInput.addClass(".future");
    // }
    // else (workHours < currentWorkHours) { 
    //   textInout.addClass(".past");
};
// 6. format: days - not weeks or months etc.
// 7. each time block will be placed in categories bsed on threee factors:
//    a. past
//    b. present
//    c. future
// var currentHour = moment().hours();
// 8. function that allows clicking within the time-block (each block must have an onclick function)
//    hint: jquery will be of big assistance 
function workHours() {
  var timeBlock = $("#timeblock");

  $(".timeblock").on("click", "fa-save", function(){
    $(".past").on("click", function() {
      textarea.animate({ color: "#d3d3d3" });
    });
    $(".present").on("click", function() {
      textarea.animate({ color: "#ff6961" });
    });
    $(".future").on("click", function() {
      textarea.animate({ color: "#77dd77" });
    });
  });
};

// 9. The event blocks take in input 
// 10. eventlistener() - create a save button for each block to save the input (step 9) 
//    hint: jquery 
  // saveButton.addEventListener("click", ".save", function(){
  //   var textField = $(this).siblings("textarea").val().trim()
  //   var time = $(this).siblings(".time-block").text()
  //   localStorage.setItem(time, textField)
  // $(".saveBtn").on("click", ".save", function() {
  //   var textField = $(this).siblings("textarea").val().trim()
  //   var time = $(this).siblings(".time-block").text()
  //   localStorage.setItem(time, textField);)){
});

// 11. grab the users input - saveto local storage (onclick of step 10)
var userInput = "";
// 12. onload()- eventpreventdefault 
// onload(){
//   textField.addEventListener("click", ".save", function(){
//     event.preventDefault();
//   }
// });

// saveButton.addEventListener("click", ".save", function(event){
//   event.preventDefault();
//   searchBar("Hello");
//   textField();
// // 13. allow for the input to remain on the page - even on refresh 
// });