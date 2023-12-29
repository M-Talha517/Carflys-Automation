/// <reference types="cypress" />
import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Admin_Profile_Update_BlankField = () => {
    cy.contains("15. Settings").click()

    cy.get('[placeholder="Enter First Name"]').clear()
    cy.contains("Please Enter First Name").should("exist")

    cy.get('[placeholder="Enter Last Name"]').clear()
    cy.contains("Please enter last name").should("exist")

    cy.get('[placeholder="Enter Cell Number"]').clear()
    cy.contains("Invalid Cell Number e.g +1 123 456 7890").should("exist")

    // cy.get('["placeholder="Enter State/Location"]').clear()
    // cy.contains("Please fill in thid field.").should("exist")

    cy.contains("Profile Information").parent().find('input[placeholder="Enter Zip Code"]').clear()
    cy.contains("Invalid Zip Code").should("exist")

    // cy.contains("Profile Information").parent().find("button").contains("Update").click()
    // cy.contains("Please Select Profile Picture").should("exist")
}

export const Admin_Profile_Update_ValidData = () => {
    cy.contains("15. Settings").click()

    cy.get('[placeholder="Enter First Name"]').clear().type("Misterss")
    cy.get('[placeholder="Enter Last Name"]').clear().type("Admin")
    cy.get('[placeholder="Enter Cell Number"]').clear().type("+1(444)-444-4444")
    cy.contains("Profile Information").parent().find('input[placeholder="Enter Zip Code"]').clear().type("10001")
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', 'New York')
    //cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('usama.jpg', { subjectType: 'drag-n-drop' })
    cy.contains("Profile Information").parent().find("button").contains("Update").click()
    cy.contains("Profile updated successfully").should("exist")
}
export const Admin_Profile_ValidZip_Code = () => {
    cy.contains("15. Settings").click()
    cy.contains("Profile Information").parent().find('input[placeholder="Enter Zip Code"]').clear().type("10001")
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', 'New York')
}
export const Admin_Profile_InValidZip_Code = () => {
    cy.contains("15. Settings").click()
    cy.contains("Profile Information").parent().find('input[placeholder="Enter Zip Code"]').clear().type("40002")    
    cy.contains("Invalid zip code. Please enter a valid zip code").should("exist")
}
    /////////// Password ////////////

export const admin_Password_BlankField = () => {
    cy.contains("15. Settings").click()
    cy.contains("Password").click()

    cy.contains("Update Password").parent().find("button").contains("Update").click();
    cy.contains("Enter old password").should("exist")
    cy.contains("Password must at least have 8 characters with special characters, numbers, uppercase and lowercase letters").should("exist")
    cy.contains("Confirm Password is required").should("exist")
}

export const admin_Password_WrongPassword = () => {
    cy.intercept('PATCH', `${backendURL}/profile/change-password`).as('patchPassword')
    cy.contains("15. Settings").click()
    cy.contains("Password").click()

    cy.get('[placeholder="Enter Old Password"]').type("Carflys@12345")
    cy.get('[placeholder="Enter New Password"]').type("Carflys@12")
    cy.get('[placeholder="Confirm Password"]').type("Carflys@12")
    cy.contains("Update Password").parent().find("button").contains("Update").click();
    cy.wait("@patchPassword").its('response.statusCode').should('eq', 400);
}

export const admin_Password_didNot_Match = () => {
    cy.contains("15. Settings").click()
    cy.contains("Password").click()

    cy.get('[placeholder="Enter Old Password"]').type("Carflys@123")
    cy.get('[placeholder="Enter New Password"]').type("Carflys@12")
    cy.get('[placeholder="Confirm Password"]').type("Carflys@1256") 
    cy.contains("Passwords did not match").should("exist")
}

export const admin_Password_UpdateValid = () => {
    cy.contains("15. Settings").click()
    cy.contains("Password").click()

    cy.get('[placeholder="Enter Old Password"]').type("Carflys@123")
    cy.get('[placeholder="Enter New Password"]').type("Carflys@12345")
    cy.get('[placeholder="Confirm Password"]').type("Carflys@12345")
    cy.contains("Update Password").parent().find("button").contains("Update").click()
    cy.contains("Password changed").should("exist")
}


