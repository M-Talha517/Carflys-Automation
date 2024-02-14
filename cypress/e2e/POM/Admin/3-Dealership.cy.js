import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Viewdealership_ViewIconButton =() =>{
    cy.contains("3. View Dealerships").click()
// search field
    cy.get('[placeholder="Search"]').type("Auto Mart")
// Filters Dealer Type
    cy.get('[placeholder="Filter by Dealer Type"]').click()
       cy.contains("Independent")
// Filters By Dealer Status
   cy.get('[placeholder="Filter by Status"]').click()
      cy.contains("Active").click()
// row selected on table and edit the data
cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
cy.contains("View Dealership Details")
}

export const Viewdealership_Modal_CloseButton =() =>{
    cy.contains("3. View Dealerships").click()
// search field
    cy.get('[placeholder="Search"]').type("Auto Mart")
// Filters Dealer Type
    cy.get('[placeholder="Filter by Dealer Type"]').click()
       cy.contains("Independent")
// Filters By Dealer Status
   cy.get('[placeholder="Filter by Status"]').click()
      cy.contains("Active").click()
// row selected on table and edit the data
cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
cy.contains("View Dealership Details")
cy.contains("Dealership Info").get("button").parent().find(".mantine-UnstyledButton-root").click()

}

// export const Viewdealership_Modal_ViewDocument =() =>{
//     cy.contains("3. View Dealerships").click()
// // search field
//     cy.get('[placeholder="Search"]').type("testsell")
// // Filters Dealer Type
//     cy.get('[placeholder="Filter by Dealer Type"]').click()
//        cy.contains("Whole Seller")
// // Filters By Dealer Status
//    cy.get('[placeholder="Filter by Status"]').click()
//       cy.contains("Active").click()
// // row selected on table and edit the data
// cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
// cy.contains("View Dealership Details")

// cy.contains("Dealership Documents").get("button").parent().find(".mantine-UnstyledButton-root").click()

// }

export const Viewdealership_EditIconButton =() =>{
    cy.contains("3. View Dealerships").click()
// search field
    cy.get('[placeholder="Search"]').type("Auto Mart")
// Filters Dealer Type
    cy.get('[placeholder="Filter by Dealer Type"]').click()
       cy.contains("Independent")
// Filters By Dealer Status
   cy.get('[placeholder="Filter by Status"]').click()
      cy.contains("Active").click()
// row selected on table and edit the data
cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
cy.contains("Edit Dealership").should("exist")


//                         //// Edit Dealership ////
//     ///// Dealership Information ///
// // Name edit
// cy.get('[placeholder="Enter Dealership Name"]').clear().type("Test Dealership")
// // Dealership address
// cy.get('[placeholder="Enter Dealership Address"]').clear().type("dealership@test.com")
// // Dealership Zip Code
// cy.get('[placeholder="Enter Dealership Zip Code"]').clear().type("54161")
// // Dealership Phone #
// cy.get('[placeholder="Enter Dealership Phone #"]').clear().type("+1 (651) 646-5165")
// // Dealership Website 
// cy.get('[placeholder="Enter Dealership Website"]').clear().type("www.dealership.com")
// // Dealership Instagram Handle 
// cy.get('[placeholder="Enter Dealership Instagram Handle"]').clear().type("www.instagram.com/dealership")
// // Dealership Facebook Handle
// cy.get('[placeholder="Enter Dealership Facebook Handle"]').clear().type("www.facebook.com/dealership")
// // Dealership Logo
// cy.get('.icon-tabler-x').click()
// cy.get('[type="file"]').attachFile('dealership logo.png', { subjectType: 'drag-n-drop' })

// // Next Step
// cy.contains("Next step").click()

// // Dealership Type
// cy. get('[placeholder="Select Dealership Type"]').click()
//    cy.contains("Whole Seller").click()
// // Dealer Licence No 
// cy.get ('[placeholder="Dealer License Number"]').clear().type("AD65156165")
// // image cross
// cy.get('.icon-tabler-x').click()
// // Image Upload 
// cy.get('[type="file"]').attachFile('dealershipImage1.jpg', { subjectType: 'drag-n-drop' })
// // Next Step
// cy.contains("Next step").click()
//          ///// Sales and Tax Form ////
// // sale and use tax field
// cy.get('[placeholder="Enter Sales and Use Tax Number"]').clear().type("65168465")
// // Trader Licenece field
// cy.get('[placeholder="Enter Trader License Number"]').clear().type("46516231")
// // files upload
// //cy.get(".mantine-1ltm15n").find(".icon-tabler-x").click()
// //cy.get(".mantine-Dropzone-inner").contains("Upload Sales and Use Tax in JPG/PNG/PDF format.").attachFile('jeep1.jpeg', { subjectType: 'drag-n-drop' })
// cy.get("button").contains("Update").click()
}

export const Viewdealership_UpdateButton =() =>{
    cy.contains("3. View Dealerships").click()
// search field
    cy.get('[placeholder="Search"]').type("testsell")
// Filters Dealer Type
    cy.get('[placeholder="Filter by Dealer Type"]').click()
       cy.contains("Whole Seller")
// Filters By Dealer Status
   cy.get('[placeholder="Filter by Status"]').click()
      cy.contains("Active").click()
// row selected on table and edit the data
cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
cy.contains("Edit Dealership").should("exist")
                        //// Edit Dealership ////
// Dealership Type
cy.get('[placeholder="Select Dealership Type"]').click()
   cy.contains("Whole Seller").click()
// Dealer Licence No 
cy.get ('[placeholder="Dealer License Number"]').clear().type("AD65156165")
// image cross
cy.get('.icon-tabler-x').click()
// Image Upload 
cy.get('[type="file"]').attachFile('dealershipImage1.jpg', { subjectType: 'drag-n-drop' })
// Next Step
cy.contains("Next step").click()
         ///// Sales and Tax Form ////
// sale and use tax field
cy.get('[placeholder="Enter Sales and Use Tax Number"]').clear().type("65168465")
// Trader Licenece field
cy.get('[placeholder="Enter Trader License Number"]').clear().type("46516231")
// files upload
//cy.get(".mantine-1ltm15n").find(".icon-tabler-x").click()
//cy.get(".mantine-Dropzone-inner").contains("Upload Sales and Use Tax in JPG/PNG/PDF format.").attachFile('jeep1.jpeg', { subjectType: 'drag-n-drop' })

// Next Step
cy.contains("Next step").click()
         ///// Dealership Information ///
// Name edit
cy.get('[placeholder="Enter Dealership Name"]').clear().type("Test Dealership")
// Dealership address
cy.get('[placeholder="Enter Dealership Address"]').clear().type("dealership@test.com")
// Dealership Zip Code
cy.get('[placeholder="Enter Dealership Zip Code"]').clear().type("54161")
// Dealership Phone #
cy.get('[placeholder="Enter Dealership Phone #"]').clear().type("+1 (651) 646-5165")
// Dealership Website 
cy.get('[placeholder="Enter Dealership Website"]').clear().type("www.dealership.com")
// Dealership Instagram Handle 
cy.get('[placeholder="Enter Dealership Instagram Handle"]').clear().type("www.instagram.com/dealership")
// Dealership Facebook Handle
cy.get('[placeholder="Enter Dealership Facebook Handle"]').clear().type("www.facebook.com/dealership")
// Dealership Logo
cy.get('.icon-tabler-x').click()
cy.get('[type="file"]').attachFile('dealership logo.png', { subjectType: 'drag-n-drop' })

}

export const Viewdealership_DeleteIconButton =() =>{

    cy.contains("3. View Dealerships").click()
// search field
    cy.get('[placeholder="Search"]').type("abcdelarship")
// Filters Dealer Type
    cy.get('[placeholder="Filter by Dealer Type"]').click()
       cy.contains("Whole Seller")
// Filters By Dealer Status
   cy.get('[placeholder="Filter by Status"]').click()
      cy.contains("Active").click()
// row selected on table and edit the data
cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-trash").click()
cy.contains("Delete Dealership").should("exist")
cy.get("button").contains("Delete")

}

export const Viewdealership_SearchName =() =>{
    cy.contains("3. View Dealerships").click()
// search field
    cy.get('[placeholder="Search"]').type("testsell")
// Filters Dealer Type
    cy.get('[placeholder="Filter by Dealer Type"]').click()
       cy.contains("Whole Seller")
// Filters By Dealer Status
   cy.get('[placeholder="Filter by Status"]').click()
      cy.contains("Active").click()
cy.contains("testsell").should("exist")
}

export const Viewdealership_Filters =() =>{
    cy.contains("3. View Dealerships").click()
// search field
    cy.get('[placeholder="Search"]').type("testsell")
// Filters Dealer Type
    cy.get('[placeholder="Filter by Dealer Type"]').click()
       cy.contains("Whole Seller")
// Filters By Dealer Status
   cy.get('[placeholder="Filter by Status"]').click()
      cy.contains("Active").click()
cy.contains("testsell").should("exist")
}

export const Viewdealership_ClearFilterButton =() =>{
    cy.contains("3. View Dealerships").click()
// search field
    cy.get('[placeholder="Search"]').type("testsell")
// Filters Dealer Type
    cy.get('[placeholder="Filter by Dealer Type"]').click()
       cy.contains("Whole Seller")
// Filters By Dealer Status
   cy.get('[placeholder="Filter by Status"]').click()
      cy.contains("Active").click()
cy.contains("testsell").should("exist")
cy.get("button").contains("Clear Filters").click()
}

export const Viewdealership_StatusChanges =() =>{
    cy.contains("3. View Dealerships").click()
// search field
    cy.get('[placeholder="Search"]').type("testsell")
// Filters Dealer Type
    cy.get('[placeholder="Filter by Dealer Type"]').click()
       cy.contains("Whole Seller").click()
// // Filters By Dealer Status
//    cy.get('[placeholder="Filter by Status"]').click()
//       cy.contains("Active").click()
cy.contains("testsell").should("exist")
cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
cy.contains("Block").click()
}


export const Viewdealership_AdminApproval =() =>{
    cy.contains("3. View Dealerships").click()
// search field
    cy.get('[placeholder="Search"]').type("Car Direct")
// Filters Dealer Type
    cy.get('[placeholder="Filter by Dealer Type"]').click()
       cy.contains("Whole Seller")
// // Filters By Dealer Status
//    cy.get('[placeholder="Filter by Status"]').click()
//       cy.contains("Active").click()
cy.contains("Car Direct").should("exist")
cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
cy.contains("Activate").click()

}












