/** ### 'THIS' FOR OBJECT ### */

const product = {
  name: "Laptop",
  showProduct: function () {
    console.log(this);
  },
  present: {
    name: "Mouse",
    showPresent: function(){
      console.log(this);
    }
  }
};

product.showProduct();
product.present.showPresent()
