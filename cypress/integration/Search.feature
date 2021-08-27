Feature: Search

    As a user, I want to conduct a search

    Scenario: Search for Faded Short Sleeve
        Given that access Automation Practice
        When that click in the field of search
        And fill in the search field with the product called Faded Short Sleeve
        When click on the search button
        Then must get the result of the product