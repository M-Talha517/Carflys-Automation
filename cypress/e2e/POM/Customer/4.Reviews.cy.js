import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000


 export const viewReview_Search_CarName= ()=>{
  cy.get("button").get(".mantine-Burger-root").click()
  cy.contains("Dashboard").click()
    cy.contains("4. Reviews").click()

   cy.get('[placeholder="Search"]').type("2010 Honda Pilot Touring")
     cy.contains("2010 Honda Pilot Touring").should("exist")
 } 
 export const viewReview_Search_OrderNo= ()=>{
  cy.get("button").get(".mantine-Burger-root").click()
  cy.contains("Dashboard").click()
    cy.contains("4. Reviews").click()
  
   cy.get('[placeholder="Search"]').type("12345")
     cy.contains("12345").should("exist")
 }

 export const viewReview_ClearSearch_button= ()=>{
  cy.get("button").get(".mantine-Burger-root").click()
  cy.contains("Dashboard").click()
    cy.contains("4. Reviews").click()
 
   cy.get('[placeholder="Search"]').type("12345")
     cy.contains("12345").should("exist")
     cy.get("button").contains("Clear Search").click()
     cy.get('[placeholder="Search"]').invoke('val').should('eq', '')
 }

 export const viewReview_view_IconButton=()=>{
  cy.get("button").get(".mantine-Burger-root").click()
  cy.contains("Dashboard").click()
    cy.contains("4. Reviews").click()
     cy.get('[placeholder="Search"]').type("Asad")
     cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
     cy.contains("View Reviews").should("exist")
 }
 export const viewReview_ModalClose_Button=()=>{
  cy.get("button").get(".mantine-Burger-root").click()
  cy.contains("Dashboard").click()
    cy.contains("4. Reviews").click()
   
     cy.get('[placeholder="Search"]').type("Asad")
     cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
     cy.contains("View Reviews").should("exist")
     cy.get("button").contains("Close").click()

 }
