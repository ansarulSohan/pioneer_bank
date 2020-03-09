const transactionArea = document.getElementById("transaction-area");
transactionArea.style.display = "none"

const btn = document.getElementById("btn-login");
btn.addEventListener("click", function() {
    document.getElementById("login-area").style.display = "none";
    transactionArea.style.display = "block";
})

