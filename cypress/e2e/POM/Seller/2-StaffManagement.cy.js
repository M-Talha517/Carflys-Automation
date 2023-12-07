/// <reference types="cypress" />
import { backendURL } from "./extras"
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

export const addEmployee_Valid_ZipCode = () => {

    cy.contains('2. Staff Management').click()
    cy.contains('2.1 Add Employee').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Enter First Name"]').type('Osama')
    cy.get('[placeholder="Enter Last Name"]').type('Abbasi')
    cy.get('[placeholder="Enter Email"]').type('osama@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Enter Zip Code"]').type('10001')
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', 'New York')
}
export const addEmployee_InValid_ZipCode = () => {

    cy.contains('2. Staff Management').click()
    cy.contains('2.1 Add Employee').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Enter First Name"]').type('Osama')
    cy.get('[placeholder="Enter Last Name"]').type('Abbasi')
    cy.get('[placeholder="Enter Email"]').type('osama@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Enter Zip Code"]').type('46000')
    cy.contains('Invalid zip code. Please enter a valid zip code').should("exist")
}
export const addEmployee_ValidData = () => {
    cy.intercept('POST', `${backendURL}/user/`).as('postUser')
    cy.contains('2. Staff Management').click()
    cy.contains('2.1 Add Employee').click()
    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Enter First Name"]').type('Osama')
    cy.get('[placeholder="Enter Last Name"]').type('Abbasi')
    cy.get('[placeholder="Enter Email"]').type('osama@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Enter Zip Code"]').type('10001')
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', 'New York')
    cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('usama.jpg', { subjectType: 'drag-n-drop' })
    cy.get('[type="submit"]').click()
    cy.wait("@postUser").its('response.statusCode').should('eq', 201);
    ////////// View Users ///////
    cy.wait(10 * second)
    cy.contains('2.2 View Employees').click()
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("osama@gmail.com")
    cy.contains('osama@gmail.com').should("exist")

}
export const addEmployee_DuplicateData = () => {
    cy.intercept('POST', `${backendURL}/user`).as('User Email Already enter')
    cy.contains('2. Staff Management').click()
    cy.contains('2.1 Add Employee').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Enter First Name"]').type('Shah')
    cy.get('[placeholder="Enter Last Name"]').type('Rukh')
    cy.get('[placeholder="Enter Email"]').type('shah@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Enter Zip Code"]').type('10001')
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', 'New York')
    cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('usama.jpg', { subjectType: 'drag-n-drop' })
    cy.get('[type="submit"]').click()
    cy.wait("@User Email Already enter").its('response.statusCode').should('eq', 400);

}

export const addEmployee_ResetButton = () => {

    cy.contains('2. Staff Management').click()
    cy.contains('2.1 Add Employee').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Enter First Name"]').type('Osama')
    cy.get('[placeholder="Enter Last Name"]').type('Abbasi')
    cy.get('[placeholder="Enter Email"]').type('osama@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Enter Zip Code"]').type('10001')
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', 'New York')
    cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('usama.jpg', { subjectType: 'drag-n-drop' })
    cy.contains("Reset").click()

    cy.get('[placeholder="Enter First Name"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Last Name"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Email"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Password"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Confirm Password"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Cell Number"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Zip Code"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', '')
    cy.get(".mantine-1avyp1d").contains("Drop the file here ...").invoke('val').should('eq', '')
}

export const viewEmployee_SearchName= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. Staff Management').click()
    cy.contains('2.2 View Employees').click()
    cy.wait(1000)
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("Shah Rukh")
    cy.contains('Shah Rukh').should("exist")
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}
export const viewEmployee_SearchEmail= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. Staff Management').click()
    cy.contains('2.2 View Employees').click()
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("shah@gmail.com")
    cy.contains('shah@gmail.com').should("exist")
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}
export const viewEmployee_Modal_CloseButton= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. Staff Management').click()
    cy.contains('2.2 View Employees').click()
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("shah@gmail.com")
    cy.contains('shah@gmail.com').should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View user").should("exist")
    cy.contains("Shah Rukh").should("exist")
    cy.get("button").contains("Close").click()
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}
export const viewEmployee_View_IconButton= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. Staff Management').click()
    cy.contains('2.2 View Employees').click()
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("shah@gmail.com")
    cy.contains('shah@gmail.com').should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View user").should("exist")
    cy.contains("Shah Rukh").should("exist")
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}
export const viewEmployee_Edit_IconButton= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. Staff Management').click()
    cy.contains('2.2 View Employees').click()
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("shah@gmail.com")
    cy.contains('shah@gmail.com').should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
    cy.contains("Update Employee").should("exist")
    cy.get("button").contains("Update").click()
    cy.contains('User Updated Successfully').should("exist")
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}
export const viewEmployee_Delete_IconButton= () => {
    cy.intercept('POST', `${backendURL}/user`).as('postUser')
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.intercept('DELETE', `${backendURL}/user/*`).as('User Deleted')

    cy.contains('2. Staff Management').click()
    cy.contains('2.1 Add Employee').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Enter First Name"]').type('Abc')
    cy.get('[placeholder="Enter Last Name"]').type('Xyz')
    cy.get('[placeholder="Enter Email"]').type('abc@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Enter Zip Code"]').type('10001')
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', 'New York')
    cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('usama.jpg', { subjectType: 'drag-n-drop' })
    cy.get('[type="submit"]').click()
  
/////// view table
    cy.wait(2000)
    cy.contains('2.2 View Employee').click()
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("abc@gmail.com")
    cy.contains('abc@gmail.com').should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-trash").click()
    cy.contains("Delete User").should("exist")
    cy.get("button").contains("Delete").click()
    cy.contains("User Deleted Successfully").should("exist")
      //// intercept
    cy.wait("@postUser").its('response.statusCode').should('eq', 201);
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
    cy.wait("@User Deleted").its('response.statusCode').should('eq', 200);

}
export const viewEmployee_Check_AssignButton= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. Staff Management').click()
    cy.contains('2.2 View Employees').click()
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("shah@gmail.com")
    cy.contains('shah@gmail.com').should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-checks").click()
    cy.contains("Manage Employee Access").should("exist")
    cy.get("button").contains("Update Rights").click()
    cy.contains('Rights Updated Successfully').should("exist")
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200)

}
export const viewEmployee_ExistEpmloyee= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. Staff Management').click()
    cy.contains('2.2 View Employees').click()
    cy.wait(1000)
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("Shah Rukh")
    cy.contains('Shah Rukh').should("exist")
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}
export const viewEmployee_NotExistEpmloyee= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. Staff Management').click()
    cy.contains('2.2 View Employees').click()
    cy.wait(1000)
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("khan")
    cy.contains('khan').should("exist")
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}

export const viewEmployee_ClearFilterButton= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. Staff Management').click()
    cy.contains('2.2 View Employees').click()
    cy.wait(1000)
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("khan")
    cy.get("button").contains("Clear Filters").click()
   
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}











