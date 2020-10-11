function handlerProductChange(product , isIncrease) {
    
   const productCount = getInputValue(product);
   
   let productNewCount = productCount ;
   if (isIncrease == true  ) {
      productNewCount = productCount + 1;
   }if (isIncrease == false && productCount > 0) {
      productNewCount = productCount - 1;
   }
   document.getElementById( product +'-count').value = productNewCount;
   let productTotal = 0;
   if (product == 'phone') {
      productTotal = productNewCount * 1219;
   }if (product == 'case') {
      productTotal = productNewCount * 59;
   }

   document.getElementById(product + '-total').innerText = productTotal;
   calculateTotal();
 
};

function calculateTotal (params) {
  
   const phoneCount = getInputValue("phone")
   const caseCount = getInputValue("case")
   
   const totalPrice = phoneCount * 1219 + caseCount * 59;
   document.getElementById("total-price").innerText = totalPrice;

   const tax = Math.round(totalPrice * 0.1);
   document.getElementById("tax-amount").innerText = tax;

   const grandTotal = totalPrice + tax ;
   document.getElementById("grand-total").innerText = grandTotal;

};

function getInputValue(product) {
   const productInput = document.getElementById(product +"-count");
   const productCount = parseInt(productInput.value);
   return productCount;
}





// function handlerMobileChange (isIncrease) {
//    const phoneInput = document.getElementById("phone-count");
//    const phoneCount = parseInt(phoneInput.value);
//    let phoneNewCount = phoneCount ;
//    if (isIncrease == true) {
//       phoneNewCount = phoneCount + 1;
//    }if (isIncrease == false) {
//       phoneNewCount = phoneCount - 1;
//    }
//    phoneInput.value = phoneNewCount;
//    const phoneTotal = phoneNewCount * 1219;
//    document.getElementById("phone-total").innerText = phoneTotal;
// }


// const phoneIncrease = document.getElementById("phone-increase");
// phoneIncrease.addEventListener("click" , function () {
//    handlerProductChange ('phone',true);
//    // const phoneInput = document.getElementById("phone-count");
//    // const phoneCount = parseInt(phoneInput.value);
//    // const phoneNewCount = phoneCount + 1;
//    // phoneInput.value = phoneNewCount;
//    // const phoneTotal = phoneNewCount * 1219;
//    // document.getElementById("phone-total").innerText = phoneTotal;

// });

// const phoneDecrease = document.getElementById("phone-decrease");
// phoneDecrease.addEventListener("click" , function () {
//    handlerProductChange ('phone',false);
//    // const phoneInput = document.getElementById("phone-count");
//    // const phoneCount = parseInt(phoneInput.value);
//    // const phoneNewCount = phoneCount - 1;
//    // phoneInput.value = phoneNewCount;
//    // const phoneTotal = phoneNewCount * 1219;
//    // document.getElementById("phone-total").innerText = phoneTotal;
   
// })


