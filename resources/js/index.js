const transactionArea = document.getElementById("transaction-area");
transactionArea.style.display = "none";
var numberFormatter = new Intl.NumberFormat('en-IN');

const amDeposit = document.getElementById("inputDeposit");

const amWithdraw = document.getElementById("inputWithdraw");

var balance = 0;

function updateBalance(updatedValue) {
  document.getElementById("balance").innerText = "$" + numberFormatter.format(updatedValue);
}

//login button
const btn = document.getElementById("btn-login");
btn.addEventListener("click", function() {
  document.getElementById("login-area").style.display = "none";
  transactionArea.style.display = "block";
});

function deposit() {
  var amount = parseFloat(amDeposit.value);
  if (amount > 0) {
    balance = balance + amount;
    document.getElementById("depositAmount").innerText = numberFormatter.format(amount);
    updateBalance(balance);
    amDeposit.value = 0;
    console.log(new Date(), "deposit: " , amount);
  }
  else {
    alert("Invalid amount!");
  }
}

amDeposit.addEventListener('click', function () {
  amWithdraw.value = null;
})

const btnDeposit = document.getElementById("depositButton");
btnDeposit.addEventListener("click", deposit);


amWithdraw.addEventListener("click", function () {
  amDeposit.value = null;
})

const btnWithdraw = document.getElementById("withdrawButton");

function withdraw() {
    var amount = parseFloat(amWithdraw.value);
    if(amount > 0 && balance - amount >= 500) {
      balance = balance - amount;
      document.getElementById("withdrawAmount").innerText = numberFormatter.format(amount);
      updateBalance(balance);
      amWithdraw.value = 0;
      console.log(new Date(), "withdraw: ", amount);
    }
  
    else{
      alert("Invalid amount!");
      console.log(new Date(), "Insufficient Balance");
    }
}

btnWithdraw.addEventListener("click", withdraw);
