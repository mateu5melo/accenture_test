import { productDataForm } from './vehicleSInsuranceForm.po.js'

const vehicleData = {
    'Make': 'Audi',  
    'Engine Performance': '50',  
    'Date of Manufacture': '01/01/2020',  
    'Number of Seats': '2',  
    'Fuel Type': 'Petrol',  
    'List Price': '20000',  
    'License Plate Number': 'ABC123',  
    'Annual Mileage': '10000',  
}
const insurantData = {
    'First Name': 'John',  
    'Last Name': 'Doe',  
    'Date of Birth': '01/01/1990',  
    'Gender': 'Gender Male',  
    'Street Address': '123 Main St',  
    'Country': 'United States',  
    'Zip Code': '12345',  
    'City': 'Anytown',  
    'Occupation': 'Employee',  
    'Hobbies': ['Speeding'],  
    'Website': 'https://example.com',  
    'Picture Container': 'picture.jpg',
  }
  const productData = {  
    'Start Date': productDataForm.moreThanAMonthLater(),    
    'Insurance Sum': '5000000',  
    'Merit Rating': 'Bonus 1',   
    'Damage Insurance': 'Partial Coverage',    
    'Optional Products': ['Euro Protection'],    
    'Courtesy Car': 'Yes',    
  }
  const selectPriceData = {
    'Select Option': ['Silver']
  }
  const sendQuoteFormData = {
    'E-Mail': 'test@example.com',  
    'Phone': '1234567890',  
    'Username': 'testuser',  
    'Password': 'nbvcxZ!1',  
    'Confirm Password': 'nbvcxZ!1',  
    'Comments': 'This is a test comment'  
  }

export { vehicleData, insurantData, productData, selectPriceData, sendQuoteFormData, }