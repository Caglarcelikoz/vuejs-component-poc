
function calculate(numberA,numberB) {
   document.getElementById("num1").value = numberA;
   document.getElementById("num2").value = numberB;
   var num1 = Number(document.getElementById("num1").value);
   var num2 = Number(document.getElementById("num2").value);
   
    var elemResultText = document.getElementById("resultText");
    var elemResult= document.getElementById("result");

    if (elemResultText.textContent === undefined) {
      elemResult.value = Number(num1)+ Number(num2);
       elemResultText.textContent = "result is " + elemResult.value + ".";
    }
    else { // IE
      elemResult.value = Number(num1)+ Number(num2);
      elemResultText.textContent = "result is " + elemResult.value + ".";

    }
  return elemResult.value;
}

window.calculate = calculate;
