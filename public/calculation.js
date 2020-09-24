
function calculate() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var elemResultText = document.getElementById("resultText");
    var elemResult= document.getElementById("result");

    if (elemResultText.textContent === undefined) {
       elemResultText.textContent = "result is " + String(num1 + num2) + ".";
       elemResult.value = num1 + num2;
    }
    else { // IE
        elemResultText.innerText = "result is" + String(num1 + num2) + ".";
       elemResult.value = num1 + num2;

    }
  
}

window.calculate = calculate;
