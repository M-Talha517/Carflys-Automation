import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Search_Payment_VinNo =() =>{
     cy.get("button").get(".mantine-Burger-root").click()
     cy.contains("Dashboard").click()
    cy.contains("5. Payments").click()
    // Search Field    
         cy.get('[placeholder="Search"]').type("5FNRL5H41EB067346")
    // Filters
         cy.get('[placeholder="Filter by Status"]').click()
            cy.contains("Success").click()
            cy.contains("5FNRL5H41EB067346").should("exist")

}
export const  Search_Payment_VehicleName =() =>{
     cy.get("button").get(".mantine-Burger-root").click()
     cy.contains("Dashboard").click()
    cy.contains("5. Payments").click()
    // Search Field    
         cy.get('[placeholder="Search"]').type("2014 Honda Odyssey EX")
    // Filters
         cy.get('[placeholder="Filter by Status"]').click()
            cy.contains("Success").click()
            cy.contains("2014 Honda Odyssey EX").should("exist") 
}

export const  Search_Payment_InValid_VinNo =() =>{
     cy.get("button").get(".mantine-Burger-root").click()
     cy.contains("Dashboard").click()
    cy.contains("5. Payments").click()
    // Search Field    
         cy.get('[placeholder="Search"]').type("1FMSLFFH8NGB68090")
            cy.contains("There are no records to display").should("exist")
}

export const Filters_Payment =() =>{
     cy.get("button").get(".mantine-Burger-root").click()
     cy.contains("Dashboard").click()
    cy.contains("5. Payments").click()
    // Search Field    
         cy.get('[placeholder="Search"]').type("2014 Honda Odyssey EX")
    // Filters
         cy.get('[placeholder="Filter by Status"]').click()
            cy.contains("Success").click()
            cy.contains("2014 Honda Odyssey EX").should("exist") 
}
export const  Payment_ClearFilterButton =() =>{
     cy.get("button").get(".mantine-Burger-root").click()
     cy.contains("Dashboard").click()
     cy.contains("5. Payments").click()
     // Search Field    
          cy.get('[placeholder="Search"]').type("5FNRL5H41EB067346")
     // Filters
          cy.get('[placeholder="Filter by Status"]').click()
             cy.contains("Success").click()
             cy.get("button").contains("Clear Filters").click()
 }