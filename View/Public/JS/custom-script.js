// Global Variables
  var totalPrice = 0;
  var espressoTotal = 0;
  var coldbrewTotal = 0;
  var latteTotal = 0;
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

  // Form Update
    // Espresso Qty
      $(document).on("change keyup blur", "#form-espresso-qty", function(){
        var espressoQty = $('#form-espresso-qty').val();
        var espressoPrice = 2.99;
        espressoTotal = getCalc(espressoQty, espressoPrice);
        getDisplay();
      });
    // Espresso Qty

    // Coldbrew Qty
      $(document).on("change keyup blur", "#form-coldbrew-qty", function(){
        var coldbrewQty = $('#form-coldbrew-qty').val();
        var coldbrewPrice = 3.99;
        coldbrewTotal = getCalc(coldbrewQty, coldbrewPrice);
        getDisplay();
      });
    // Coldbrew Qty

    // Latte Qty
      $(document).on("change keyup blur", "#form-latte-qty", function(){
        var latteQty = $('#form-latte-qty').val();
        var lattePrice = 4.99;
        latteTotal = getCalc(latteQty, lattePrice);
        getDisplay();
      });
    // Latte Qty

    // Calc Price
      function getCalc(qty, price){
          calcPrice = qty * price;
          return calcPrice;
      }
    // Calc Price

    // Display
      function getDisplay(){
        totalPrice = espressoTotal + coldbrewTotal + latteTotal;
        $('#form-total-price').val("$" + totalPrice.toFixed(2));
      }
    // Display
  // Form Update
});