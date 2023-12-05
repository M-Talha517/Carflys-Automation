/// seller Type
     const seller_type = "Whole Seller"

export const SellerSignup = () => {
    cy.contains("Login").click()   
/// Steppers ///
 //////////// (Dealer ship Detail) //////
    cy.get('[placeholder="Enter Dealership Name"]').type("Super Wheel")
//Valid ZipCode
 cy.get('[placeholder="Enter Dealership Zip Code"]').type("20009")
 cy.get('[placeholder="Enter Dealership Street Address"]').type("2013, street16")
 cy.get('[placeholder="Enter Dealership Phone #"]').type("+1(222)-222-2222")
 cy.get('[placeholder="Enter Dealership Website"]').type("https://www.superwheelspak.com/ee")
 cy.get('[placeholder="www.instagram.com/username"]').clear().type("www.instagram.com/superwheels_1")
 cy.get('[placeholder="www.facebook.com/username"]').clear().type("www.facebook.com/superwheels")
 cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('superwheel logo.png', { subjectType: 'drag-n-drop' })
 cy.contains("Next").click()

/////// Select Seller Type and Dealer License /////
cy.get('[placeholder="Select Dealership Type"]').click()
cy.contains("Whole Seller").click()
cy.get('[placeholder="Dealer License Number (AB12345678)"]').type("ad33333333")
cy.get(".mantine-1hss7nx").contains("Upload Dealer License in JPG/PNG/PDF format.").attachFile('deaqlership licenece.jpeg', { subjectType: 'drag-n-drop' })

cy.contains("Next").click()

/////// Trader License &  Sale and Use Tax ////////////
cy.get('[placeholder="Sales and Use Tax Number (12345678)"]').type("37233333")
cy.get('[placeholder="Trader License Number (12345678)"]').type("26323625")
cy.get(".mantine-1hss7nx").contains("Please upload Sales and Use Tax in JPG/PNG/PDF format.").attachFile('sale and use tax doc.jpg', { subjectType: 'drag-n-drop' })
cy.get(".mantine-1hss7nx").contains("Please upload Trader License in JPG/PNG/PDF format.").attachFile('trader licence.jpeg', { subjectType: 'drag-n-drop' })

cy.contains("Next").click()


/////// Bank Details ////////////
cy.get("button").contains("Connect Your Stripe Account").click()
cy.wait(5000)
const pop_url = "https://connect.stripe.com/setup/e/acct_1OHPT9Rh9mhO392r/" 
cy.window().then(win =>{
    const stub = cy.stub(win, 'open').as('windowopen')
})
//cy.get("@windowopen").should('be.calledwith', pop_url)
cy.window().then(win =>{
win.location.href = pop_url

})

// cy.get('[aria-label="US"]').click()
//  cy.contains("PK").click()
//  cy.get('[placeholder="(201) 555-0123"]').type("03245121055")
// cy.contains("Continue").click()

}
