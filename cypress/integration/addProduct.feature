Feature: AddProduct 

   As a user, want to conduct a search, to add the product to shopping cart

Scenario: Add Faded Short Sleeve to Cart
    Given that access Automation Practice
    When click on search text area
    And fill in the search field with the product called Faded Short Sleeve
    When click on the search button
    Then must get the result of the product
    Then check if the product was successfully added to the cart
    When  add the product found to shopping cart
    Then check if the added product is equivalent to the product researched and chose
    Then check if the product has been added in my cart and if it is in stock
    

