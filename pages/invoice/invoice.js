document.addEventListener("DOMContentLoaded", function () {
  let moon = document.querySelector(".moon");
  let label = document.querySelectorAll("label");
  let buttonsContainer = document.querySelector(".buttonsContainer");
  let linearBoxDiv = document.querySelector(".linearBoxDiv");
  let cancelBtn = document.querySelector(".cancelBtn");
  let main = document.querySelector("main");
  let addNewItem = document.querySelector(".addNewItem");
  let input = document.querySelectorAll("input");
  let invoiceView = document.querySelector(".invoiceView");
  let statusBox = document.querySelector(".statusBox");
  let invoiceSummary = document.querySelector(".invoiceSummary");
  let invoiceTitle = document.querySelector(".invoiceTitle");
  let invoiceDate = document.querySelector(".invoiceDate");
  let paymentTerms = document.querySelector(".paymentTerms");
  let clientName = document.querySelector(".clientName");
  let clientEmail = document.querySelector(".clientEmail");
  let itemName = document.querySelectorAll(".itemName");
  let total = document.querySelectorAll(".total");
  let orderSummaryBox = document.querySelectorAll(".orderSummaryBox");
  let orderTotalBox = document.querySelector(".orderTotalBox");
  let buttonsContainer2 = document.querySelector(".buttonsContainer2");
  let buttonsBox2 = document.querySelector(".buttonsBox2");
  let buttonsBox = document.querySelector(".buttonsBox");

  //for edit functionality

  let editBtn = document.querySelector(".editBtn");
  let paidBtn = document.querySelector(".paidBtn");

  editBtn.addEventListener("click", () => {
    invoiceView.classList.replace("displayBlock", "displayNone");
    buttonsBox2.classList.replace("displayBlock", "displayNone");
    main.classList.replace("displayNone", "displayBlock");
    buttonsBox.classList.replace("displayNone", "displayBlock");
    linearBoxDiv.classList.replace("displayNone", "displayBlock");
  });

  cancelBtn.addEventListener("click", () => {
    invoiceView.classList.replace("displayNone", "displayBlock");
    buttonsBox2.classList.replace("displayNone", "displayBlock");
    main.classList.replace("displayBlock", "displayNone");
    buttonsBox.classList.replace("displayBlock", "displayNone");
    linearBoxDiv.classList.replace("displayBlock", "displayNone");
  });
  async function getInvoiceDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("id");
    const response = await fetch(
      `https://invoiceapi-rpgn.onrender.com/api/invoices/${id}`
    );
    const data = await response.json();

    let invoiceHTML = `
    <div class="statusBox">
      <p>Status</p>
      <div class="statusBox-state">
        <div class="oval"></div>
        <p>Pending</p>
      </div>
    </div>
    <div class="invoiceSummary">
      <h1 class="invoiceTitle">${data.serial_number}</h1>
      <p class="projectDescription">${data.description}</p>
      <div class="adressFrom">
        <p class="streetAdress">${data.sender_street_address}</p>
        <p class="city">${data.sender_city}</p>
        <p class="postCode">${data.sender_postcode}</p>
        <p class="country">${data.sender_country}</p>
      </div>
      <div class="billToBox">
        <div class="invoiceDatesBox">
          <div class="invoiceDateBox">
            <p>Invoice Date</p>
            <p class="invoiceDate">${data.payment_start_date}</p>
          </div>
          <div class="paymentDue">
            <p>Payment Due</p>
            <p class="paymentTerms">${data.payment_terms}</p>
          </div>
        </div>
        <div class="billToDetailsBox">
          <p class="billToTitle">Bill To</p>
          <p class="clientName">${data.reciever_username}</p>
          <p class="toStreetAdress">${data.reciever_street_address}</p>
          <p class="toCity">${data.reciever_city}</p>
          <p class="toPostCode">${data.reciever_postcode}</p>
          <p class="toCountry">${data.reciever_country}</p>
        </div>
      </div>
      <div class="sentToEmailBox">
        <p class="sentToTitle">Sent to</p>
        <p class="clientEmail">${data.reciever_email}</p>
      </div>
  `;

    let orderSummaryHTML = "";
    data.item_list.forEach((el) => {
      orderSummaryHTML += `
      <div class="orderSummaryBox">
        <div class="titleAndUnitBox">
          <p class="itemName">${el.name}</p>
          <p class="qty">${el.quantity}</p>
        </div>
        <div class="priceBoxCont"><p class="total">£ ${el.price}</p></div>
      </div>
    `;
    });

    let grandTotalHTML = `
    <div class="orderTotalBox">
      <div class="grandTotalBox">
        <p>Grand Total</p>
        <p class="grandTotal">£ ${data.item_total_price}</p>
      </div>
    </div>
  `;

    invoiceHTML += orderSummaryHTML + grandTotalHTML;

    invoiceView.innerHTML += invoiceHTML;
  }

  getInvoiceDetails();

  //for dark mode functionality
  moon.addEventListener("click", () => {
    input.forEach((el) => el.classList.toggle("input-dark-mode"));
    label.forEach((el) => el.classList.toggle("label-dark-mode"));
    main.classList.toggle("dark-mode");
    addNewItem.classList.toggle("dark-mode");
    addNewItem.classList.toggle("dark-mode-dark-blue");
    addNewItem.classList.toggle("input-dark-mode-bgc");
    linearBoxDiv.classList.toggle("dark-mode");
    linearBoxDiv.style.border = "0";
    buttonsContainer.classList.toggle("invoice-dark-mode");
    cancelBtn.classList.toggle("input-dark-mode-bgc");
    invoiceView.classList.toggle("dark-mode");
    statusBox.classList.toggle("invoice-dark-mode");
    invoiceSummary.classList.toggle("invoice-dark-mode");
    invoiceSummary.classList.toggle("dark-mode-light");
    invoiceTitle.classList.toggle("dark-mode-white");
    invoiceDate.classList.toggle("dark-mode-white");
    paymentTerms.classList.toggle("dark-mode-white");
    orderSummaryBox.forEach((el) => el.classList.toggle("input-dark-mode"));
    clientName.classList.toggle("dark-mode-white");
    itemName.forEach((el) => el.classList.toggle("dark-mode-white"));
    total.forEach((el) => el.classList.toggle("dark-mode-white"));
    clientEmail.classList.toggle("dark-mode-white");
    orderTotalBox.classList.toggle("dark-mode-dark");
    buttonsContainer2.classList.toggle("invoice-dark-mode");
    moon;
  });
});

// delete prompts rac exeba

let deleteBtn = document.querySelector(".deleteBtn");
let prompt = document.querySelector(".prompt");
let cancelPrompt = document.querySelector(".cancel");
let delete2 = document.querySelector(".delete");

deleteBtn.addEventListener("click", () => {
  prompt.style.display = "block";
  invoiceView.style.opacity = "0.5";
  invoiceView.style.backgroundColor = "#000";
  statusBox.style.backgroundColor = "#000";
  invoiceSummary.style.backgroundColor = "#000";
  orderSummaryBox[0].style.backgroundColor = "#000";
  orderSummaryBox[1].style.backgroundColor = "#000";
});

cancelPrompt.addEventListener("click", () => {
  prompt.style.display = "none";
  invoiceView.style.opacity = "1";
  invoiceView.style.backgroundColor = "white";
  statusBox.style.backgroundColor = "white";
  invoiceSummary.style.backgroundColor = "white";
  orderSummaryBox[0].style.backgroundColor = "white";
  orderSummaryBox[1].style.backgroundColor = "white";
});

async function removeInvoice() {
  const urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");
  const response = await fetch(
    `https://invoiceapi-rpgn.onrender.com/api/invoices/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  console.log(response);
}

delete2.addEventListener("click", () => {
  removeInvoice();
  window.location.href = "../../index.html";
});
