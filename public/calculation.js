
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
    var numbers = new Array();
    numbers['num1']=num1;
    numbers['num2']=num2;
 //   console.log(numbers);
    return numbers;
}

window.calculate = calculate;
