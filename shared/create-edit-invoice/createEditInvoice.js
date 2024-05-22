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
let orderSummaryBox = document.querySelectorAll(".orderSummaryBox");
let orderTotalBox = document.querySelector(".orderTotalBox");
let buttonsContainer2 = document.querySelector(".buttonsContainer2");
let buttonsBox2 = document.querySelector(".buttonsBox2");
let buttonsBox = document.querySelector(".buttonsBox");
let newDiv = document.querySelector(".new-div");
let indexMain = document.querySelector(".indexMain");
let createInvoiceMain = document.querySelector(".createInvoiceMain");
let headerMain = document.querySelector(".header-main");
let saveChangesBtn = document.querySelector(".saveChangesBtn");

// //inputs selections
let clientName = document.querySelector("#toClientName");
let fromStreetAdress = document.querySelector("#fromStreetAdress");
let fromCity = document.querySelector("#fromCity");
let fromPostCode = document.querySelector("#fromPostCode");
let fromCountry = document.querySelector("#fromCountry");
let toClientName = document.querySelector("#toClientName");
let clientStreetAdress = document.querySelector("#clientStreetAdress");
let toCity = document.querySelector("#toCity");
let toPostCode = document.querySelector("#toPostCode");
let toCountry = document.querySelector("#toCountry");
let paymentTerms = document.querySelector("#paymentTerms");
let projectDescription = document.querySelector("#projectDescription");
let itemName = document.querySelector("#itemName");
let qty = document.querySelector("#qty");
let price = document.querySelector("#price");
let total = document.querySelector("#total");
let clientEmail = document.querySelector("#clientEmail");
let invoiceDateID = document.querySelector("#invoiceDate");

//adding new item functionality

async function addNewInvoice() {
  const response = await fetch(
    "https://invoiceapi-rpgn.onrender.com/api/invoices",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_list: [
          {
            name: itemName.value,
            price: price.value,
            quantity: qty.value,
          },
        ],
        serial_number: "string",
        status: "pending",
        description: projectDescription.value,
        sender_username: clientName.value,
        sender_email: `${Math.random() * 100}@gmail.com`,
        sender_country: fromCountry.value,
        sender_city: fromCity.value,
        sender_street_address: fromStreetAdress.value,
        sender_postcode: fromPostCode.value,
        reciever_username: toClientName.value,
        reciever_email: clientEmail.value,
        reciever_country: toCountry.value,
        reciever_city: toCity.value,
        reciever_street_address: clientStreetAdress.value,
        reciever_postcode: toPostCode.value,
        payment_terms: paymentTerms.value,
        payment_start_date: invoiceDateID.value,
        payment_end_date: "2024-05-22",
      }),
    }
  );

  const data = await response.json();
  console.log(response);
  console.log(data);
  console.log(body);
}

// addNewInvoice();

//for dark mode functionality
// moon.addEventListener("click", () => {
//   input.forEach((el) => el.classList.toggle("input-dark-mode"));
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

projectDescription.style.color = "red";

saveChangesBtn.addEventListener("click", () => {
  addNewInvoice();
});
