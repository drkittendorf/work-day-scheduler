//dynamically create a place to store text content for each time frame within the arra
let workDay = ["hour-9", "hour-10"];
let workHours = ["9am", "10am"];
let button = "save";

for (let i = 0; i < workDay.length; i++) {
  //create textcontent boxes for each time slot
  let hour = workDay[i];

  let parentDiv = document.createElement("div");
  parentDiv.setAttribute("id", hour);
  parentDiv.setAttribute("class", "row time-block");
  let container = document.querySelector(".container");
  container.append(parentDiv);

  let childDiv = document.createElement("div");
  childDiv.setAttribute("class", "col-md-1 textarea");
  childDiv.textContent = workHours[i];
  parentDiv.appendChild(childDiv);

  let childDiv2 = document.createElement("TEXTAREA");
  childDiv2.setAttribute("class", "col-md-10 textarea");
  childDiv2.textContent = "";
  parentDiv.appendChild(childDiv2);

  let childDiv3 = document.createElement("saveBtn");
  childDiv3.setAttribute("class", "col-md-1 saveBtn");
  childDiv3.button = parentDiv.appendChild(childDiv3);
}
