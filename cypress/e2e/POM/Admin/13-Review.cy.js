import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const addReview_BlankField =() =>{
    cy.contains("13. Reviews").click()
    cy.contains("13.1 Add Review").click()
    cy.get('[type="submit"]').click()

    cy.contains("Please Select a Order.").should("exist")
    cy.contains("Please Enter Review Description of 1 or more length.").should("exist")
 }
export const addReview_ValidData =() =>{
    cy.contains("13. Reviews").click()
    cy.contains("13.1 Add Review").click()
    cy.get('[placeholder="Select Order"]').click()
      cy.contains("5FNYF4H92AB027683").click()
 //  cy.contains("Service Quality Rating: ")
 
   cy.get('[placeholder="Enter Review"]').type("Good")
   cy.get('[type="submit"]').click()
   cy.wait(5*second)
    ////// View Review /////
    cy.contains("13. Reviews").click()
  cy.contains("13.2 View Reviews").click()
   cy.get('[placeholder="Search"]').type("Carflys")
   cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click() 
 }
export const addReview_ResetButton =() =>{
    cy.contains("13. Reviews").click()
    cy.contains("13.1 Add Review").click()
    cy.get('[placeholder="Select Order"]').click()
      cy.contains("5FNYF4H92AB027683").click()
   cy.get('[placeholder="Enter Review"]').type("Good")
   cy.get("button").contains("Reset").click()

   cy.get('[placeholder="Select Order"]').invoke('val').should('eq', '')
   cy.get('[placeholder="Enter Review"]').invoke('val').should('eq', '')
 }
 export const addReview_VehicleDropDown =() =>{
    cy.contains("13. Reviews").click()
    cy.contains("13.1 Add Review").click()
    cy.get('[placeholder="Select Order"]').click()
      cy.contains("2GNAXHEV7L6149334").should("exist")

 }
 export const viewReview_Search_CarName= ()=>{
    cy.contains("13. Reviews").click()
  cy.contains("13.2 View Reviews").click()
   cy.get('[placeholder="Search"]').type("2010 Honda Pilot Touring")
     cy.contains("2010 Honda Pilot Touring").should("exist")
 }
 export const viewReview_Search_Dealeship= ()=>{
    cy.contains("13. Reviews").click()
  cy.contains("13.2 View Reviews").click()
   cy.get('[placeholder="Search"]').type("testsell")
     cy.contains("testsell").should("exist")
 }
 export const viewReview_Search_CustomerNAme= ()=>{
    cy.contains("13. Reviews").click()
  cy.contains("13.2 View Reviews").click()
   cy.get('[placeholder="Search"]').type("Customer")
     cy.contains("Customer test").should("exist")
 }
 export const viewReview_view_IconButton=()=>{
    cy.contains("13. Reviews").click()
    cy.contains("13.2 View Reviews").click()
     cy.get('[placeholder="Search"]').type("Asad")
     cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
     cy.contains("View Reviews").should("exist")
 }
 export const viewReview_ModalClose_Button=()=>{
    cy.contains("13. Reviews").click()
    cy.contains("13.2 View Reviews").click()
     cy.get('[placeholder="Search"]').type("Asad")
     cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
     cy.contains("View Reviews").should("exist")
     cy.get("button").contains("Close").click()
 }
