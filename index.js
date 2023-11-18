$(document).ready(function () {
  console.log("test");
});



var limit = 3


function myFunction() {

  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/jokes?limit=' + 1,
    headers: { 'X-Api-Key': '3BLKrevatAzwN2XxRxhZyA==VceGaKTpSd7PHv3g'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result[0].joke);
        document.getElementById("result").innerHTML = result[0].joke;

    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);

    }
    
});
  // This function will be called when the button is clicked
  // document.getElementById("result").innerHTML = resultjoke;
}