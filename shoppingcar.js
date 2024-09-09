$(function () {
   var selectedItems = []; // 用于存储选择的商品信息

   // 当点击尺寸按钮时，将该商品信息添加到 selectedItems 数组中
   $('.my-cart-btn-outline').click(function() {
       var item = {
           id: $(this).data('id'),
           name: $(this).data('name'),
           summary: $(this).data('summary'),
           price: $(this).data('price'),
           quantity: $(this).data('quantity'),
           image: $(this).data('image')
       };

       // 检查商品是否已在selectedItems中
       var exists = selectedItems.some(function(existingItem) {
           return existingItem.id === item.id;
       });

       if (!exists) {
           selectedItems.push(item); // 只有当商品不在数组中时才推入数组
       }

       // 更新“加入购物车”按钮的文本，显示已选的商品数量
       $('.my-cart-btn-danger').text('加入購物車 (' + selectedItems.length + ')');
   });

   // 当点击“加入购物车”按钮时，将 selectedItems 中的所有商品添加到购物车
   $('.my-cart-btn-danger').click(function() {
       if (selectedItems.length === 0) {
           alert('请先选择一个尺寸再加入购物车。'); // 提示用户选择尺寸
           return; // 阻止未选择尺寸时添加到购物车
       }

       $.each(selectedItems, function(index, item) {
           // 调用 myCart 插件的 addToCart 方法，将商品添加到购物车
           $('.my-cart-btn').myCart('addToCart', item.id, item.name, item.summary, item.price, item.quantity, item.image);
       });

       // 清空已选的商品数组并重置“加入购物车”按钮的文本
       selectedItems = [];
       $(this).text('加入購物車');
   });

   // 初始化 myCart 插件
   $('.my-cart-btn').myCart({
       checkoutCart: function(products, totalPrice, totalQuantity) {
           var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
           checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
           $.each(products, function() {
               checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
           });
           alert(checkoutString);
           console.log("checking out", products, totalPrice, totalQuantity);
       }
   });
});


localStorage.setItem('key', 'value');
 const lsData = localStorage.getItem('key');
 localStorage.removeItem('key');
 localStorage.clear();