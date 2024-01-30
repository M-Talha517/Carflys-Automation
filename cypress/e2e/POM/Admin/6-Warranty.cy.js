import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const addWaranty_BlankFields= () => {
    cy.contains('6. Warranty').click()
    cy.contains("6.1 Add Warranty").click()
    cy.get('[type="submit"]').click()
    cy.contains("Please Select a Warranty Type.").should("exist")
    cy.contains("Please Enter a Warranty Price of $1 or more.").should("exist")
    cy.contains("Please Enter a Validation Period of 1 or more months.").should("exist")
    cy.contains("Please Enter a Validation Period of 1 or more years.").should("exist")
    cy.contains("Please Enter atleast one perk of 3 or more length.").should("exist")
}
export const addWaranty_ValidData = () => {
    cy.contains('6. Warranty').click()
    cy.contains("6.1 Add Warranty").click()

    cy.get('[placeholder="Select Warranty Type"]').type("Silver", { force: true })
    cy.contains("Silver").click()

    cy.get('[placeholder="Enter Price"]').clear().type("2850")
    // In Monts
    cy.contains("Validation Period (Months)").parent().find("input[type='number']").clear().type(36)
   // In Miles
    cy.contains("Validation Period (Miles)").parent().find('input[type="number"]').clear().type(125000)

    cy.get('[placeholder="Enter Warranty Perks separated by Enter ↲"]').type("Powertrain components, such as the engine and transmission")
    cy.get('[type="submit"]').click()

    cy.wait(10 * second)
    ////////////////  View Waranty ///////////////
    cy.contains("6.2 View Warranty").click()
}
export const addWaranty_ResetButton = () => {
    cy.contains('6. Warranty').click()
    cy.contains("6.1 Add Warranty").click()

    cy.get('[placeholder="Select Warranty Type"]').type("Silver", { force: true })
    cy.contains("Silver").click()

    cy.get('[placeholder="Enter Price"]').clear().type("2850")
    // In Monts
    cy.contains("Validation Period (Months)").parent().find("input[type='number']").clear().type(36)
   // In Miles
    cy.contains("Validation Period (Miles)").parent().find('input[type="number"]').clear().type(125000)
    cy.get('[placeholder="Enter Warranty Perks separated by Enter ↲"]').type("Powertrain components, such as the engine and transmission")
    cy.get("button").contains("Reset").click()

    cy.get('[placeholder="Select Warranty Type"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Price"]').invoke('val').should('eq', '0')
    // cy.get('[placeholder="Enter Validation Period"]').next("div").contains("in months").invoke('val').should('eq', '')
    // cy.get("Validation Period (Miles)").parent().invoke('val').should('eq', '0')
    cy.get('[placeholder="Enter Warranty Perks separated by Enter ↲"]').invoke('val').should('eq', '')
    
}
export const viewWaranty_AddButton =()=>{
    cy.contains('6. Warranty').click()
    cy.contains("6.2 View Warranty").click()
    cy.get("button").contains("Add Waranty").click()
    cy.contains("Fill in the data to add Warranty").should("exist")
}

export const viewWaranty_View_IconButton =()=>{
    cy.contains('6. Warranty').click()
    cy.contains("6.2 View Warranty").click()
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View warranty").should("exist")
}
export const viewWaranty_ViewIcon_CloseButton =()=>{
    cy.contains('6. Warranty').click()
    cy.contains("6.2 View Warranty").click()
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View warranty").should("exist")

    cy.get("button").contains("Close").click()
}
export const viewWaranty_Edit_IconButton =()=>{
    cy.contains('6. Warranty').click()
    cy.contains("6.2 View Warranty").click()
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
    cy.contains("Update Warranty").should("exist")
}
export const viewWaranty_Edit_ResetButton = () => {
    cy.contains('6. Warranty').click()
    cy.contains("6.2 View Warranty").click()

    cy.get("button").contains("Reset").click()

    cy.get('[placeholder="Enter Price"]').invoke('val').should('eq', '0')
    cy.get("Validation Period (Months)").invoke('val').should('eq', '0')
    cy.get("Validation Period (Miles)").invoke('val').should('eq', '0')
    cy.get('[placeholder="Enter Warranty Perks separated by Enter ↲"]').invoke('val').should('eq', '')
}

export const viewWaranty_Delete_IconButton =()=>{
    cy.contains('6. Warranty').click()
    cy.contains("6.2 View Warranty").click()
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-trash").click()
    cy.contains("Delete Warranty").should("exist")
    cy.get("button").contains("Delete").click()

}