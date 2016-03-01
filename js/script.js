var result = ""; //must be a string so it concatenates rather than adds

function calc(digit){

    if (digit == "ans"){
        var prevResult = result;
        result = prevResult;
        $("#resultBox").append("Ans");
    }
    else if (digit == "sum"){
        $("#resultBox").val(eval(result));
    }
    else if (digit == "clear"){
        location.reload();
    }
    else{
      result += digit; 
      $("#resultBox").val(result);  
    }
}
