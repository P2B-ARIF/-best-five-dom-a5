function inputValue(input) {
  const inputField = document.getElementById(input);
  const inputFieldValue = inputField.value;
  const inputFieldValueString = parseFloat(inputFieldValue);
  return inputFieldValueString;
}

function textValue(input) {
  const textValue = document.getElementById(input);
  const textValueInnerText = textValue.innerText;
  const newTextValue = parseFloat(textValueInnerText);
  return textValue.innerText;
}
