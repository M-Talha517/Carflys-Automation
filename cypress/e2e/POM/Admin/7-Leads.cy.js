import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000


export const leads_View_IconButton =()=>{
  cy.contains("7. Leads").click()
  cy.get('.rdt_TableBody').find("div").first().find(".icon-tabler-eye").click() 
  cy.contains("View lead").should("exist")
}
export const leads_View_ModalCloseButton =()=>{
  cy.contains("7. Leads").click()
  cy.get('.rdt_TableBody').find("div").first().find(".icon-tabler-eye").click() 
  cy.contains("View lead").should("exist")
  cy.get("button").contains("Close").click()
}
export const leads_Delete_IconButton =()=>{
  cy.contains("7. Leads").click()
  cy.get('.rdt_TableBody').find("div").first().find(".icon-tabler-trash").click() 
  cy.contains("Cancel").click()
}