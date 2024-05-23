document.addEventListener("DOMContentLoaded", () => {
  const indexMain = document.querySelector(".indexMain");
  const createInvoiceMain = document.querySelector(".createInvoiceMain");
  const headerMain = document.querySelector(".header-main");
  const newDiv = document.querySelector(".new-div");
  const cancelBtn = document.querySelector(".cancelBtn");
  const saveChangesBtn = document.querySelector(".saveChangesBtn");
  const linearBoxDiv = document.querySelector(".linearBoxDiv");
  const buttonsBox = document.querySelector(".buttonsBox");

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
    indexMain.classList.replace("displayBlock", "displayNone");
    headerMain.classList.replace("displayFlex", "displayNone");
    createInvoiceMain.classList.replace("displayNone", "displayBlock");
    buttonsBox.classList.replace("displayNone", "displayBlock");
    linearBoxDiv.classList.replace("displayNone", "displayBlock");
  });

  cancelBtn.addEventListener("click", () => {
    indexMain.classList.replace("displayNone", "displayBlock");
    headerMain.classList.replace("displayNone", "displayFlex");
    createInvoiceMain.classList.replace("displayBlock", "displayNone");
    buttonsBox.classList.replace("displayBlock", "displayNone");
    linearBoxDiv.classList.replace("displayBlock", "displayNone");
  });

  async function addNewInvoice() {
    const itemName = document.querySelector("#itemName");
    const price = document.querySelector("#price");
    const qty = document.querySelector("#qty");
    const projectDescription = document.querySelector("#projectDescription");
    const fromCountry = document.querySelector("#fromCountry");
    const fromCity = document.querySelector("#fromCity");
    const fromStreetAdress = document.querySelector("#fromStreetAdress");
    const fromPostCode = document.querySelector("#fromPostCode");
    const toClientName = document.querySelector("#toClientName");
    const clientEmail = document.querySelector("#clientEmail");
    const toCountry = document.querySelector("#toCountry");
    const toCity = document.querySelector("#toCity");
    const clientStreetAdress = document.querySelector("#clientStreetAdress");
    const toPostCode = document.querySelector("#toPostCode");
    const paymentTerms = document.querySelector("#paymentTerms");
    const invoiceDateID = document.querySelector("#invoiceDate");

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
          sender_username: `${Math.random() * 100}`,
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
  }

  // Event listener to save changes
  saveChangesBtn.addEventListener("click", () => {
    addNewInvoice();
  });
});

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
