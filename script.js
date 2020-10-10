//Mobile phone plus button event handler
const mobilePlusBtn = document.getElementById('mobile-plus-btn');
mobilePlusBtn.addEventListener('click', function () {
   const mobileAmount = 1219;

   plusBtn("mobile-quantity");
   plusPrice("mobile-price", mobileAmount);
   PlusSubTotal("sub-total",mobileAmount);

});

// mobile phone minus button event handler 
const    mobileMinusBtn = document.getElementById('minus-btn');
mobileMinusBtn.addEventListener("click" , function () {
   const mobileAmount = 1219; 

   minusBtn("mobile-quantity");
   minusPrice("mobile-price", mobileAmount);
   minusSubTotal("sub-total",mobileAmount);
 
  
   
});

// mobile case plus button event handler
const CasePlusBtn = document.getElementById('case-plus-btn');
CasePlusBtn.addEventListener('click', function () {
   const caseAmount = 59;
   
   plusBtn("case-quantity", "case-price")
   plusPrice("case-price", caseAmount);
   PlusSubTotal("sub-total", caseAmount);
});

// mobile case minus button event handler
const caseMinusBtn = document.getElementById("case-minus-btn");
caseMinusBtn.addEventListener('click', function () {
   const caseAmount = 59;
   minusBtn("case-quantity");
   minusPrice("case-price",caseAmount);
   minusSubTotal("sub-total",caseAmount);
}); 

// plus button function
function plusBtn(id) {
   const quantity = document.getElementById(id).value++;

};

// plus price function
function plusPrice(id, mobileAmount) {
   const mobilePrice = document.getElementById(id).innerText;
   const mobilePriceNumber = parseFloat(mobilePrice);
   
   const totalMobilePrice = mobilePriceNumber + mobileAmount;
   document.getElementById(id).innerText = totalMobilePrice;
};

// plus total function
function PlusSubTotal(id, mobileAmount) {
   const subTotal = document.getElementById(id).innerText;
   const subTotalNumber = parseFloat(subTotal);

   const subTotalAmount = subTotalNumber + mobileAmount;
   document.getElementById(id).innerText = subTotalAmount;

   const total = document.getElementById("total").innerText;
   const totalNumber =parseFloat(total);
   const totalAmount = subTotalAmount;
   document.getElementById("total").innerText = totalAmount;
}

// minus button function
function minusBtn(id) {
   const quantity = document.getElementById(id).value--;

}

// minus price function
function minusPrice(id, mobileAmount) {
   const mobilePrice = document.getElementById(id).innerText;
   const mobilePriceNumber = parseFloat(mobilePrice);

   
   const totalMobilePrice = mobilePriceNumber -mobileAmount ;
  
   document.getElementById(id).innerText = totalMobilePrice;
};

// minus total function
function minusSubTotal(id, mobileAmount) {
   const subTotal = document.getElementById(id).innerText;
   const subTotalNumber = parseFloat(subTotal);

   const subTotalAmount = subTotalNumber - mobileAmount;
   document.getElementById(id).innerText = subTotalAmount;

   const total = document.getElementById("total").innerText;
   const totalNumber =parseFloat(total);
   const totalAmount = subTotalAmount;
   document.getElementById("total").innerText = totalAmount;
};

