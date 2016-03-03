var result = ""; //must be a string so it concatenates rather than adds
var nonNum = false; //prevents user from pressing non numbers multiple times in a row

function calc(digit){

    if (digit == "sum"){
        $("#resultBox").val(eval(result));
    }
    else if (digit == "clear"){
        location.reload();
    }
    else if (isNaN(digit) && nonNum == true || digit == "-"){
        result += digit;
        nonNum = false; 
    }
    else if (!isNaN(digit)){
      result += digit; 
      $("#resultBox").val(result);
      nonNum = true;  
    }
}