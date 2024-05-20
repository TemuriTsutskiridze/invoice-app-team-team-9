// let moon = document.querySelector(".moonIcon");
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
let clientName = document.querySelector(".clientName");
let orderSummaryBox = document.querySelectorAll(".orderSummaryBox");
let orderTotalBox = document.querySelector(".orderTotalBox");
let buttonsContainer2 = document.querySelector(".buttonsContainer2");
let buttonsBox2 = document.querySelector(".buttonsBox2");
let buttonsBox = document.querySelector(".buttonsBox");
let newDiv = document.querySelector(".new-div");
let indexMain = document.querySelector(".indexMain");
let createInvoiceMain = document.querySelector(".createInvoiceMain");
let headerMain = document.querySelector(".header-main");

//input selection

let streetAddress = document.querySelector('[name="streetAdress"]');
let city = document.querySelector('[name="city"]');
let postCode = document.querySelector('[name="postCode"]');
let country = document.querySelector('[name="country"]');
let clientEmail = document.querySelector('[name="clientEmail"]');
let toStreetAdress = document.querySelector('[name="toStreetAdress"]');
let toCity = document.querySelector('[name="toCity"]');
let toPostCode = document.querySelector('[name="toPostCode"]');
let toCountry = document.querySelector('[name="toCountry"]');
let paymentTerms = document.querySelector('[name="paymentTerms"]');
let projectDescription = document.querySelector('[name="projectDescription"]');
let itemName = document.querySelector('[name="itemName"]');
let qty = document.querySelector('[name="qty"]');
let price = document.querySelector('[name="price"]');
let total = document.querySelector('[name="total"]');
streetAddress.style.color = "red";
//for dark mode functionality
// moon.addEventListener("click", () => {
//   input.forEach((el) => el.classList.toggle("input-dark-mode"));
//   label.forEach((el) => el.classList.toggle("label-dark-mode"));
//   main.classList.toggle("dark-mode");
//   addNewItem.classList.toggle("dark-mode");
//   addNewItem.classList.toggle("dark-mode-dark-blue");
//   addNewItem.classList.toggle("input-dark-mode-bgc");
//   linearBoxDiv.classList.toggle("dark-mode");
//   linearBoxDiv.style.border = "0";
//   buttonsContainer.classList.toggle("invoice-dark-mode");
//   cancelBtn.classList.toggle("input-dark-mode-bgc");
//   invoiceView.classList.toggle("dark-mode");
//   statusBox.classList.toggle("invoice-dark-mode");
//   invoiceSummary.classList.toggle("invoice-dark-mode");
//   invoiceSummary.classList.toggle("dark-mode-light");
//   invoiceTitle.classList.toggle("dark-mode-white");
//   invoiceDate.classList.toggle("dark-mode-white");
//   paymentTerms.classList.toggle("dark-mode-white");
//   orderSummaryBox.forEach((el) => el.classList.toggle("input-dark-mode"));
//   clientName.classList.toggle("dark-mode-white");
//   itemName.forEach((el) => el.classList.toggle("dark-mode-white"));
//   total.forEach((el) => el.classList.toggle("dark-mode-white"));
//   clientEmail.classList.toggle("dark-mode-white");
//   orderTotalBox.classList.toggle("dark-mode-dark");
//   buttonsContainer2.classList.toggle("invoice-dark-mode");
// });

//for edit functionality

// let editBtn = document.querySelector(".editBtn");
// let deleteBtn = document.querySelector(".deleteBtn");
// let paidBtn = document.querySelector(".paidBtn");

// editBtn.addEventListener("click", () => {
//   invoiceView.classList.replace("displayBlock", "displayNone");
//   buttonsBox2.classList.replace("displayBlock", "displayNone");
//   main.classList.replace("displayNone", "displayBlock");
//   buttonsBox.classList.replace("displayNone", "displayBlock");
//   linearBoxDiv.classList.replace("displayNone", "displayBlock");
// });

cancelBtn.addEventListener("click", () => {
  indexMain.classList.replace("displayNone", "displayBlock");
  headerMain.classList.replace("displayNone", "displayFlex");
  createInvoiceMain.classList.replace("displayBlock", "displayNone");
  buttonsBox.classList.replace("displayBlock", "displayNone");
  linearBoxDiv.classList.replace("displayBlock", "displayNone");
});

newDiv.addEventListener("click", () => {
  indexMain.classList.replace("displayBlock", "displayNone");
  headerMain.classList.replace("displayFlex", "displayNone");
  createInvoiceMain.classList.replace("displayNone", "displayBlock");
  buttonsBox.classList.replace("displayNone", "displayBlock");
  linearBoxDiv.classList.replace("displayNone", "displayBlock");
});
