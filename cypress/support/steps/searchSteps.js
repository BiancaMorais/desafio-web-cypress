import searchPage from '../pageobjects/searchPage'
const searchpage = new searchPage


Given(/^that access Automation Practice$/, () => {
    searchpage.acessAutomationPactice();
});

When(/^that click in the field of search$/, () => {
    searchpage.clickTextArea
});

And(/^fill in the search field with the product called Faded Short Sleeve$/, () => {
    searchpage.searchProduct()
});

When(/^click on the search button$/, () => {
    searchpage.clickSearchButton();
});

Then(/^must get the result of the product.$/, () => {
    searchpage.getResult();
});





