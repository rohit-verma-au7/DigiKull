function tipCalculator() {
  var billAmount = parseInt(document.getElementById('number').value);
  // document.getElementById('demo').innerText = billAmount;
  var service = document.getElementById('service').value;
  var serviceCharge = 5;
  if (service === 'excellent') {
    serviceCharge = 20;
  } else if (service === 'medium') {
    serviceCharge = 10;
  }
  // document.getElementById('demo').innerHTML = service;

  var billSharing = parseInt(document.getElementById('sharing').value);
  // document.getElementById('demo').innerText = billSharing;

  var resultTip = ((billAmount / 100) * serviceCharge) / billSharing;
  document.getElementById('demo').innerText = resultTip;
}
