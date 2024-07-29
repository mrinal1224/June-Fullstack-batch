const addBtn = document.querySelector(".add-btn");

const modalCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const textArea = document.querySelector(".textArea-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
modalCont.style.display = "none";
let modalPriorityColor = 'lightpink'

let addtaskFlag = false;

// Modal toggle
addBtn.addEventListener("click", function () {
  addtaskFlag = !addtaskFlag;

  if (addtaskFlag === true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

/// Generating a Ticket

modalCont.addEventListener("keydown", function (e) {
  let key = e.key;
  console.log(key);

  if (key === "Shift") {
    let task = textArea.value;
    console.log(task);
    createTicket(task ,modalPriorityColor );
  }
});

function createTicket(TicketTask , ticketColor) {
  let id = shortid();
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = ` <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">${id}</div>
    <div class="ticket-task">${TicketTask}</div>
    <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`;

  mainCont.appendChild(ticketCont);
  modalCont.style.display = "none";
}

allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    allPriorityColors.forEach(function (priorityColorElements) {
      priorityColorElements.classList.remove("active");
    });
    colorElem.classList.add("active");
    let colorSelected = colorElem.classList[1]
     modalPriorityColor = colorSelected
  });
});


