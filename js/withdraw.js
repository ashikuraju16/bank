document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotaltString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotaltString);

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotaltString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotaltString);

  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  withdrawField.value = "";
});
