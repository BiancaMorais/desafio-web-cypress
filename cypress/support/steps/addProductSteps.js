import addProductPage from '../pageObjects/addProductPage'
const addproductPage = new addProductPage

Given(/^that access Automation Practice$/, () => {
    addproductPage.acessAutomationPactice();
});

When(/^click on search text area$/, () => {
    addproductPage.clickTextArea();
});

And(/^fill in the search field with the product called Faded Short Sleeve$/, () => {
    addproductPage.searchProduct()
});

When(/^click on the search button$/, () => {
    addproductPage.clickSearchButton();
});

When(/^must get the result of the product$/, () => {
    addproductPage.getResult();
}),

    Then(/^add the product found to shopping cart$/, () => {
        addproductPage.addProduct();
    }),

    Then(/^check if the product was successfully added to the cart$/, () => {
        addproductPage.checkResultCart();
    }),


    Then(/^check if the added product is equivalent to the product researched and chose$/, () => {
        addproductPage.checkResultProductCart();
    });

Then(/^check if the product has been added in my cart and if it is in stock$/, () => {
    addproductPage.checkOrder();
});



