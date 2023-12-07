/// <reference types="cypress" />
import { backendURL } from "./extras"
////// Wait time ///////
const millisecond = 1
const second = 1000
const minute = 60000

export const SellerLogin = () => {

 cy.contains("Login").click()  

cy.contains("3. Vehicles").click()
    cy.contains("3.1 Add Vehicles").click()

    /////////// Add Vehicel Form ///////

    // VIN
    cy.get('[placeholder="Enter VIN"]').type("1C4HJXEG9MW851795", { force: true })
    cy.get('.mantine-1swk166').click()
    cy.contains("Retail Price").parent().parent().find("input[type=number]").clear().type(45500)
    cy.get('[placeholder="Enter Cost Price"]').clear().type('39000')
    cy.get('[placeholder="Enter Mileage"]').clear().type('19,400')
    cy.contains("Next step").click()

            ////////// Vehicle Description //////////
    cy.get('[class="ProseMirror"]').clear().type("This used car is a reliable and well-maintained vehicle that has been carefully inspected and serviced to ensure its optimal performance.")    
    cy.contains("Next step").click()
    cy.get(".mantine-1hss7nx").contains("Select images of vehicle (PNG, JPG, JPEG)").attachFile(['jeep1.jpeg','jeep2.jpeg'],{ subjectType: 'drag-n-drop'})
    cy.contains("Submit").click()
    cy.wait(3 * second)
    cy.contains("Vehicle has been added to the database successfully.").should("exist")
    cy.wait(10 * second)
                                 ////// View Vehicle /////////

    cy.contains("3.2 View Vehicles").click()
    cy.get('[placeholder="Search"]').type("1C4HJXEG9MW851795")
    cy.get('[placeholder="Filter by Status"]').click()   
         cy.contains("Active").click()
    cy.get('[placeholder="Filter by Phase"]').click()
         cy.contains("Available").click()
         cy.contains("1C4HJXEG9MW851795").should("exist")
 }
 export const addvehicle1 = () => {
 cy.contains("Login").click()  
cy.contains("3. Vehicles").click()   
    cy.contains("3.1 Add Vehicles").click()
    // VIN
    cy.get('[placeholder="Enter VIN"]').type("1C4HJXEG9MW851795", { force: true })
    // Decode VIN Button
    cy.get('.mantine-1swk166').click()
    cy.contains("The provided VIN already exists.").should("exist")
 }
 export const addvehicle2 = () => {
    cy.contains("Login").click()  
   cy.contains("3. Vehicles").click()
       cy.contains("3.1 Add Vehicles").click()
       cy.contains("Next step").click()
       cy.contains("Please Enter a Valid VIN (e.g. 1D7HE42N45S321898)").should("exist")
       cy.contains("Please Enter a Title of 3 or more length").should("exist")
       cy.contains("Please Enter a minimum price of $1").should("exist")
       cy.contains("Please Enter a minimum cost price of $1").should("exist")       
       cy.contains("Please Enter a valid mileage between 1 and 999,999").should("exist")
       cy.contains("Please Enter Make").should("exist")
       cy.contains("Please Enter Model").should("exist")
    }

export const addvehicle3 = () => {
        cy.contains("Login").click()  
       cy.contains("3. Vehicles").click()
           cy.contains("3.1 Add Vehicles").click()
           cy.get('[placeholder="Enter VIN"]').type("1P7HR42N45S321898", { force: true })
           cy.get('.mantine-1swk166').click()
           cy.contains("No record found. Please re-enter your VIN number").should("exist")
        }
export const addvehicle4 = () => {
            cy.contains("Login").click()  
           cy.contains("3. Vehicles").click()
               cy.contains("3.1 Add Vehicles").click()
               cy.get('[placeholder="Enter VIN"]').type("1P7HR42N45S321898345", { force: true })
               cy.get('.mantine-1swk166').click()
               cy.contains("Please Enter a Valid VIN (e.g. 1D7HE42N45S321898)").should("exist")
      }
   
export const AddvehicleImage = () => {

                cy.contains("Login").click()  
               
               cy.contains("3. Vehicles").click()
                   cy.contains("3.1 Add Vehicles").click()
               
                   /////////// Add Vehicel Form ///////
               
                   // VIN
                   cy.get('[placeholder="Enter VIN"]').type("1C4HJXEG9MW851795", { force: true })
                   cy.get('.mantine-1swk166').click()
                   cy.contains("Retail Price").parent().parent().find("input[type=number]").clear().type(45500)
                   cy.get('[placeholder="Enter Cost Price"]').clear().type('39000')
                   cy.get('[placeholder="Enter Mileage"]').clear().type('19,400')
                   cy.contains("Next step").click()
               
                           ////////// Vehicle Description //////////
                   cy.get('[class="ProseMirror"]').clear().type("This used car is a reliable and well-maintained vehicle that has been carefully inspected and serviced to ensure its optimal performance.")    
                   cy.contains("Next step").click()
                   cy.get(".mantine-1hss7nx").contains("Select images of vehicle (PNG, JPG, JPEG)").attachFile(['jeep1.jpeg','jeep2.jpeg'],{ subjectType: 'drag-n-drop'})
                   cy.contains("Cover Image").should("exist")
                }

export const AddvehiclePdf = () => {

                    cy.contains("Login").click()  
                   
                   cy.contains("3. Vehicles").click()
                       cy.contains("3.1 Add Vehicles").click()
                   
                       /////////// Add Vehicel Form ///////
                   
                       // VIN
                       cy.get('[placeholder="Enter VIN"]').type("1C4HJXEG9MW851795", { force: true })
                       cy.get('.mantine-1swk166').click()
                       cy.contains("Retail Price").parent().parent().find("input[type=number]").clear().type(45500)
                       cy.get('[placeholder="Enter Cost Price"]').clear().type('39000')
                       cy.get('[placeholder="Enter Mileage"]').clear().type('19,400')
                       cy.contains("Next step").click()
                   
                               ////////// Vehicle Description //////////
                       cy.get('[class="ProseMirror"]').clear().type("This used car is a reliable and well-maintained vehicle that has been carefully inspected and serviced to ensure its optimal performance.")    
                       cy.contains("Next step").click()
                              /////// Image and Model//////////////
                       cy.get(".mantine-1hss7nx").contains("Select images of vehicle (PNG, JPG, JPEG)").attachFile('TEST PDF FILE.pdf',{ subjectType: 'drag-n-drop'})
                       cy.contains("This file type is not supported").should("exist")
    }
export const Search_Valid_VinNO =()=>{
    cy.contains("Login").click()                 
    cy.contains("3. Vehicles").click()
    cy.contains("3.2 View Vehicles").click()
    
        cy.get('[placeholder="Search"]').type("1C4HJXEG9MW851795")
        cy.get('[placeholder="Filter by Status"]').click()   
             cy.contains("Active").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
        cy.contains("1C4HJXEG9MW851795").should("exist")

}
export const Search_InValid_VinNO =()=>{
    cy.contains("Login").click()                 
    cy.contains("3. Vehicles").click()
    cy.contains("3.2 View Vehicles").click()
    
        cy.get('[placeholder="Search"]').type("1C5HJXEG6MW851795")
        cy.get('[placeholder="Filter by Status"]').click()   
             cy.contains("Active").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
             cy.contains("There are no records to display").should("exist")
}
export const viewVehicle_View_IconButton= () => {
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicle found Successfully')
    cy.contains("3. Vehicles").click()
    cy.contains("3.2 View Vehicles").click()
    cy.get('[placeholder="Search"]').type("1FMSK8FH8NGB68090")
        // cy.get('[placeholder="Filter by Status"]').click()   
        //      cy.contains("Active").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View Vehicle Details").should("exist")
    cy.get("button").contains("Vehicle Description").click()
    cy.get("button").contains("Vehicle Images").click()
    cy.get("button").contains("Vehicle Notes").click()
    cy.wait("@Vehicle found Successfully").its('response.statusCode').should('eq', 201);
}
export const viewVehicle_Edit_IconButton= () => {
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicle found Successfully')
    cy.contains("3. Vehicles").click()
    cy.contains("3.2 View Vehicles").click()
    cy.get('[placeholder="Search"]').type("1FMSK8FH8NGB68090")
        //cy.get('[placeholder="Filter by Status"]').click()   
          //   cy.contains("Active").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
    cy.contains("Update Vehicle").should("exist")
    
    cy.wait(2000)
    cy.get("button").contains("Next step").click()
    cy.get("button").contains("Next step").click()
    cy.get("button").contains("Submit").click()
    cy.contains("Vehicle updated successfully").should("exist")
    cy.wait("@Vehicle found Successfully").its('response.statusCode').should('eq', 201);
}

export const viewVehicle_Delete_IconButton= () => {
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicle found Successfully')
    cy.contains("3. Vehicles").click()
    cy.contains("3.2 View Vehicles").click()
    cy.get('[placeholder="Search"]').type("1FMSK8FH8NGB68090")
        // cy.get('[placeholder="Filter by Status"]').click()   
        //      cy.contains("Active").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-trash").click()
    cy.contains("Delete Vehicle").should("exist")
    cy.get("button").contains("Next step").click()
    cy.get("button").contains("Delete").click()
    cy.contains("Vehicle Deleted successfully").should("exist")
    cy.wait("@Vehicle found Successfully").its('response.statusCode').should('eq', 201);
}
export const viewVehicle_AddNotes= () => {
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicle found Successfully')
    cy.contains("3. Vehicles").click()
    cy.contains("3.2 View Vehicles").click()
    cy.get('[placeholder="Search"]').type("1FMSK8FH8NGB68090")
        // cy.get('[placeholder="Filter by Status"]').click()   
        //      cy.contains("Active").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View Vehicle Details").should("exist")
    cy.get("button").contains("Vehicle Notes").click()

//// Add Notes
    cy.get("button").contains("Add Note").click()
    cy.contains("Add New Note").should("exist")
    cy.get('[placeholder="Type note here"]').type("Good Car")
    cy.contains("Add New Note").parent().parent().find('button').contains("Add Note").click()
   cy.contains("Note added successfully").should("exist")
    cy.wait("@Vehicle found Successfully").its('response.statusCode').should('eq', 201);
}

export const viewVehicle_DeleteNotes= () => {
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicle found Successfully')
    cy.contains("3. Vehicles").click()
    cy.contains("3.2 View Vehicles").click()
    cy.get('[placeholder="Search"]').type("1FMSK8FH8NGB68090")
        // cy.get('[placeholder="Filter by Status"]').click()   
        //      cy.contains("Active").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View Vehicle Details").should("exist")
    cy.get("button").contains("Vehicle Notes").click()

//// Add Notes
    
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-trash").click()
//// Delete Notes
   cy.contains("Delete Note").should("exist")
   cy.get("button").contains("Delete").click()
  cy.contains("Note Deleted Successfully").should("exist")
    cy.wait("@Vehicle found Successfully").its('response.statusCode').should('eq', 201);
}



