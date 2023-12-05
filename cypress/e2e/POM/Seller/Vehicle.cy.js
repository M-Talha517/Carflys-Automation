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


