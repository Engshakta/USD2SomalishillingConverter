function goToConverter() {
    window.location.href = "converter.html";
  }
  
  function performConversion() {
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;
    const amount = parseFloat(document.getElementById("amount").value);

    let convertedAmount;

    if (fromCurrency === "USD" && toCurrency === "SLSHLNG") {
        convertedAmount = amount * 9500;
    } else if (fromCurrency === "SLSHLNG" && toCurrency === "USD") {
        convertedAmount = amount / 9500;
    } else {
        // Handle unsupported conversion
        console.error("Unsupported conversion");
        return;
    }

    const resultElement = document.getElementById("result");
    resultElement.innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    resultElement.style.visibility = "visible"; // Show the result
}

