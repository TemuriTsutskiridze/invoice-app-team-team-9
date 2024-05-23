// async function fetchData(){

//     const response = await fetch("https://invoiceapi-rpgn.onrender.com/api/"){
//     result = response.json()

//         method: "GET",
//         headers:{
//             "Content-type":" application/json"
//         },

//     }
async function fetchData() {
  try {
    const response = await fetch(
      "https://invoiceapi-rpgn.onrender.com/api/invoices",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    data.forEach((invoice) => {
      indexMain.innerHTML += `
        <a href="pages/invoice/invoice.html?id=${invoice.id}">
          <div class="invoice1">
            <div class="code-name">
              <span>#RT3080</span>
              <p>${invoice.reciever_username}</p>
            </div>
            <div class="invoice-secondary-source">
              <div class="date-price">
                <span>${invoice.payment_start_date}</span>
                <p>£${invoice.item_total_price}</p>
              </div>
              <div class="pay-div">
                <div class="oval-pay">
                  <div class="oval"></div>
                  <p>Paid</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      `;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

newDiv.addEventListener("click", () => {
  indexMain.classList.toggle("displayNone");
  headerMain.classList.toggle("displayNone");
  createInvoiceMain.classList.toggle("displayBlock");
  buttonsBox.classList.toggle("displayNone");
  linearBoxDiv.classList.toggle("displayBlock");
});
