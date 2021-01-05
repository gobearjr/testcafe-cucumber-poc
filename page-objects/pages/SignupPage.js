import {Selector, t} from 'testcafe'

class SignupPage{
    constructor(){
        this.retailer_radio=Selector(".retail-button")
        this.distri_radio=Selector(".distri-button")
        this.retailer_placeholder=Selector(".input-company").withAttribute('placeholder','Retailer Company Name')
        this.distri_placeholder=Selector(".input-company").withAttribute('placeholder','Distribution Company Name')
        this.company_name=Selector(".company-input")
        this.user_name=Selector(".user-input")
        this.email=Selector(".email-input")
        this.password=Selector(".password-input")
        this.signup_button=Selector(".signup-button")
        this.newUser=Selector(".header-title")

    }
}

export default SignupPage