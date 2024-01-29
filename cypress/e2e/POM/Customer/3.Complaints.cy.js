
import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const addcomplaint_NoData=()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("3. Complaints").click()
    cy.contains("3.1 Add Complaint").click()
   cy.get("button").contains("Add").click()

   cy.contains("Enter a title of 3 or more length.").should("exist")
   cy.contains("Enter a description of 3 or more length.").should("exist")
}
export const addcomplaint_ValidData=()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("3. Complaints").click()
    cy.contains("3.1 Add Complaint").click()
    cy.get('[placeholder="Select Order"]').invoke("show").click()
       cy.contains("1C4HJXDN7NW246787").click()
   cy.get('[placeholder="Enter Complaint Title"]').type("Test Working")
   cy.get('[placeholder="Enter Complaint"]').type("No Working Engine")
   cy.contains("Add").click()
}
export const addcomplaint_ResetButton=()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("3. Complaints").click()
    cy.contains("3.1 Add Complaint").click()
    cy.get('[placeholder="Select Order"]').invoke("show").click()
       cy.contains("1C4HJXDN7NW246787").click()
   cy.get('[placeholder="Enter Complaint Title"]').type("Test Working")
   cy.get('[placeholder="Enter Complaint"]').type("No Working Engine")
   cy.get("button").contains("Reset").click

   cy.get('[placeholder="Select Order"]').invoke('val').should('eq', '')
   cy.get('[placeholder="Enter Complaint Title"]').invoke('val').should('eq', '')
   cy.get('[placeholder="Enter Complaint"]').invoke('val').should('eq', '')
}
export const addcomplaint_Order_dropdown=()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("3. Complaints").click()
    cy.contains("3.1 Add Complaint").click()
    cy.get('[placeholder="Select Order"]').invoke("show").click()
       cy.contains("1C4HJXDN7NW246787").should("exist")
}

export const viewcomplaint_Search_CarNAme=()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("3. Complaints").click()
    cy.contains("3.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("2013 Ford F-150 XLT")
       cy.contains("2013 Ford F-150 XLT").should("exist")
}
export const viewcomplaint_Search_OrderNo=()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("3. Complaints").click()
    cy.contains("3.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("B58683")
       cy.contains("B58683").should("exist")
}

export const viewcomplaint_Search_ComplaintTitle=()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("3. Complaints").click()
    cy.contains("3.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("abc")
       cy.contains("abc").should("exist")
}

export const viewcomplaint_Search_Dealership=()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("3. Complaints").click()
    cy.contains("3.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("Test")
       cy.contains("Test").should("exist")
}

export const viewcomplaint_View_IconButton=()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("3. Complaints").click()
    cy.contains("3.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("testsell")
       cy.contains("testsell").should("exist")
       cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
       cy.contains("View Complaint").should("exist")     
}
export const viewcomplaint_View_ModalCloseButton=()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("3. Complaints").click()
    cy.contains("3.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("testsell")
       cy.contains("testsell").should("exist")
       cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
       cy.contains("View Complaint").should("exist") 
       cy.get("button").contains("Close").click()   
}

export const viewcomplaint_ClearSearchButtton=()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("3. Complaints").click()
    cy.contains("3.2 View Complaints").click()
    cy.get('[placeholder="Search"]').type("2013 Ford F-150 XLT")
       cy.contains("2013 Ford F-150 XLT").should("exist")

       cy.get("button").contains("Clear Search").click()
       cy.get('[placeholder="Search"]').invoke('val').should('eq', '')
}