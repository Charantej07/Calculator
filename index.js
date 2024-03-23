function handleButtonClick(key) {
  var displayInput = $("input[name='display']");
  var displayValue = displayInput.val();
  var bt = $("button").filter(function () {
    return $(this).text() === key;
  });

  bt.addClass("calc-btn-click");
  setTimeout(function () {
    bt.removeClass("calc-btn-click");
  }, 100);

  if (key === "AC") {
    displayInput.val("");
  } else if (key === "DE") {
    displayInput.val(displayValue.slice(0, -1));
  } else if (key === "=" || key === "Enter") {
    try {
      var result = eval(displayValue);
      displayInput.val(result);
    } catch (error) {
      displayInput.val("Error");
    }
  } else {
    displayInput.val(displayValue + key);
  }
}

$("button").click(function (event) {
  event.preventDefault();
  var key = $(this).text();
  handleButtonClick(key);
});

$(document).keydown(function (event) {
  var key = event.key;
  if (/^[0-9+\-*/.=]$/.test(key)) {
    handleButtonClick(key);
  } else if (key === "Enter") {
    handleButtonClick("=");
  } else if (key === "Backspace") {
    handleButtonClick("DE");
  } else if (key === "Delete") {
    handleButtonClick("AC");
  }
});
