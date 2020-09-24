const retrieveCalculationFromIndex = (valueA, valueB) => {
  
  const inputNum1 = window.document.getElementById('num1');
  const inputNum2 = window.document.getElementById('num2');
  const inputResult = window.document.getElementById('result');
  inputNum1.value = valueA;
  inputNum2.value = valueB;

  window.calculate();

  return inputResult.value;

}

export { retrieveCalculationFromIndex };