
import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const addcomplaint_NoData=()=>{
    cy.contains("14. Complaints").click()
    cy.contains("14.1 Add Complaint").click()
   cy.get('[type="submit"]').contains("Add").click()

   cy.contains("Enter a title of 3 or more length.").should("exist")
   cy.contains("Enter a description of 3 or more length.").should("exist")
}
export const addcomplaint_ValidData=()=>{
    cy.contains("14. Complaints").click()
    cy.contains("14.1 Add Complaint").click()
    cy.wait(3000)
    cy.get('[placeholder="Select Order"]').invoke("show").click()
   // cy.get(".mantine-Select-input").find('[type="search"]').click()
       cy.contains("2017 Dodge Challenger SXT").click()
   cy.get('[placeholder="Enter Complaint Title"]').type("Test Working")
   cy.get('[placeholder="Enter Complaint Description"]').type("No Working Engine")
   cy.get('[type="submit"]').contains("Add").click()
}
export const addcomplaint_ResetButton=()=>{
    cy.contains("14. Complaints").click()
    cy.contains("14.1 Add Complaint").click()
    cy.wait(3000)
    cy.get('[placeholder="Select Order"]').invoke("show").click()
       cy.contains("2017 Dodge Challenger SXT").click()
   cy.get('[placeholder="Enter Complaint Title"]').type("Test Working")
   cy.get('[placeholder="Enter Complaint Description"]').type("No Working Engine")
   cy.get("button").contains("Reset").click()

   //cy.get('[placeholder="Select Order"]').invoke('val').should('eq', '')
   cy.get('[placeholder="Enter Complaint Title"]').invoke('val').should('eq', '')
   cy.get('[placeholder="Enter Complaint Description"]').invoke('val').should('eq', '')
}
export const addcomplaint_Order_dropdown=()=>{
    cy.contains("14. Complaints").click()
    cy.contains("14.1 Add Complaint").click()
   cy.get('[placeholder="Select Order"]').invoke("show").click()
   // cy.get(".mantine-Select-input").find('[type="search"]').click()
       cy.contains("2017 Dodge Challenger SXT").should("exist")
}

export const viewcomplaint_Search_CarNAme=()=>{
    cy.contains("14. Complaints").click()
    cy.contains("14.2 View Complaints").click()
    cy.wait(3000)
    cy.get('[placeholder="Search"]').type("2017 Dodge Challenger SXT")
       cy.contains("2017 Dodge Challenger SXT").should("exist")
}
export const viewcomplaint_Search_OrderNo=()=>{
    cy.contains("14. Complaints").click()
    cy.contains("14.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("B58683")
       cy.contains("B58683").should("exist")
}

export const viewcomplaint_Search_ComplaintTitle=()=>{
    cy.contains("14. Complaints").click()
    cy.contains("14.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("abc")
       cy.contains("abc").should("exist")
}

export const viewcomplaint_Search_Dealership=()=>{
    cy.contains("14. Complaints").click()
    cy.contains("14.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("Test")
       cy.contains("Test").should("exist")
}

export const viewcomplaint_View_IconButton=()=>{
    cy.contains("14. Complaints").click()
    cy.contains("14.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("testsell")
       cy.contains("testsell").should("exist")
       cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
       cy.contains("View Complaint").should("exist")     
}
export const viewcomplaint_View_ModalCloseButton=()=>{
    cy.contains("14. Complaints").click()
    cy.contains("14.2 View Complaints").clci()
    cy.get('[placeholder="Search"]').type("testsell")
       cy.contains("testsell").should("exist")
       cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
       cy.contains("View Complaint").should("exist") 
       cy.get("button").contains("Close").click()   
}

export const viewcomplaint_ClearSearchButtton=()=>{
    cy.contains("14. Complaints").click()
    cy.contains("14.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("2017 Dodge Challenger SXT")
      // cy.contains("2017 Dodge Challenger SXT").should("exist")

       cy.get("button").contains("Clear Search").click()
       cy.get('[placeholder="Search"]').invoke('val').should('eq', '')
}