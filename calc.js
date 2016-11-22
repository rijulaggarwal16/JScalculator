window.onload = function() {
    var digitElements = document.querySelectorAll('.num');
    var length = digitElements.length;
    var i = 0;
    var firstNumber;
    var secNumber;
    var op;

    var result = document.getElementById("result");
    for (i = 0; i < length; i++) {
        digitElements[i].addEventListener('click', function() {
            var number = this.value;
            result.innerHTML += number;
        });
    }

    var opElements = document.querySelectorAll('.operator');
    for (i = 0; i < opElements.length; i++) {
        opElements[i].addEventListener('click', function() {
            
                firstNumber = result.innerHTML;
            
            result.innerHTML = "";
            op = this.value;
        });
    }

    var eq = document.querySelectorAll('.eqn')[0];
    eq.addEventListener('click', function(){
        secNumber = result.innerHTML;
        var num1 = parseFloat(firstNumber);
        var num2 = parseFloat(secNumber);
        var final;
        if(op == "+"){
            final = num1 + num2;
        }
        result.innerHTML = final;
    });

}