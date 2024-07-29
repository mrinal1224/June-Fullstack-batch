const addBtn = document.querySelector(".add-btn");

const modalCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector('.main-cont')
const textArea = document.querySelector('.textArea-cont')
modalCont.style.display = "none";

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

    let task = textArea.value
    console.log(task)
    createTicket(task);
  }
});

function createTicket(TicketTask) {
  let id = shortid()
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = ` <div class="ticket-color lightblue"></div>
    <div class="ticket-id">${id}</div>
    <div class="ticket-task">${TicketTask}</div>
    <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`;

    mainCont.appendChild(ticketCont)
    modalCont.style.display = "none";

}
