let count = 0;
// player cart selection  start
function selectbtn(cart) {
  const name = cart.parentNode.childNodes[3].innerText;
  if (count === 5) {
    alert("You Already Five Player Selected..!");
    return;
  }
  count++;

  let countDot = count + ".";
  cart.parentNode.childNodes[7].setAttribute("class", "btn disabled");
  cart.parentNode.childNodes[7].innerText = "SELECTED";

  const select = document.querySelector(".select");
  const h2 = document.createElement("h2");
  h2.innerHTML = `
            <span>${countDot}</span>
            <span>${name}</span>

    `;
  select.appendChild(h2);

  const button = cart.parentNode.childNodes[7];
  button.disabled = true;
}
// player cart selection end

// calculate start
document.getElementById("calculate").addEventListener("click", function () {
  const perPlayer = inputValue("per-player");

  const textValue = document.getElementById("expenses");
  const textValueInnerText = textValue.innerText;
  // const multiple =  0 * ;
  if (isNaN(perPlayer)) {
    alert("Please Provide Number...!");
    return;
  }
  if (count === 0) {
    textValue.innerText = perPlayer;
    return;
  }
  textValue.innerText = count * perPlayer;
});
// calculate end

// calculate total start
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const manager = inputValue("manager");
    const coach = inputValue("coach");

    const expenses = document.getElementById("expenses");
    const expensesValueInnerText = expenses.innerText;
    const newExpenses = parseFloat(expensesValueInnerText);

    const textValue = document.getElementById("total");
    const textValueInnerText = textValue.innerText;

    const managerTaka = manager + 0;
    const coachTaka = coach + 0;
    const newExpensesTaka = newExpenses + 0;
    console.log(managerTaka);
    const total = newExpenses + manager + coach;
    textValue.innerText = total;

    if (isNaN(textValue.innerText)) {
      alert("Please Provide Number...!");
      return;
    }
  });
// calculate total end