// async function colab(){
//     const userResponse= await fetch("https://invoiceapi-rpgn.onrender.com/api/"),{
//         method:"POST",
//         headers: {
//             "Content-Type":"application/json"
//         },
//         body{


//         }
//     }
// }


// async function fetchData(){
    
//     const response = await fetch("https://invoiceapi-rpgn.onrender.com/api/"){
//     result = response.json()
        
//         method: "GET",
//         headers:{
//             "Content-type":" application/json"
//         },
        
//     }
// }


async function fetchData() {
   
        const response = await fetch("https://invoiceapi-rpgn.onrender.com/api/invoices", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
  
        const data = await response.json();

        data.forEach(invoice => {
            indexMain.innerHTML+=`
            <div class="invoice1">
            <div class="code-name">
              <span>#RT3080</span>
              <p>${invoice.reciever_username}</p>
            </div>
            <div class="invoice-secondary-source">
              <div class="date-price">
                <span>${invoice.payment_start_date}</span>
                <p>${invoice.item_total_price}</p>
              </div>
              <div class="pay-div">
                <div class="oval-pay">
                  <div class="oval"></div>
                  <p>Paid</p>
                </div>
              </div>
            </div>
          </div>
          `
            
        });
    
}
fetchData();