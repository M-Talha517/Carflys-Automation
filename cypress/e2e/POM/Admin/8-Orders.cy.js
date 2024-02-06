import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Admin_order_View_IconButton =() => {

    cy.contains("8. Orders").click()
//search field
   cy.get('[placeholder="Search"]').type("1GCHSAEA5F1258876")
   cy.wait(3000)
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Cancelled").click()
    cy.wait(2000)
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View Order").should("exist")
}
export const Admin_order_View_ModalCloseButton =() => {

    cy.contains("8. Orders").click()
//search field
   cy.get('[placeholder="Search"]').type("5FNYF6H22MB016055")
   cy.wait(3000)
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Down Payment Paid").click()
    cy.wait(2000)
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View Order").should("exist")
    cy.get("button").contains("Close").click()
}
export const Admin_Search_Order_VinNO  =() => {

    cy.contains("8. Orders").click()
//search field
    cy.get('[placeholder="Search"]').type("5FNYF6H22MB016055")
    cy.wait(3000)
    cy.contains("5FNYF6H22MB016055").should("exist")
    }
export const Admin_Search_Order_InValid_VinNO =() => {
        cy.contains("8. Orders").click()
    //search field
        cy.get('[placeholder="Search"]').type("1FMSK8FH8NH668090")
        cy.contains("There are no records to display").should("exist")
        }
export const Admin_Search_Order_VehicleName  =() => {
            cy.contains("8. Orders").click()
        //search field
            cy.get('[placeholder="Search"]').type("2021 Honda Pilot SE")
            cy.wait(3000)
        //filters
            cy.get('[placeholder="Filter by Status"]').click()
               cy.contains("Down Payment Paid").click()
            cy.contains("2021 Honda Pilot SE").should("exist")
            }
export const Admin_Search_Order_CustomerName  =() => {
    cy.contains("8. Orders").click()
//search field
    cy.get('[placeholder="Search"]').type("usman")
    cy.wait(3000)
    cy.contains("usman").should("exist")
}

export const Admin_order_Filter_BY_Status  =() => {

    cy.contains("8. Orders").click()
//search field
   cy.get('[placeholder="Search"]').type("5FNYF6H22MB016055")
   cy.wait(3000)
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Down Payment Paid").click()
}

export const Admin_Order_ClearFilterButton  =() => {
    cy.contains("8. Orders").click()
//search field
    cy.get('[placeholder="Search"]').type("2021 Honda Pilot SE")
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Down Payment Paid").click
   cy.get("button").contains("Clear Filters").click()
    }

export const Admin_Order_statusChanges  =() => {
        cy.contains("8. Orders").click()
    //search field
        cy.get('[placeholder="Search"]').type("3FA6P0LU8KR242192")
        cy.wait(3000)
    //filters
        cy.get('[placeholder="Filter by Status"]').click()
           cy.contains("Shipped").click
        cy.contains("3FA6P0LU8KR242192").should("exist")
    // /// down payment paid to shipped    
    //     cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
    //     cy.contains("Shipped").click()
    //     cy.contains("Status Updated Successfully").should("exist")
    //// shipped to delivered
        cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
        cy.contains("Delivered").click()
        cy.contains("Status Updated Successfully").should("exist")
    /// Delivered to completed
    cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
    cy.contains("Completed").click()
    cy.contains("Status Updated Successfully").should("exist")

        }


        
    