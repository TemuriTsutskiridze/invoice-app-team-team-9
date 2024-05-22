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

//for edit functionality

let editBtn = document.querySelector(".editBtn");
let deleteBtn = document.querySelector(".deleteBtn");
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

// delete prompts rac exeba


let prompt = document.querySelector(".prompt");
let cancelPrompt = document.querySelector(".cancel")
let delete2 = document.querySelector(".delete")



deleteBtn.addEventListener("click",()=>{
  prompt.style.display="block";
  invoiceView.style.opacity="0.5";
  invoiceView.style.backgroundColor="#000";
  statusBox.style.backgroundColor="#000";
  invoiceSummary.style.backgroundColor="#000";
  orderSummaryBox[0].style.backgroundColor="#000";
  orderSummaryBox[1].style.backgroundColor="#000";
 


    delete2.addEventListener("click",()=>{

    })
  
  
})



cancelPrompt.addEventListener("click",()=>{
  prompt.style.display="none";
  invoiceView.style.opacity="1";
invoiceView.style.backgroundColor="white";
statusBox.style.backgroundColor="white";
invoiceSummary.style.backgroundColor="white";
orderSummaryBox[0].style.backgroundColor="white";
orderSummaryBox[1].style.backgroundColor="white";
})

