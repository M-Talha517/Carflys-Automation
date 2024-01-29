import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const Vehicle_order_Finance =()=>{
    cy.get("button").get(".mantine-Burger-root").click()
    cy.contains("Vehicle").click()                                               /// 5FNRL6H72LB034983
// Search Car                                                                    /// 1G6DA1E32C0152845
    cy.get('[placeholder="Search by make, model"]').type("5FNRL38699B054484")   ///KNDJN2A25F7162188
    cy.get(".mantine-1rn52sj").click()  //.mantine-1s4s1c6
    cy.wait(3000)
   // cy.contains("Browse Vehicles").parent().find("button").contains("Buy Now").click()
   cy.get(".mantine-p60k53").contains("Buy Now").click()
   cy.contains('First Name').next("div").find('[type="text"]').clear().type('ANDERSON')
   cy.contains('Middle Name').next("div").find('[type="text"]').clear().type('SR')
   cy.contains('Last Name').next("div").find('[type="text"]').clear().type('LAURIE')
   cy.contains('Cell Number').next("div").find('[type="text"]').clear().type('+1(000)-000-0000')
   cy.contains('Email Address').next("div").find('[type="text"]').clear().type('customer001@gmail.com')

   cy.contains('House').next("div").find('[type="text"]').clear().type('9817 LOOP')
   cy.contains('Street').next("div").find('[type="text"]').clear().type('BLVD')
   cy.contains('Zip Code').next("div").find('[type="text"]').clear().type('935051352')
//    cy.contains('State').next("div").invoke("California").should('eq', 'California')
//    cy.contains('City').next("div").invoke("California City").should('eq','California City')
   cy.contains('County').next("div").find('[type="text"]').type('CA')
   //cy.contains("Personal Details").parent().find("button").contains("Save and Continue").click()
   cy.get("button").contains("Save and Continue").click()
   cy.wait(2000)
   cy.get("button").contains("Save and Continue").click()

   cy.contains('Social Security Number').next("div").find('[type="text"]').type('666455730')
   cy.contains('Home Phone Number').next("div").find('[type="text"]').clear().type('+1(444)-444-4444')
   cy.get('[placeholder="Select Date"]').clear().type("August 1, 1998")
   cy.contains('Education Level').next("div").click()
      cy.contains("4 Yr College/University Grad").click()
    cy.contains('Home Ownership Status').next("div").click()
       cy.contains("Buying Home").click() 
    cy.contains('Months at Address').next("div").find('[type="number"]').clear().type('12')
    cy.contains('Monthly Rent/Mortgage').next("div").find('[type="number"]').clear().type('12')

    cy.contains('Employment Status').next("div").click()
     cy.contains("Military").click()
    cy.contains('Employer Name').next("div").find('[type="text"]').type('KLJAS')
    cy.contains('Employer Phone Number').next("div").find('[type="text"]').type('+1(211)-111-1111')
    cy.contains('Income Interval').next("div").click()
      cy.contains("Bi-Weekly").click()
    cy.contains('Income Amount').next("div").find('[type="number"]').clear().type('2400')
    cy.contains('Employment Title/Position').next("div").find('[type="text"]').type('test')
    cy.contains('Total Months at Employment/Time Retired').next("div").find('[type="number"]').clear().type('12')

    cy.contains('Cash Down Payment Amount').next("div").find('[type="number"]').clear().type('1000')
    cy.contains('Term').next("div").find('[type="number"]').clear().type('24')
    cy.contains('Expected Interest Rate').next("div").find('[type="number"]').clear().type('5')
    cy.get("button").contains("Save and Continue").click()
    cy.wait(3000)

    cy.get("button").contains("Save and Continue").click()
    cy.get("button").contains("Save and Continue").click()
    cy.get("button").contains("Save and Continue").click()
   cy.get("button").contains("Save and Continue").click()

     cy.contains("Successfully created deal jacket").should("exist")
     cy.wait(4000)
   cy.get("button").contains("Check For New Offers").click()
   cy.wait(4000)

   function checkOffers() {

      
      cy.get("button").contains("Check For New Offers").then((btn) => {
         
         if(cy.contains(/approve/gi)) {
            cy.contains(/approve/gi).click();
         } else {
            checkOffers();
         }
         
      })
   }
   checkOffers();
   // cy.contains(/approve/gi).click()
   cy.get("button").contains("Accept This Offer").click()

   cy.get('.sigCanvas').as('signatureBox');

     // Get the center coordinates of the signature box
     cy.get('@signatureBox').then(($box) => {
      const centerX = $box[0].getBoundingClientRect().left + $box[0].getBoundingClientRect().width / 2;
      const centerY = $box[0].getBoundingClientRect().top + $box[0].getBoundingClientRect().height / 2;

      // Simulate drawing "Usama" in the center with text size 10
      cy.get('@signatureBox')
        .trigger('mousedown', centerX, centerY, { which: 1, force: true })
        .trigger('mousemove', centerX, centerY, { force: true })
        .trigger('mouseup', { force: true });
      cy.contains("Customer Signature").parent().find("button").contains("Accept").click()

      cy.get("button").contains("Save and Continue").click()
   })

//4th Try
const fileInputs = [
   { label: 'Proof of Income', file: 'test doc1.pdf' },
   { label: 'Proof of Residence', file: 'test doc2.pdf' },
   { label: 'Proof of Insurance', file: 'test doc3.pdf' },
   { label: 'Drivers License', file: 'test doc4.pdf' },
   { label: 'References', file: 'test doc5.pdf' },
   // Add more labels and corresponding file names as needed
 ];
 // Iterate through each file input
           fileInputs.forEach(({ label, file }, index) => {
// Use a specific attribute, class, or any other unique identifier to select each file input
          cy.get(`input[type="file"]:eq(${index})`).attachFile(file);
 });
 cy.get("button").contains("Save and Continue").click()
 }

