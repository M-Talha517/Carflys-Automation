import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const customer_order_View_IconButton =() => {
    cy.get("button").get(".mantine-Burger-root").click()
        cy.contains("Dashboard").click()
    cy.contains("2. Orders").click()
//search field
   cy.get('[placeholder="Search"]').type("65a8d06b6507920014cf6444")
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Cancelled")
    cy.contains("Cancelled").should("exist")
    cy.wait(2000)
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View Order").should("exist")
}
export const customer_order_View_ModalCloseButton =() => {
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("2. Orders").click()
//search field
   cy.get('[placeholder="Search"]').type("65a8d06b6507920014cf6444")
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Cancelled").click()
    cy.wait(2000)
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View Order").should("exist")
    cy.get("button").contains("Close").click()
}

export const customer_Search_Order_VinNO  =() => {
    cy.get("button").get(".mantine-Burger-root").click()
          cy.contains("Dashboard").click()
    cy.contains("2. Orders").click()
//search field
    cy.get('[placeholder="Search"]').type("65a92e1fd36f8900149cb8ad")
    cy.contains("65a92e1fd36f8900149cb8ad").should("exist")
    }


export const customer_Search_Order_InValid_VinNO =() => {
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
        cy.contains("2. Orders").click()
    //search field
        cy.get('[placeholder="Search"]').type("1FMSK8FH8NH668090")
        cy.contains("There are no records to display").should("exist")
        }


export const customer_Search_Order_VehicleName  =() => {
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
            cy.contains("2. Orders").click()
        //search field
            cy.get('[placeholder="Search"]').type("2014 Honda Odyssey EX")
        
            cy.contains("2014 Honda Odyssey EX").should("exist")
            }
export const customer_order_Filter_BY_Status  =() => {
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("2. Orders").click()
//filters
    cy.get('[placeholder="Filter by Status"]').click()

    cy.contains("Pending").should("exist")
    cy.contains("Down Payment Paid").should("exist")
    cy.contains("Direct Payment Paid").should("exist")
    cy.contains("Shipped").should("exist")
    cy.contains("Delivered").should("exist")
    cy.contains("Completed").should("exist")
    cy.contains("Reviewed and Completed").should("exist")
    cy.contains("Processing").should("exist")
    cy.contains("Cancelled").should("exist")
    cy.contains("Basic Info Provided").should("exist")
    cy.contains("Finance Options Provided").should("exist")
    cy.contains("Credit Application Provided").should("exist")
    cy.contains("Delivery Options Provided").should("exist")
    cy.contains("Warranty Options Provided").should("exist")
    cy.contains("Services Provided").should("exist")
    cy.contains("Stipulations Provided").should("exist")
    cy.contains("Awaiting Offer").should("exist")
    cy.contains("Accepted Offer").should("exist")
    
// Selected Filter
      //search field
         cy.get('[placeholder="Search"]').type("65a8d06b6507920014cf6444")
      //filters
          cy.get('[placeholder="Filter by Status"]').click()
            cy.contains("Cancelled").click()
        cy.contains("65a8d06b6507920014cf6444").should("exist")

}

export const customer_Order_ClearFilterButton  =() => {
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Dashboard").click()
    cy.contains("2. Orders").click()
//search field
    cy.get('[placeholder="Search"]').type("65a8d06b6507920014cf6444")
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Cancelled").click()
    cy.contains("65a8d06b6507920014cf6444").should("exist")
   cy.get("button").contains("Clear Filters").click()
    }


export const customer_Order_statusChanges  =() => {
    cy.get("button").get(".mantine-Burger-root").click()
          cy.contains("Dashboard").click()
        cy.contains("2. Orders").click()
    //search field
        cy.get('[placeholder="Search"]').type("2010 Honda Pilot Touring")
    //filters 
        cy.get('[placeholder="Filter by Status"]').click()
           cy.contains("Down Payment Paid").click
        cy.contains("2010 Honda Pilot Touring").should("exist")
    /// down payment paid to shipped    
        cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
        cy.contains("Shipped").click()
        cy.contains("Status Updated Successfully").should("exist")
    //// shipped to delivered
        cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
        cy.contains("Delivered").click()
        cy.contains("Status Updated Successfully").should("exist")
    /// Delivered to completed
    cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
    cy.contains("Completed").click()
    cy.contains("Status Updated Successfully").should("exist")

        }


        
    