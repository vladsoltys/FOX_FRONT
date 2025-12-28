/** ### 'THIS' OUT OF THE OBJECT ### */

const product = {
    prop: "Laptop",
    showProduct: function () {
        console.log(this);
    },
    present: {
        name: "Mouse",
        showPresent: function () {
            console.log(this);
        }
    }
};

/** 'this' will be out of 'product' object */
const showProductNew = product.showProduct;
showProductNew(); 