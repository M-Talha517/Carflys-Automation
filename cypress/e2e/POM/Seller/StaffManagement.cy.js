
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000


export const addEmployee_BlankField = () => {

    cy.contains('2. Staff Management').click()
    cy.contains('2.1 Add Employee').click()

    cy.get('[type="submit"]').click()
    cy.contains("Please Select User Type").should("exist")
    cy.contains("Enter 3 or more letters for First Name").should("exist")
    cy.contains("Enter 3 or more letters for Last Name").should("exist")
    cy.contains("Enter email").should("exist")
    cy.contains("Password must at least have 8 characters with special characters, numbers, uppercase and lowercase letters").should("exist")
    cy.contains("Confirm Password is required").should("exist")
    cy.contains("Enter Cell Number e.g +1 123 456 7890").should("exist")
    cy.contains("Enter Valid Zip Code").should("exist")
    cy.contains("Please Select a State").should("exist")
}

