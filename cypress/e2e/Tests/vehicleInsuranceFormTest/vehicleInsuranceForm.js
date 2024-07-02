import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { vehicleDataForm, insurantDataForm, productDataForm, selectPriceForm, sendQuoteForm  } from '../../../support/vehicleInsuranceForm/vehicleSInsuranceForm.po'
import { vehicleData, insurantData, productData, selectPriceData, sendQuoteFormData } from '../../../support/vehicleInsuranceForm/vehicleInsuranceFormData.js'

Given("I am on the automobile insurance quote request first step", () =>{
   vehicleDataForm.startAutomobileInsuranceQuoteRequest()
})
When("I submit vehicle information correctly", () =>{
  vehicleDataForm.fillAndSubmitForm(vehicleData)
})
When("I submit insurant information correctly", () =>{
  insurantDataForm.fillAndSubmitForm(insurantData)
})
When("I submit product information correctly", () =>{
  productDataForm.fillAndSubmitForm(productData)
})
When("I submit my price choice", () =>{
  selectPriceForm.fillAndSubmitForm(selectPriceData)
})
When("I submit quotation information correctly", () =>{
  cy.intercept('https://sampleapp.tricentis.com/101/tcpdf/pdfs/quote.php').as('quoteSent')
  sendQuoteForm.fillAndSubmitForm(sendQuoteFormData)
})
Then("I should see the email sending confirmation", () =>{
    cy.wait('@quoteSent').then(() => {
      cy.contains('Sending e-mail success!').should('be.visible')
    })
})
