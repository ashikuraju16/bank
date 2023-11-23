document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotaltString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotaltString);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotaltString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotaltString);

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  depositField.value = "";
});
