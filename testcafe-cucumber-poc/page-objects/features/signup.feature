@SignupFeature
Feature: Signup Feature

    @ValidSignupName
    Scenario Outline: As I user, I want to signup as "<userType>"
        Given User go to signup page
        When User try register as "<userType>"
        Then User will see "<typeLabel>"
        When user input company Name as "<companyName>"
            And user input user Name as "<userName>"
            And user input email as "<email>"
            And user input password as "<password>"
            And user click Sign up button
        Then user will see register success page

        Examples:
            | userType     | typeLabel                 | companyName  | userName    | email                   |
            | Retailer     | Retailer Company Name     | retailed ltd | mr.retailer | retailer@mailinator.com | retailer1234 |
            | Distribution | Distribution Company Name | Distri ltd   | mr.Distri   | Distri@mailinator.com   | Distri1234 |

