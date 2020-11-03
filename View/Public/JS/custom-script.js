// Global Variables
  var totalPrice = 0;
  var espressoPrice = 2.5;
  var coldbrewPrice = 3.5;
  var lattePrice = 4.5;
// Global Variables

$(document).ready(function(){
  // Form
    // Submission
      $("form").submit(function(){
        if(totalPrice == '0'){
          alert("Your order total must be greater than $0.00");
        } else {
          alert("Submitted");
        }
      });
    // Submission

    // Reset
      function resetForm(){
        form-zips-coffee
      }
    // Reset
  // Form

  // Form Update
    // Espresso
    $(document).on("change keyup blur", "#form-espresso-qty", function() {
      var espressoQty = $('#form-espresso-qty').val();
      getCalcDisplay(espressoQty, espressoPrice);
    });

    // Coldbrew
    $(document).on("change keyup blur", "#form-coldbrew-qty", function() {
      var coldbrewQty = $('#form-coldbrew-qty').val();
      getCalcDisplay(coldbrewQty, coldbrewPrice);
    });

    // Latte
    $(document).on("change keyup blur", "#form-latte-qty", function() {
      var latteQty = $('#form-latte-qty').val();
      getCalcDisplay(latteQty, lattePrice);
    });

    // Calc & Display
      function getCalcDisplay(qty, price){
        if(qty == 0){
          totalPrice = totalPrice - price;
        } else {
          totalPrice = totalPrice + price;
        }
        
        $('#form-total-price').val("$" + totalPrice.toFixed(2));
      }
    // Calc & Display
  // Form Update
});
