//DealerShip Data
     const seller_type = "Whole Seller"
     const dealership_name= "Car Direct"
     const dealership_website= "https://www.carsdirect.com/"
     const dealership_Instagram= "www.instagram.com/CarDirect"
     const dealership_facebook= "www.facebook.com/CarDirect"
     const dealer_licenseNo= "wz86876548"
     const dealer_SalesandTaxNo= "56435652"
     const dealer_TraderlicenseNo= "98234845"



export const SellerSignup = () => {
    cy.contains("Login").click()   
/// Steppers ///
 //////////// (Dealer ship Detail) //////
    cy.get('[placeholder="Enter Dealership Name"]').type(dealership_name)
//Valid ZipCode
 cy.get('[placeholder="Enter Dealership Zip Code"]').type("93505")
 cy.get('[placeholder="Enter Dealership Street Address"]').type("9000, street16")
 cy.get('[placeholder="Enter Dealership Phone #"]').type("+1(222)-222-2222")
 cy.get('[placeholder="Enter Dealership Website"]').type(dealership_website)
 cy.get('[placeholder="www.instagram.com/username"]').clear().type(dealership_Instagram)
 cy.get('[placeholder="www.facebook.com/username"]').clear().type(dealership_facebook)
 cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('Car direct.png', { subjectType: 'drag-n-drop' })
 cy.wait(3000)
 cy.get("button").contains("Next").click()

/////// Select Seller Type and Dealer License /////
cy.get('[placeholder="Select Dealership Type"]').click()
cy.contains(seller_type).click()
cy.get('[placeholder="Dealer License Number (AB12345678)"]').type(dealer_licenseNo)
cy.get(".mantine-1hss7nx").contains("Upload Dealer License in JPG/PNG/PDF format.").attachFile('deaqlership licenece.jpeg', { subjectType: 'drag-n-drop' })
cy.wait(3000)
cy.get("button").contains("Next").click()

/////// Trader License &  Sale and Use Tax ////////////
cy.get('[placeholder="Sales and Use Tax Number (12345678)"]').type(dealer_SalesandTaxNo)
cy.get('[placeholder="Trader License Number (12345678)"]').type(dealer_TraderlicenseNo)
cy.get(".mantine-1hss7nx").contains("Please upload Sales and Use Tax in JPG/PNG/PDF format.").attachFile('sale and use tax doc.jpg', { subjectType: 'drag-n-drop' })
cy.get(".mantine-1hss7nx").contains("Please upload Trader License in JPG/PNG/PDF format.").attachFile('trader licence.jpeg', { subjectType: 'drag-n-drop' })
cy.wait(3000)

cy.get("button").contains("Next").click()

/////// Bank Details ////////////
cy.get("button").contains("Connect Your Stripe Account").click()

cy.pause()
cy.get("button").contains("Next").click()
cy.contains("I agree to the above terms and conditions").click()
cy.get("button").contains("Next").click()
cy.wait(3000)

cy.get("button").contains("Back to Home").click()

}
