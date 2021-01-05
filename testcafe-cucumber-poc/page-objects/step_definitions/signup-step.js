const {Given, When, And, Then} = require('cucumber')
const env = require('dotenv').config()
import SignupPage from '../pages/SignupPage'

const signupPage = new SignupPage()

Given(/^User go to signup page$/, async (t) => {
    await t.navigateTo(`${process.env.BASE_URL}`)
})

When(/^User try register as "([^"]*)"$/, async (t, [userType]) => {
    if (userType == 'Retailer'){
        await t.click(signupPage.radiobutton)
    }
    else if (userType == 'Distribution'){
        await t.click(signupPage.distri_radio)
    }
})

Then(/^User will see "([^"]*)"$/, async (t, [typeLabel]) => {
    if (typeLabel == 'Retailer Company Name'){
        await t.expect(signupPage.retailer_placeholder.innerText).contains(typeLabel)
    } else if (typeLabel == 'Distribution Company Name'){
        await t.expect(signupPage.distri_placeholder.innerText).contains(typeLabel)
    }
})
When(/^user input company Name as "([^"]*)"$/, async (t, [companyName]) => {
    await t.typeText(signupPage.company_name, companyName,{ paste: true, replace: true })
})
And(/^user input user Name as "([^"]*)"$/, async (t, [userName]) => {
    await t.typeText(signupPage.user_name, userName,{ paste: true, replace: true })
})
And(/^user input email as "([^"]*)"$/, async (t, [email]) => {
    await t.typeText(signupPage.email, email,{ paste: true, replace: true })
})
And(/^user input password as "([^"]*)"$/, async (t, [password]) => {
    await t.typeText(signupPage.password, password,{ paste: true, replace: true })
})
And(/^user click Sign up button$/, async (t) => {
    await t.click(signupPage.signup_button)
})

Then(/^user will see register success page$/, async (t) => {
    await t.expect(signupPage.newUser.exists).Ok()
})