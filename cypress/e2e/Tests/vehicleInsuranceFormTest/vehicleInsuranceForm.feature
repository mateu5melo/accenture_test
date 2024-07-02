Feature: Send an automobile insurance quote request
    Scenario: The automobile insurance quote request is successfully sent
        Given I am on the automobile insurance quote request first step
        When I submit vehicle information correctly
        And I submit insurant information correctly
        And I submit product information correctly
        And I submit my price choice
        And I submit quotation information correctly
        Then I should see the email sending confirmation