$(document).ready(function () {
  console.log("ready");

  // $("#currentDay").text(moment().format("dddd, MMMM Do"));
  // console.log("#currentDay");
  //dynamically create a place to store text content for each time frame within the arra
  let workDay = [
    "hour-9",
    "hour-10",
    "hour-11",
    "hour-12",
    "hour-13",
    "hour-14",
    "hour-15",
    "hour-16",
    "hour-17",
  ];
  let workHours = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
  ];

  for (let i = 0; i < workDay.length; i++) {
    //create textcontent boxes for each time slot
    let hour = workDay[i];
    let parentDiv = document.createElement("div");
    parentDiv.setAttribute("id", hour);
    parentDiv.setAttribute("class", "row time-block");
    let container = document.querySelector(".container");

    let childDiv = document.createElement("div");
    childDiv.setAttribute("class", "col-md-1 hour");
    childDiv.textContent = workHours[i];
    parentDiv.appendChild(childDiv);

    let childDiv2 = document.createElement("textarea");
    childDiv2.setAttribute("class", "col-md-10 description");
    // childDiv2.textContent = ""; // sets default value as blank
    parentDiv.appendChild(childDiv2);

    let childDiv3 = document.createElement("button");
    childDiv3.setAttribute("class", "col-md-1 saveBtn"); // replace with jquery
    parentDiv.appendChild(childDiv3);
    container.append(parentDiv);

    //save text content to local storage
  }
  $(".saveBtn").on("click", function () {
    let timeSlot = $(this).parent().attr("id");
    let userInput = $(this).prev().val(); // relative
    console.log($(this));
    console.log(userInput);
    localStorage.setItem(timeSlot, userInput);
  });

  // $("#hour-9 .description").val(localStorage.getItem("hour-9")); // loop this

  workDay.forEach((workHours) => {
    $("#" + workHours + " .description").val(localStorage.getItem(workHours));
  });

  // read clock time & compare to document
  // function renderTime(){

  //when time is elapsed trigger .past
  // localStorage.clear(); //when day is over
});
