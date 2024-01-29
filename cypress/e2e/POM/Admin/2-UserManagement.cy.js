import { backendURL } from "../Seller/extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const addUser_NoData = () => {

    cy.contains('2. User Management').click()
    cy.contains('2.1 Add Users').click()

    cy.get('[type="submit"]').click()
    cy.contains("Please Select User Type").should("exist")
    cy.contains("Enter 3 or more letters for First Name").should("exist")
    cy.contains("Enter 3 or more letters for Last Name").should("exist")
    cy.contains("Enter email").should("exist")
    cy.contains("Password must at least have 8 characters with special characters, numbers, uppercase and lowercase letters").should("exist")
    cy.contains("Confirm Password is required").should("exist")
    cy.contains("Enter Cell Number e.g +1 123 456 7890").should("exist")
    cy.contains("Enter Valid Zip Code").should("exist")
    cy.contains("Please Select a State").should("exist")
}
export const addUser_ValidData = () => {
    cy.intercept('POST', `${backendURL}/user`).as('postUser')
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. User Management').click()
    cy.contains('2.1 Add Users').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Seller").click()
    // cy.get('[placeholder="Select Dealership"]').type('Test Dealership', { force: true } )
    // cy.contains("Test Dealership").click()
    cy.get('[placeholder="Enter First Name"]').type('Osama')
    cy.get('[placeholder="Enter Last Name"]').type('Abbasi')
    cy.get('[placeholder="Enter Email"]').type('osama@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Select State Location"]').type('Washington', { force: true })
    cy.contains('Washington').click()
    cy.get('[placeholder="Enter Zip Code"]').type('10001')
    cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('usama.jpg', { subjectType: 'drag-n-drop' })
    cy.get('[type="submit"]').click()
     
    ////////// View Users ///////
    cy.wait(10 * second)
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Filter by User Type"]').click()
    cy.contains("Seller").click()
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("osama@gmail.com")
    cy.wait("@postUser").its('response.statusCode').should('eq', 201);
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}

export const addUser_DuplicateData = () => {
    cy.intercept('POST', `${backendURL}/user`).as('A user with this email already exists.')
    cy.contains('2. User Management').click()
    cy.contains('2.1 Add Users').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Seller").click()
    // cy.get('[placeholder="Select Dealership"]').type('Test Dealership', { force: true } )
    // cy.contains("Test Dealership").click()
    cy.get('[placeholder="Enter First Name"]').type('Shah')
    cy.get('[placeholder="Enter Last Name"]').type('Rukh')
    cy.get('[placeholder="Enter Email"]').type('shah@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Select State Location"]').type('Washington', { force: true })
    cy.contains('Washington').click()
    cy.get('[placeholder="Enter Zip Code"]').type('10001')
    cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('usama.jpg', { subjectType: 'drag-n-drop' })
    cy.get('[type="submit"]').click()
    cy.wait(4000)
    cy.wait("@A user with this email already exists.").its('response.statusCode').should('eq', 400);
    
}

export const addUser_ResetButton = () => {
    
    cy.contains('2. User Management').click()
    cy.contains('2.1 Add Users').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Enter First Name"]').type('Osama')
    cy.get('[placeholder="Enter Last Name"]').type('Abbasi')
    cy.get('[placeholder="Enter Email"]').type('osama@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(344)-444-4444')
    cy.get('[placeholder="Enter Zip Code"]').type('10001')
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', 'New York')
    cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('usama.jpg', { subjectType: 'drag-n-drop' })
    cy.contains("Reset").click()

    cy.get('[placeholder="Enter First Name"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Last Name"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Email"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Password"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Confirm Password"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Cell Number"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Zip Code"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', '')
    cy.get(".mantine-1avyp1d").contains("Drop the file here ...").invoke('val').should('eq', '')
}

export const addUser_InValid_ZipCode = () => {

    cy.contains('2. User Management').click()
    cy.contains('2.1 Add Users').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Enter First Name"]').type('Osama')
    cy.get('[placeholder="Enter Last Name"]').type('Abbasi')
    cy.get('[placeholder="Enter Email"]').type('osama@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Enter Zip Code"]').type('46000')
    cy.contains('Invalid zip code. Please enter a valid zip code').should("exist")
}
export const addUser_Valid_ZipCode = () => {

    cy.contains('2. User Management').click()
    cy.contains('2.1 Add Users').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Enter First Name"]').type('Osama')
    cy.get('[placeholder="Enter Last Name"]').type('Abbasi')
    cy.get('[placeholder="Enter Email"]').type('osama@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Enter Zip Code"]').type('10001')
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', 'New York')
}
export const viewuser_filters =()=>{
    cy.contains('2. User Management').click()
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Filter by User Type"]').click()
    cy.contains("Seller").click()
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("osama@gmail.com")
    cy.contains("osama@gmail.com").should("exist")
}


export const viewuser_SearchName =()=>{
    cy.contains('2. User Management').click()
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Search"]').type("Shah Rukh")
    cy.contains("Shah Rukh").should("exist")
}
export const viewuser_SearchEmail =()=>{
    cy.contains('2. User Management').click()
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Search"]').type("osama@gmail.com")
    cy.contains("osama@gmail.com").should("exist")
}
export const viewuser_SearchDealership =()=>{
    cy.contains('2. User Management').click()
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Search"]').type("Auto Mart")
    cy.contains("Auto Mart").should("exist")
}
export const viewuser_ClearFilterButton= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. User Management').click()
    cy.contains('2.2 View Users').click()
    cy.wait(1000)
    cy.get('[placeholder="Filter by User Type"]').click()
    cy.contains("Dispatcher").click()
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("Shah Rukh")
    cy.contains("Shah Rukh").should("exist")
    cy.get("button").contains("Clear Filters").click()
   
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}

export const viewuser_Modal_CloseButton= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. User Management').click()
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Filter by User Type"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("shah@gmail.com")
    cy.contains('shah@gmail.com').should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View user").should("exist")
    cy.contains("Shah Rukh").should("exist")
    cy.get("button").contains("Close").click()
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}
export const viewuser_View_IconButton= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. User Management').click()
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Filter by User Type"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("shah@gmail.com")
    cy.contains('shah@gmail.com').should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click()
    cy.contains("View user").should("exist")
    cy.contains("Shah Rukh").should("exist")
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}

export const viewuser_Edit_IconButton= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. User Management').click()
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Filter by User Type"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("shah@gmail.com")
    cy.contains('shah@gmail.com').should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
    cy.contains("Update User").should("exist")
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}
export const viewuser_Reset_Button= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. User Management').click()
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Filter by User Type"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("shah@gmail.com")
    cy.contains('shah@gmail.com').should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()
  
    cy.get('[placeholder="Enter First Name"]').clear().type('abc')
    cy.get('[placeholder="Enter Last Name"]').clear().type('xyz')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').clear().type('+1(999)-999-9999')
    cy.get('[placeholder="Enter Zip Code"]').clear().type('10002')

    cy.contains("Reset").click()

    cy.get('[placeholder="Enter First Name"]').invoke('val').should('eq', 'Shah')
    cy.get('[placeholder="Enter Last Name"]').invoke('val').should('eq', 'Rukh')
   // cy.get('[placeholder="Enter Email"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Password"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Confirm Password"]').invoke('val').should('eq', '')
    cy.get('[placeholder="Enter Cell Number"]').invoke('val').should('eq', '+1(333)-333-3333')
    cy.get('[placeholder="Enter Zip Code"]').invoke('val').should('eq', '10001')
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', 'New York')
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
}
export const viewuser_Delete_IconButton= () => {
    cy.intercept('POST', `${backendURL}/user`).as('postUser')
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.intercept('DELETE', `${backendURL}/user/*`).as('User Deleted')

    cy.contains('2. User Management').click()
    cy.contains('2.1 Add Users').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Dispatcher").click()

    cy.get('[placeholder="Select Dealership"]').click()
       cy.contains("Auto Mart").click()
    cy.get('[placeholder="Enter First Name"]').type('Abc')
    cy.get('[placeholder="Enter Last Name"]').type('Xyz')
    cy.get('[placeholder="Enter Email"]').type('user1@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Enter Zip Code"]').type('10001')
    cy.get('[placeholder="Select State Location"]').invoke('val').should('eq', 'New York')
    cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('usama.jpg', { subjectType: 'drag-n-drop' })
    cy.get('[type="submit"]').click()
  
/////// view table
    cy.wait(4000)
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Filter by User Type"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("user1@gmail.com")
    cy.contains('user1@gmail.com').should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-trash").click()
    cy.contains("Delete User").should("exist")
    cy.get("button").contains("Delete").click()
    cy.contains("User Deleted Successfully").should("exist")
      //// intercept
    cy.wait("@postUser").its('response.statusCode').should('eq', 201);
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200);
    cy.wait("@User Deleted").its('response.statusCode').should('eq', 200);

}

export const viewuser_Check_AssignButton= () => {
    cy.intercept('GET', `${backendURL}/user`).as('User found Successfully')
    cy.contains('2. User Management').click()
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Filter by User Type"]').click()
    cy.contains("Dispatcher").click()                   
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.get('[placeholder="Search"]').type("shah@gmail.com")
    cy.contains('shah@gmail.com').should("exist")
    cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-checks").click()
    cy.contains("Manage Employee Access").should("exist")
    cy.get("button").contains("Update Rights").click()
    cy.contains('Rights Updated Successfully').should("exist")
    cy.wait("@User found Successfully").its('response.statusCode').should('eq', 200)
}
export const Viewuser_StatusChanges =() =>{
    cy.contains('2. User Management').click()
    cy.contains("2.2 View Users").click()
// search field
    cy.get('[placeholder="Search"]').type("Abdullah Kahn")
// Filters by user Type
    cy.get('[placeholder="Filter by User Type"]').click()
       cy.contains("Customer")
// // Filters By user Status
//    cy.get('[placeholder="Filter by Status"]').click()
//       cy.contains("Active").click()
//cy.contains("testsell").should("exist")
cy.get(".rdt_TableBody").find("div").first().find('[aria-haspopup="menu"]').click()
cy.contains("Unblock").click()

}
export const  viewuser_AddUser_Button=()=>{
    cy.contains('2. User Management').click()
    cy.contains("2.2 View Users").click()

    cy.get(".mantine-Grid-col").get("button").contains("Add User").click()
    cy.contains("Fill in the data to add User").should("exist")
}















