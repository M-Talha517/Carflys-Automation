import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Admin_AddVehicle_Nodata = () => {
    cy.contains("Login").click()  
   cy.contains("4. Vehicles").click()
       cy.contains("4.1 Add Vehicles").click()
       cy.contains("Next step").click()
       cy.contains("Please Enter a Valid VIN (e.g. 1D7HE42N45S321898)").should("exist")
       cy.contains("Please Enter a Title of 3 or more length").should("exist")
       cy.contains("Please Enter a minimum price of $1").should("exist")
       cy.contains("Please Enter a minimum price of $1").should("exist")       
       cy.contains("Please Enter a valid mileage between 1 and 250,000").should("exist")
       cy.contains("Please select a State Location").should("exist")
       cy.contains("Please Enter Make").should("exist")
       cy.contains("Please Enter Model").should("exist")
    }
   
    export const Admin_AddVehicle_ValidData = () => {

        cy.contains("Login").click()  
       
       cy.contains("4. Vehicles").click()
           cy.contains("4.1 Add Vehicles").click()
       
           /////////// Add Vehicel Form ///////
       
           // VIN
           cy.get('[placeholder="Select Dealership"]').click()
           cy.wait(3000)
              cy.contains("Super Car Wheel").click()


           cy.get('[placeholder="Enter VIN"]').type("5J6RE3H43BL058780", { force: true })
           cy.get('.mantine-1swk166').click()
           cy.get('[placeholder="Enter Mileage"]').invoke("text", "19400") 
           cy.get("button").contains("Get Valuation And Data").click()

           cy.contains("Retail Price").parent().parent().find("input[type=number]").clear().type("45500")
           cy.get('[placeholder="Enter Cost Price"]').clear().type('39000')
           cy.get('[placeholder="Enter Mileage"]').clear().type('19400')
           cy.get('[placeholder="Enter State Location"]').click()
             cy.contains("Alabama").click()
           cy.contains("Next step").click()
       
                   ////////// Vehicle Description //////////
                   //const ele = cy.get(".mantine-RichTextEditor-content").find("p");
                  // ele.setInnerText = "Text"
           cy.get(".mantine-RichTextEditor-content").find("p").invoke("text", "abc") 
           cy.wait(4000)   
           cy.contains("Next step").click()
           cy.get(".mantine-1hss7nx").contains("Select images of vehicle (PNG, JPG, JPEG)").attachFile(['jeep1.jpeg','jeep2.jpeg'],{ subjectType: 'drag-n-drop'})
           cy.contains("Submit").click()
           cy.wait(2 * second)
           cy.contains("Vehicle has been added to the database successfully.").should("exist")
           cy.wait(10 * second)
                                        ////// View Vehicle /////////
       
           cy.contains("4.2 View Vehicles").click()
           cy.get('[placeholder="Search"]').type("5J6RE3H43BL058780")
           cy.get('[placeholder="Filter by Status"]').click()   
                cy.contains("Active").click()
           cy.get('[placeholder="Filter by Phase"]').click()
                cy.contains("Available").click()
                cy.contains("5J6RE3H43BL058780").should("exist")
    }
    export const Admin_AddVehicle_AlreadyExist = () => {
            cy.contains("Login").click()  
           cy.contains("4. Vehicles").click()   
               cy.contains("4.1 Add Vehicles").click()
               // VIN
               cy.get('[placeholder="Enter VIN"]').type("1C6RRFFG9RN120861", { force: true })
               // Decode VIN Button
               cy.get('.mantine-1swk166').click()
               cy.get('[placeholder="Enter Mileage"]').invoke("text", "19400") 
               cy.get("button").contains("Get Valuation And Data").click()

               cy.contains("The provided VIN already exists.").should("exist")
    }

    export const Admin_AddVehicle_InvalidVin = () => {
                cy.contains("Login").click()  
               cy.contains("4. Vehicles").click()
                   cy.contains("4.1 Add Vehicles").click()
                   cy.get('[placeholder="Enter VIN"]').type("1P7HR42N45S321898", { force: true })
                   cy.get('.mantine-1swk166').click()
                   cy.get('[placeholder="Enter Mileage"]').invoke("text", "19400")
                   cy.get("button").contains("Get Valuation And Data").click()

                   cy.contains("No record found. Please re-enter your VIN number").should("exist")
    }

    export const Admin_AddvehicleImage = () => {

        cy.contains("Login").click()  
       
       cy.contains("4. Vehicles").click()
           cy.contains("4.1 Add Vehicles").click()
           cy.get('[placeholder="Select Dealership"]').click()
           cy.wait(2000)
              cy.contains("Super Car Wheel").click()
           /////////// Add Vehicel Form ///////
       
           // VIN
           cy.get('[placeholder="Enter VIN"]').type("2C3CDZAG7LH199134", { force: true })
           cy.get('.mantine-1swk166').click()
           cy.get('[placeholder="Enter Mileage"]').invoke("text", "19400") 
            cy.contains("Get Valuation And Data").click()
           cy.contains("Retail Price").parent().parent().find("input[type=number]").clear().type("45500")
           cy.get('[placeholder="Enter Cost Price"]').clear().type('39000')
           cy.get('[placeholder="Enter State Location"]').click()
           cy.contains("Alabama").click()
           cy.contains("Next step").click()
           cy.wait(1000)
                   ////////// Vehicle Description //////////
                   cy.get(".mantine-RichTextEditor-content").find("p").invoke("text", "abc") 
           cy.contains("Next step").click()
           cy.get(".mantine-1hss7nx").contains("Select images of vehicle (PNG, JPG, JPEG)").attachFile(['jeep1.jpeg','jeep2.jpeg'],{ subjectType: 'drag-n-drop'})
           cy.contains("Cover Image").should("exist")
        }

    export const Admin_AddvehiclePdf = () => {

            cy.contains("Login").click()  
           
           cy.contains("4. Vehicles").click()
               cy.contains("4.1 Add Vehicles").click()
           
               /////////// Add Vehicel Form ///////
               cy.get('[placeholder="Select Dealership"]').click()
               cy.wait(2000)
                  cy.contains("Super Car Wheel").click()
               // VIN
               cy.get('[placeholder="Enter VIN"]').type("1C4HJXEG9MW851795", { force: true })
               cy.get('.mantine-1swk166').click()
               cy.get('[placeholder="Enter Mileage"]').invoke("text", "19400") 
               cy.contains("Retail Price").parent().parent().find("input[type=number]").clear().type("45500")
               cy.get('[placeholder="Enter Cost Price"]').clear().type('39000')
              // cy.get('[placeholder="Enter Mileage"]').clear().type('19,400')
               cy.get('[placeholder="Enter State Location"]').click()
               cy.contains("Alabama").click()
               cy.contains("Next step").click()
           
                       ////////// Vehicle Description //////////

cy.get(".mantine-RichTextEditor-content").find("p").invoke("text", "abc")                        
cy.contains("Next step").click()
                      /////// Image and Model//////////////
               cy.get(".mantine-1hss7nx").contains("Select images of vehicle (PNG, JPG, JPEG)").attachFile('TEST PDF FILE.pdf',{ subjectType: 'drag-n-drop'})
               cy.contains("This file type is not supported").should("exist")
}
export const Admin_viewVehicle_View_IconButton= () => {
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicle found Successfully')
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()
    cy.get('[placeholder="Search"]').type("2C3CDZJG9NH247302")
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
export const Admin_viewVehicle_AddNotes= () => {
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicle found Successfully')
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()
    cy.get('[placeholder="Search"]').type("2C3CDZJG9NH247302")
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
export const Admin_viewVehicle_DeleteNotes= () => {
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicle found Successfully')
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()
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
export const Admin_viewVehicle_Edit_IconButton= () => {
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicle found Successfully')
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()
    cy.get('[placeholder="Search"]').type("2C3CDZJG9NH247302")
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
export const Admin_viewVehicle_Delete_IconButton= () => {
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicle found Successfully')
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()
    cy.get('[placeholder="Search"]').type("1FMSK8FH8NGB68090")
        // cy.get('[placeholder="Filter by Status"]').click()   
        //      cy.contains("Active").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-trash").click()
    cy.contains("Delete Vehicle").should("exist")
    cy.get("button").contains("Delete").click()
    cy.contains("Vehicle Deleted successfully").should("exist")
    cy.wait("@Vehicle found Successfully").its('response.statusCode').should('eq', 201);
}

export const Admin_Search_Valid_VinNO =()=>{
    //cy.contains("Login").click()                 
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()
    
        cy.get('[placeholder="Search"]').type("1C6RRFFG9RN120861")
        cy.get('[placeholder="Filter by Status"]').click()   
             cy.contains("Deal Confirmed").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Received By Customer").click()
        cy.contains("1C6RRFFG9RN120861").should("exist")

}
export const Admin_Search_InValid_VinNO =()=>{
    cy.contains("Login").click()                 
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()
    
        cy.get('[placeholder="Search"]').type("1C5HJXEG6MW851795")
        cy.get('[placeholder="Filter by Status"]').click()   
             cy.contains("Active").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
             cy.contains("There are no records to display").should("exist")
}
export const Admin_ClearfilterButton =()=>{
    cy.contains("Login").click()                 
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()
    
        cy.get('[placeholder="Search"]').type("1C5HJXEG6MW851795")
        cy.get('[placeholder="Filter by Status"]').click()   
             cy.contains("Active").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
        cy.get("button").contains("Clear Filters").click()
}
export const Admin_filterByStatus =()=>{
    cy.contains("Login").click()                 
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()

        cy.get('[placeholder="Filter by Status"]').click()   
            
             cy.contains("Active").should("exist")
             cy.contains("Block").should("exist")
             cy.contains("In Deal").should("exist")
             cy.contains("Sold").should("exist")
            
            }
export const Admin_filterByPhase =()=>{
    cy.contains("Login").click()                 
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()
    
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").should("exist")
             cy.contains("In Transit").should("exist")
             cy.contains("Received").should("exist")
}

export const Admin_Vehicle_StatusChanges_Active =()=>{
    cy.contains("Login").click()                 
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()
    
        cy.get('[placeholder="Search"]').type("4S3GTAT67P3721064")
        // cy.get('[placeholder="Filter by Status"]').click()   
        //      cy.contains("Active").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
             cy.contains("4S3GTAT67P3721064").should("exist")
        cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
        cy.contains("Unblock").click()
        cy.contains("Status Updated Successfully").should("exist")

}
export const Admin_Vehicle_StatusChanges_Block=()=>{
    cy.contains("Login").click()                 
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()
    
        cy.get('[placeholder="Search"]').type("1G6DA1E32C0152845")
        // cy.get('[placeholder="Filter by Status"]').click()   
        //      cy.contains("Block").click()
        cy.get('[placeholder="Filter by Phase"]').click()
             cy.contains("Available").click()
             cy.contains("1G6DA1E32C0152845").should("exist")
        cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
        cy.contains("Block").click()
        cy.contains("Status Updated Successfully").should("exist")
        
}

export const Admin_View_AddVehicle_Button =()=>{
    cy.contains("Login").click()                 
    cy.contains("4. Vehicles").click()
    cy.contains("4.2 View Vehicles").click()

    cy.get(".mantine-Grid-col").get("button").contains("Add Vehicle").click()
    cy.contains("Fill in the data to add a new vehicle.").should("exist")

}



