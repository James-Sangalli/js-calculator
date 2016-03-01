var result = ""; //must be a string so it concatenates rather than adds
var nonNum = false; //prevents user from pressing non numbers multiple times in a row

function calc(digit){

    if (digit == "ans"){
        var prevResult = result;
        result = prevResult;
        $("#resultBox").append("Ans");
        nonNum = true;
    }
    else if (digit == "sum"){
        $("#resultBox").val(eval(result));
        nonNum = true;
    }
    else if (digit == "clear"){
        location.reload();
    }
    else if (isNaN(digit) && nonNum == true){
        result += digit;
        nonNum = false; 
    }
    else if (!isNaN(digit)){
      result += digit; 
      $("#resultBox").val(result);
      nonNum = true;  
    }
}

// var result = ""; //must be a string so it concatenates rather than adds

// function calc(digit){

//     if (digit == "ans"){
//         var prevResult = result;
//         result = prevResult;
//         $("#resultBox").append("Ans");
//     }
//     else if (digit == "sum"){
//         $("#resultBox").val(eval(result));
//     }
//     else if (digit == "clear"){
//         location.reload();
//     }
//     else{
//       result += digit; 
//       $("#resultBox").val(result);  
//     }
// }


