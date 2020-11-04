// Global Variables
  var totalPrice = 0;
  var espressoPrice = 2.99;
  var coldbrewPrice = 3.99;
  var lattePrice = 4.99;
// Global Variables

$(document).ready(function(){
  // Form Submission
    $("form").submit(function(){
      if(totalPrice == '0'){
        alert("Your order total must be greater than $0.00");
      } else {
        alert("Submitted");
      }
    });
  // Form Submission

  // On Qty change
    // Espresso
    $(document).on("change keyup blur", "#form-espresso-qty", function(){ getDisplayCalc(); });
    // Coldbrew
    $(document).on("change keyup blur", "#form-coldbrew-qty", function(){ getDisplayCalc(); });
    // Latte
    $(document).on("change keyup blur", "#form-latte-qty", function(){ getDisplayCalc(); });
  // On Qty change
});