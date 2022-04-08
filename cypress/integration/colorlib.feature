@scenarios
Feature: Colorlib
I want to login in Colorlib page 
    @scenario1
    Scenario: Colorlib Login
        Given I open Colorlib page
        When I type in
        |username| password|
        |demo    | demo    |
        Then "Bootstrap-Admin-Template" should be shown 
