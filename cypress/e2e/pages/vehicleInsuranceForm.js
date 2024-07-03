export class vehicleInsuranceFormPage {
    constructor(formElements) {
      this.formElements = formElements;
    }
    startAutomobileInsuranceQuoteRequest(){
      cy.visit('/')
      cy.get('#nav_automobile').click({ force : true })
    }
    fillAndSubmitForm(data) { 
      this.formElements.forEach((element) => {
        switch (element.action) {
          case 'type':
            cy.get(element.selector).type(data[element.name])
            break
          case 'select':
            cy.get(element.selector).select(data[element.name])
            break
          case 'click':
            cy.get(element.selector).click({ force : true })
            break
          case 'attach':
            cy.get(element.selector).attachFile(data[element.name])
            break
          default:
            throw new Error(`Unknown element type: ${element.type}`)
        }
      })
    }
    moreThanAMonthLater(){
      const today = new Date()
      let nextMonth = today
      const daysInMonth = new Date(today.getFullYear(), (today.getMonth()+2), 0).getDate();
      nextMonth.setDate(today.getDate() + daysInMonth +1)
      const month = nextMonth.getMonth() + 1 
      const day = nextMonth.getDate()
      const year = nextMonth.getFullYear()
      const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`
      return formattedDate
    }
  }
  