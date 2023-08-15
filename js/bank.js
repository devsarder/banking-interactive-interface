document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositAmount = document.getElementById("balance-deposit");
  const deposit = depositAmount.value;
  const totalDepositInNumber = parseFloat(deposit);

  const totalDeposit = document.getElementById("updated-deposit");
  const totalDepositAmount = totalDeposit.innerText;
  const depositInNumber = parseFloat(totalDepositAmount);
  totalDeposit.innerText = deposit;

  const totalUpdatedDeposit = totalDepositInNumber + depositInNumber;
  const totalUpdatedDepositInNumber = parseFloat(totalUpdatedDeposit.innerText);
  totalDeposit.innerText = totalUpdatedDeposit;

  const balance = document.getElementById("updated-balance");
  const balanceInNumber = parseFloat(balance.innerText);
  balance.innerText = balanceInNumber + totalDepositInNumber;

  //   last step clearing input field previous value

  depositAmount.value = "";
});

// event handlers for withdrawing Balance
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawInput = document.getElementById("balance-withdraw");
  const withdrawInputValue = parseFloat(withdrawInput.value);

  const withdraw = document.getElementById("updated-withdraw");
  const previousWithdraw = parseFloat(withdraw.innerText);

  const totalWithdraw = withdrawInputValue + previousWithdraw;
  withdraw.innerText = totalWithdraw;

  const balance = document.getElementById("updated-balance");
  const balanceInNumber = parseFloat(balance.innerText);
  balance.innerText = balanceInNumber - totalWithdraw;

  // last step
  withdrawInput.value = "";
});
// ket up event handler
document
  .getElementById("balance-withdraw")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const withdrawInput = document.getElementById("balance-withdraw");
      const withdrawInputValue = parseFloat(withdrawInput.value);

      const withdraw = document.getElementById("updated-withdraw");
      const previousWithdraw = parseFloat(withdraw.innerText);

      const totalWithdraw = withdrawInputValue + previousWithdraw;
      withdraw.innerText = totalWithdraw;

      const balance = document.getElementById("updated-balance");
      const balanceInNumber = parseFloat(balance.innerText);
      balance.innerText = balanceInNumber - totalWithdraw;

      // last step
      withdrawInput.value = "";
    }
  });
