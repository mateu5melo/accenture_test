import { vehicleInsuranceFormPage } from '../e2e/pages/vehicleInsuranceForm.js'

const vehicleDataForm = new vehicleInsuranceFormPage([
  { action: 'select', selector: 'select[name="Make"]', name: 'Make' },  
  { action: 'type', selector: 'input[name="[kW]"]', name: 'Engine Performance' },  
  { action: 'type', selector: 'input[name="Date of Manufacture"]', name: 'Date of Manufacture' },  
  { action: 'select', selector: 'select[name="Number of Seats"]', name: 'Number of Seats' },  
  { action: 'select', selector: 'select[name="Fuel Type"]', name: 'Fuel Type' },  
  { action: 'type', selector: 'input[name="List Price"]', name: 'List Price' },  
  { action: 'type', selector: 'input[name="License Plate Number"]', name: 'License Plate Number' },  
  { action: 'type', selector: 'input[name="Annual Mileage"]', name: 'Annual Mileage' },
  { action: 'click', selector: 'button[name="Next (Enter Insurant Data)"]', name: 'Next (Enter Insurant Data)'}  
])
const insurantDataForm = new vehicleInsuranceFormPage([
  { action: 'type', selector: 'input[name="First Name"]', name: 'First Name' },  
  { action: 'type', selector: 'input[name="Last Name"]', name: 'Last Name' },  
  { action: 'type', selector: 'input[name="Date of Birth"]', name: 'Date of Birth' },  
  { action: 'click', selector: 'label.ideal-radiocheck-label:contains("Male")', name: 'Gender Male' },
  { action: 'type', selector: 'input[name="Street Address"]', name: 'Street Address' },  
  { action: 'select', selector: 'select[name="Country"]', name: 'Country' },  
  { action: 'type', selector: 'input[name="Zip Code"]', name: 'Zip Code' },  
  { action: 'type', selector: 'input[name="City"]', name: 'City' },  
  { action: 'select', selector: 'select[name="Occupation"]', name: 'Occupation' },  
  { action: 'click', selector: 'label.ideal-radiocheck-label:contains("Other")', name: 'Hobbies' },  
  { action: 'type', selector: 'input[name="Website"]', name: 'Website' },  
  { action: 'attach', selector: 'input[name="Picture Container"]', name: 'Picture Container' },  
  { action: 'click', selector: 'button[name="Next (Enter Product Data)"]', name: 'Next (Enter Product Data)'}
])
const productDataForm = new vehicleInsuranceFormPage([
  { action: 'type', selector: 'input[name="Start Date"]', name: 'Start Date' },  
  { action: 'select', selector: 'select[name="Insurance Sum"]', name: 'Insurance Sum' },  
  { action: 'select', selector: 'select[name="Merit Rating"]', name: 'Merit Rating' },  
  { action: 'select', selector: 'select[name="Damage Insurance"]', name: 'Damage Insurance' },  
  { action: 'click', selector: 'label.ideal-radiocheck-label:contains("Euro Protection")', name: 'Optional Products' },  
  { action: 'select', selector: 'select[name="Courtesy Car"]', name: 'Courtesy Car' },
  { action: 'click', selector: 'button[name="Next (Select Price Option)"]', name: 'Next (Select Price Option)'}  
])
const selectPriceForm = new vehicleInsuranceFormPage([
  { action: 'click', selector: 'input[id="selectsilver"]', name: 'Select Option' },
  { action: 'click', selector: 'button[name="Next (Send Quote)"]', name: 'Next (Send Quote)'}
])
const sendQuoteForm = new vehicleInsuranceFormPage([
  { action: 'type', selector: 'input[name="E-Mail"]', name: 'E-Mail' },  
  { action: 'type', selector: 'input[name="Phone"]', name: 'Phone' },  
  { action: 'type', selector: 'input[name="Username"]', name: 'Username' },  
  { action: 'type', selector: 'input[name="Password"]', name: 'Password' },  
  { action: 'type', selector: 'input[name="Confirm Password"]', name: 'Confirm Password' },   
  { action: 'type', selector: 'textarea[name="Comments"]', name: 'Comments' },    
  { action: 'click', selector: 'button[name="Send E-Mail"]', name: 'Send E-Mail' }  
]);
export { vehicleDataForm, insurantDataForm, productDataForm, selectPriceForm, sendQuoteForm }