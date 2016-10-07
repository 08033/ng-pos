/**
 * Created by hassan.rizvi on 10/6/2016.
 */
var posCtrl = app.controller('posController', [function () {
    var pos = this;

    pos.mainHeading = 'Point of Sale';
    pos.totalBill = 0;
    pos.selectedCategory = '';
    pos.selectedProducts = [];

    Array.prototype.sum = function (prop) {
        var total = 0
        for ( var i = 0, _len = this.length; i < _len; i++ ) {
            total += this[i][prop]
        }
        return total
    };

    pos.onCategorySelect = function (categoryName) {
        pos.selectedCategory = categoryName;
    };

    pos.isCategorySelected = function (categoryName) {
        return pos.selectedCategory === categoryName;
    };

    pos.onProductSelect = function (prod) {
        pos.selectedProducts.push(prod);

        //Adding to total bill
        pos.totalBill += prod.productCost;
    };

    pos.onCashOut = function () {
        pos.selectedProducts = [];
        pos.totalBill = 0;
    };

    //Data from FoodPanda
    pos.category = [{
        categoryName: 'Burgers',
        products: [{productName: 'Zinger Burger', productCost: 260}, {
            productName: 'Chicken Burger',
            productCost: 200
        }, {
            productName: 'Beef Burger',
            productCost: 250
        }, {productName: 'Big Boss', productCost: 240}, {productName: '6 Incher', productCost: 210}]
    },
        {
            categoryName: 'Gravy',
            products: [{productName: 'Sweet & Sour', productCost: 224}, {
                productName: 'Chicken Chilli',
                productCost: 216
            }, {
                productName: 'Chicken Shashlik',
                productCost: 216
            }, {productName: 'Chicken Jalfarezi', productCost: 224}, {productName: 'Beef Chilli', productCost: 224}]
        }, {
            categoryName: 'Rice',
            products: [{productName: 'Spice Special Fried Rice', productCost: 200}, {
                productName: 'Chicken Fried Rice',
                productCost: 130
            }, {
                productName: 'Garlic Fried Rice',
                productCost: 120
            }, {productName: 'Vegetable Fried Rice', productCost: 112}, {productName: 'Plain Rice', productCost: 80}]
        }, {
            categoryName: 'BBQ',
            products: [{productName: 'Chicken Tikka', productCost: 120}, {
                productName: 'Chicken Malai Boti',
                productCost: 170
            }, {
                productName: 'Chicken Reshmi Kabab',
                productCost: 160
            }, {productName: 'Beef Seekh Kabab', productCost: 160}]
        }, {
            categoryName: 'Drinks',
            products: [{productName: 'Pepsi', productCost: 30}, {productName: 'CocoCola', productCost: 30}, {
                productName: 'Sprite',
                productCost: 30
            }, {productName: 'Pakola', productCost: 30}, {productName: 'RedBull', productCost: 60}]
        }, {
            categoryName: 'Salad',
            products: [{productName: 'Russian Salad', productCost: 120}, {
                productName: 'Chicken Pineapple Salad',
                productCost: 120
            }, {
                productName: 'Green Salad',
                productCost: 30
            }]
        }];

}]);