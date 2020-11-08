
function calculate(numberA,numberB) {
   document.getElementById("num1").value = numberA;
   document.getElementById("num2").value = numberB;
   var num1 = Number(document.getElementById("num1").value);
   var num2 = Number(document.getElementById("num2").value);
   
    var elemResultText = document.getElementById("resultText");
    var calculationResult= document.getElementById("result");

    if (elemResultText.textContent === undefined) {
      calculationResult.value = Number(num1)+ Number(num2);
      elemResultText.textContent = "result is " + calculationResult.value + ".";
    }
    else { // IE
      calculationResult.value = Number(num1)+ Number(num2);
      elemResultText.textContent = "result is " + calculationResult.value + ".";

    }
  return calculationResult.value;
}

window.calculate = calculate;
