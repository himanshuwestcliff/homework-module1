var code = "";
var getCode = "";
var btnValue;
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

function generateCode() {
  for (var i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }

  return code;
}

document.getElementById("codes").innerHTML = generateCode();

function disableButton(btnValue) {
  document.getElementById("submit").disabled = btnValue;
  if (btnValue == true) {
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 0.3)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    document.getElementById("submit").style.backgroundColor =
      "rgba(73, 119, 209, 1)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
  }
}

var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
  getCode = document.getElementById("codeentered").value;
  var charset1 = getCode.trim();
  var charset2 = code.trim();

  if (charset1.length == charset2.length && charset1 == charset2) {
    disableButton(false);
  }
}
