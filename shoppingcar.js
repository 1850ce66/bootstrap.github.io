$(function () {
   $('.my-cart-btn').myCart({
    checkoutCart: function(products, totalPrice, totalQuantity) {
     var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
     checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
     $.each(products, function(){
      checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
     });
     alert(checkoutString)
     console.log("checking out", products, totalPrice, totalQuantity);
    }
   });
  });
  localStorage.setItem('key', 'value');
  const lsData = localStorage.getItem('key');
  localStorage.removeItem('key');
  localStorage.clear();