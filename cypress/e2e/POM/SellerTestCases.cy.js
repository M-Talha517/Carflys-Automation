
import { Admin_login, Employee_login, login, logout, signup } from "./Admin/Add data.cy"
import { login2 } from "./Admin/Add data.cy"
import { SellerSignup } from "./Seller SignUp.cy"
import { ViewExpense_Delete_IconButton, ViewExpense_Edit_IconButton, ViewExpense_Search_InValid_VinNo, ViewExpense_Search_VehicleName, ViewExpense_Search_VinNo, ViewExpense_View_IconButton, addExpense_BlankData, addExpense_ExpenseType_DropDown, addExpense_ResetButton, addExpense_ValidData, addExpense_Vehicle_DropDown } from "./Seller/6-Accounting/Expense.cy"
import { ViewRevenue_Delete_IconButton, ViewRevenue_Edit_IconButton, ViewRevenue_Search_VehicleName, ViewRevenue_Search_VinNo, ViewRevenue_View_IconButton, addRevenue_Blank_filed, addRevenue_DropDown_List, addRevenue_ResetButton, addRevenue_Valid_Data } from "./Seller/6-Accounting/Revenue.cy"
import { ViewProfit_Search_InValid_VinNo, ViewProfit_Search_Valid_VinNo } from "./Seller/6-Accounting/ViewProfit.cy"
import { Search_Order_VinNO,Search_Order_InValid_VinNO,Search_Order_VehicleName,Filter_BY_Status, order_View_IconButton, Seller_Order_statusChanges } from "./Seller/4-Order.cy"
import { ClearFilterButton_Payment_, Filters_Payment, Search_Payment_InValid_VinNo, Search_Payment_VehicleName, Search_Payment_VinNo } from "./Seller/5-Payment.cy"
import { Search_Review_FirstName, Search_Review_Ivalid_CustomerName } from "./Seller/8-Review.cy"
import { Dealership_BlankField, Dealership_UpdateData, Password_BlankField, Password_UpdateValid, Password_WrongPassword, Password_didNot_Match, Profile_InValidZip_Code, Profile_Update_BlankField, Profile_Update_ValidData, Profile_ValidZip_Code } from "./Seller/10-Settings.cy"
import { addEmployee_BlankField, addEmployee_DuplicateData, addEmployee_InValid_ZipCode, addEmployee_ResetButton, addEmployee_ValidData, addEmployee_Valid_ZipCode, viewEmployee_Check_AssignButton, viewEmployee_ClearFilterButton, viewEmployee_Delete_IconButton, viewEmployee_Edit_IconButton, viewEmployee_ExistEpmloyee, viewEmployee_Modal_CloseButton, viewEmployee_NotExistEpmloyee, viewEmployee_SearchEmail, viewEmployee_SearchName, viewEmployee_View_IconButton } from "./Seller/2-StaffManagement.cy"
import { SellerLogin, addvehicle1,addvehicle2,addvehicle3, addvehicle4,AddvehicleImage, AddvehiclePdf,Search_InValid_VinNO,Search_Valid_VinNO, viewVehicle_View_IconButton, viewVehicle_Edit_IconButton, viewVehicle_Delete_IconButton, viewVehicle_AddNotes, viewVehicle_DeleteNotes, Search_ClearfilterButton, Seller_Vehicle_StatusChanges_Active, Seller_Vehicle_StatusChanges_Block } from "./Seller/3-Vehicle.cy"
import { Chat_Search_AdminName, Chat_Search_EmployeeName, Chatwith_Admin, Chatwith_Admin_To_Seller, Chatwith_Employee_To_Seller, Chatwith_Seller_To_Admin, Chatwith_Seller_To_Employee } from "./Seller/7-Chats.cy"
import { TotalStaff_Button, stats_accountant, stats_dispatcher, stats_inventorymanager } from "./Seller/Dashboard/1-Total Staff.cy"
import { TotalOrder_Button, stats_AcceptedOffer_order, stats_AwaitingOffer_order, stats_BasicInfoProvided_order, stats_Cancelled_order, stats_Completed_order, stats_CreditApplicationProvided_order, stats_Delivered_order, stats_DeliveryOptionsProvided_order, stats_DirectPaymentPaid_order, stats_DownPaymentPaid_order, stats_FinanceOptionsProvided_order, stats_Processing_order, stats_ReviewedandCompleted_order, stats_ServicesProvided_order, stats_Shipped_order, stats_WarrantyOptionsProvided_order, stats_pending_order } from "./Seller/Dashboard/2-Total Order.cy"
import { TotalVehicle_Button, stats_Active_vehicle, stats_Blocked_vehicle, stats_InDeal_vehicle, stats_Sold_vehicle } from "./Seller/Dashboard/3-Total Vehicles.cy"
import { TotalComplaints_Button, stats_Not_repliedcomplaints, stats_repliedcomplaints } from "./Seller/Dashboard/5-Total Complaints.cy"
import { TotalReviews_Button, stats_NegativeReviews, stats_PositiveReviews } from "./Seller/Dashboard/6-Total Review.cy"
import { TotalAccount_Button, stats_Expenses_Count, stats_Revenue_Count, stats_TotalExpemse_Ammount, stats_TotalExpense_Ammount, stats_TotalProfit, stats_TotalRevenue_Ammount } from "./Seller/Dashboard/7-Total Account.cy"
import { TotalPayments_Button, stats_Pending_payment, stats_Successful_payment } from "./Seller/Dashboard/4-Total Payment.cy"
import { Search_Complaint_FirstName } from "./Seller/9-Complaints.cy"


//////// Test Cases //////////////
                      //  (TC#3.1.1.1.5-TTP) should add and view Vehicle with valid data
describe('Seller', function () {
  describe("1-Dashboard",()=>{
    describe("1.1-Total Staff",()=>{
        it("1.1.1-Verifying Total Staff Functionality(TTP)",()=>{
           cy.visit('/dashboard/stats-details')
           cy.contains("Login").click()
           login2()
          TotalStaff_Button()
        })
        it("1.1.1.1-Verifying Stats of Inventory Managers(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_inventorymanager()
         })
         it("1.1.1.2-Verifying Stats of Accountant(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_accountant()
           
         })
         it("1.1.1.2-Verifying Stats of Dispatchers(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_dispatcher()
         })


   })
   describe("1.2-Total Orders",()=>{
     describe("1.2.1-Verifying Total Orders(TTP)",()=>{
        it("1.1.1.2-Verifying Stats of Orders(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            TotalOrder_Button()
         })

         it("1.2.1.1-Verify stats of Pending Order(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_pending_order()

         })
         it("1.2.1.2-Verify stats of Down-Payment Paid(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_DownPaymentPaid_order()

         })

         it("1.2.1.3-Verify stats of Direct Payment Paid(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_DirectPaymentPaid_order()

         })

         it("1.2.1.4-Verify stats of Shipped(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_Shipped_order()

         })

         it("1.2.1.5-Verify stats of Delivered(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_Delivered_order()

         })
         it("1.2.1.6-Verify stats of Completed(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_Completed_order()

         })

          it("1.2.1.7-Verify stats of Reviewed and Completed(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_ReviewedandCompleted_order()

         })
         it("1.2.1.8-Verify stats of Processing(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_Processing_order()

         })

         it("1.2.1.9-Verify stats of Cancelled(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_Cancelled_order()

         })
         it("1.2.1.10-Verify stats of Basic Info Provided(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_BasicInfoProvided_order()

         })

         it("1.2.1.11-Verify stats of Finance Options Provided(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_FinanceOptionsProvided_order()

         })
         it("1.2.1.12-Verify stats of Credit Application Provided(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_CreditApplicationProvided_order()

         })

         it("1.2.1.13-Verify stats of Delivery Options Provided(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_DeliveryOptionsProvided_order()

         })
         it("1.2.1.14-Verify stats of Warranty Options Provided(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_WarrantyOptionsProvided_order()

         })
         it("1.2.1.15-Verify stats of Services Provided(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_ServicesProvided_order()

         })
         it("1.2.1.16-Verify stats of Awaiting Offer(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_AwaitingOffer_order()

         })
         it("1.2.1.17-Verify stats of Accepted Offer(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_AcceptedOffer_order()

         })
     })
   })

   describe("1.3-Total Vehiles",()=>{
    it("1.3.1-Verifying Total Vehicles(TTP)",()=>{
        cy.visit('/dashboard/stats-details')
        cy.contains("Login").click()
        login2()
        TotalVehicle_Button()
     })

     it("1.3.1.1-Verify status of Active Vehicles(TTP)",()=>{
        cy.visit('/dashboard/stats-details')
        cy.contains("Login").click()
        login2()
        stats_Active_vehicle()

     })

     it("1.3.1.2-Verify status of Block Vehicles(TTP)",()=>{
        cy.visit('/dashboard/stats-details')
        cy.contains("Login").click()
        login2()
        stats_Blocked_vehicle()
     })
     it("1.3.1.3-Verify status of In-Deal Vehicles(TTP)",()=>{
        cy.visit('/dashboard/stats-details')
        cy.contains("Login").click()
        login2()
        stats_InDeal_vehicle()
     })
      it("1.3.1.4-Verify status of Sold Vehicles(TTP)",()=>{
        cy.visit('/dashboard/stats-details')
        cy.contains("Login").click()
        login2()
        stats_Sold_vehicle()
     })
   })
   describe("1.4-Payment",()=>{
    describe("1.4.1-Verifying Total Payments(TTP)",()=>{
        it("1.4.1-Verifying Total Payments(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            TotalPayments_Button()
         })
         it("1.4.1.1-Verify Stats Of Pending Status(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_Pending_payment()
        })
         it("1.4.1.2-Verify stats of Success Status(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_Successful_payment()
         })
    })
   })
   describe("1.5-Total Complaint",()=>{
      describe("1.5.1-Verifying Total Complaints(TTP)",()=>{
        it("1.5.1-Verifying Total Complaints(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()  
            login2()
            TotalComplaints_Button()
         })
          it("1.5.1.1-Verify Stats of Replied status(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()  
            login2()
            stats_repliedcomplaints()
         })
         it("1.5.1.2-Verify Status of Non-Replied Status(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()  
            login2()
            stats_Not_repliedcomplaints()
         })


      })
   })
   describe("1.6-Reviews",()=>{
       describe("1.6.1-Verifying Total Reviews(TTP)",()=>{
        it("1.6.1-VerifyingTotal Reviews(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            TotalReviews_Button()
         })
         it("1.6.1.1-Verify Stats of Negative Reviews(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_NegativeReviews()
         })
         it("1.6.1.2-Verify Stats of Positive Reviews(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()
            login2()
            stats_PositiveReviews()
         })
       })
   })
   describe("1.7-Total Accounts",()=>{
     describe("1.7.1-Verifying Total Accounts(TTP)",()=>{
        it("1.7.1-Verifying Total Accounts(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()  
            login2()
            TotalAccount_Button()
         })
         it("1.7.1.1-Verify Stat of Expense Count(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()  
            login2()
            stats_Expenses_Count()
         })
         it("1.7.1.2-Verify Stat of Revenue Count(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()  
            login2()
            stats_Revenue_Count()
         })
         it("1.7.1.3-Verify Stat of Total Expense Amount(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()  
            login2()
            stats_TotalExpense_Ammount()
         })

         it("1.7.1.4-Verify Stat of Total Revenue Amount(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()  
            login2()
            stats_TotalRevenue_Ammount()
         })

         it("1.7.1.5-Verify Stat of Total Profit(TTP)",()=>{
            cy.visit('/dashboard/stats-details')
            cy.contains("Login").click()  
            login2()
            stats_TotalProfit()
         })
     })
   })
  })
//        describe("2-Staff Management",function(){
//           describe("2.1-Add Employee", function(){
//             it("2.1.1-Add Employee with blank field(TTF)", ()=>{
//                 cy.visit('/dashboard/add-employee')
//                 cy.contains("Login").click()
//                 login2()
//                 addEmployee_BlankField()
//             })
//             it("2.1.2-Zip Code filed With Valid Zip Code(TTP)", ()=>{
//                 cy.visit('/dashboard/add-employee')
//                 cy.contains("Login").click()
//                 login2()
//                 addEmployee_Valid_ZipCode()
//             })
//             it("2.1.3-Zip Code filed With InValid Zip Code(TTP)", ()=>{
//                 cy.visit('/dashboard/add-employee')
//                 cy.contains("Login").click()
//                 login2()
//                 addEmployee_InValid_ZipCode()
//             })
//             it("2.1.4- Add Employee with Valid Data(TTP)", ()=>{
//                 cy.visit('/dashboard/add-employee')
//                 cy.contains("Login").click()
//                 login2()
//                 addEmployee_ValidData()
//             })
//             it("2.1.5-Add Emplyee with duplicate data(TTF)", ()=>{
//                 cy.visit('/dashboard/add-employee')
//                 cy.contains("Login").click()
//                 login2()
//                 addEmployee_DuplicateData()
//             })
//             it("2.1.6- Reset Button Functionality Test(TTP)", ()=>{
//                 cy.visit('/dashboard/add-employee')
//                 cy.contains("Login").click()
//                 login2()
//                 addEmployee_ResetButton() 
//             })
//         })
//         describe("2.2-View Employee", function(){
//           describe("Search", function(){
//              it("2.2.2.1- Search Bar Functionality Check with full name", ()=>{
//                 cy.visit('/dashboard/view-employees')
//                 cy.contains("Login").click()
//                 login2()
//                 viewEmployee_SearchName()

//              })
//              it("2.2.2.2- Search Bar Functionality Check with Email", ()=>{
//                 cy.visit('/dashboard/view-employees')
//                 cy.contains("Login").click()
//                 login2()
//                 viewEmployee_SearchEmail()
//              })
//              it("2.2.3.1-Clear filter button functionality check(TTP)", ()=>{
//                 cy.visit('/dashboard/view-employees')
//                 cy.contains("Login").click()
//                 login2()
//                 viewEmployee_ClearFilterButton()
//              })
//              it("2.2.4.1-Exists employee by Searching and filter by User type or Status(TTP)", ()=>{
//                 cy.visit('/dashboard/view-employees')
//                 cy.contains("Login").click()
//                 login2()
//                 viewEmployee_ExistEpmloyee()
//              })
//              it("2.2.4.2-Not Exists employee by Searching and filter by User type or Status(TTF)", ()=>{
//                 cy.visit('/dashboard/view-employees')
//                 cy.contains("Login").click()
//                 login2()
//                 viewEmployee_NotExistEpmloyee()
//              })
           
           
//           })
//           describe("2.2.1-Table List View", function (){
//             it("2.2.1.1-Close Button On View Modal functionality check(TTP)", ()=>{
//                 cy.visit('/dashboard/view-employees')
//                 cy.contains("Login").click()
//                 login2()
//                 viewEmployee_Modal_CloseButton()
//              })
//             it("2.2.1.2-View icon Action functionality check(TTP)", ()=>{
//                 cy.visit('/dashboard/view-employees')
//                 cy.contains("Login").click()
//                 login2()
//                 viewEmployee_View_IconButton()
//              })
//              it("2.2.1.3-Edit icon Action functionality check(TTP)", ()=>{
//                 cy.visit('/dashboard/view-employees')
//                 cy.contains("Login").click()
//                 login2()
//                 viewEmployee_Edit_IconButton()
//              })
//              it("2.2.1.5-Delete icon Action functionality check(TTP)", ()=>{
//                 cy.visit('/dashboard/view-employees')
//                 cy.contains("Login").click()
//                 login2()
//                 viewEmployee_Delete_IconButton()
//              })
//              it("2.2.1.5-Manage Employee Access  functionality(TTP)", ()=>{
//                 cy.visit('/dashboard/view-employees')
//                 cy.contains("Login").click()
//                 login2()
//                 viewEmployee_Check_AssignButton()
//              })
          
//           })
//         })
//     })
//        describe("3-Vhecile", function (){
//         describe("3.1-Add Vehicle",function (){
//             describe("3.1.1-Steppers Add Vehicles",function (){
//                 describe("3.1.1.1-Vehicle Info Form",function(){
//                     it("3.1.1.1.1-Add Vehicle with Blank Field (TTF)", ()=>{
//                         cy.visit('/dashboard/add-vehicle')
//                         cy.contains("Login").click()
//                         login2()
//                         addvehicle2()
//                     })
                    
//                     it("3.1.1.1.2-Add Vehicle with InValid No (TTF)", ()=>{
//                         cy.visit('/dashboard/add-vehicle')
//                         cy.contains("Login").click()
//                         login2()
//                         addvehicle3()
//                     })
//                     it("3.1.1.1.3-Vin  No text field lenght (TTF)", ()=>{
//                         cy.visit('/dashboard/add-vehicle')
//                         cy.contains("Login").click()
//                         login2()
//                         addvehicle4()
//                     })
//                     it("3.1.1.1.4-Add Vehicle form with Valid Data (TTP)", ()=>{
//                     cy.visit('/dashboard/add-vehicle')
//                     cy.contains("Login").click()
//                     login2()
//                     SellerLogin()
//                  })
//                    it("3.1.1.1.5-Add Vehicle with Already Exist (TTF)", ()=>{
//                     cy.visit('/dashboard/add-vehicle')
//                     cy.contains("Login").click()
//                     login2()
//                     addvehicle1()
//                 })
//               describe("3.1.1.3-Images and Model",function() {
//             describe("3.1.1.3.1-Files Drag and Drop",function (){
//                 it("3.1.1.3.1.1-Images Drag and drop functionality check (TTP)", ()=>{
//                     cy.visit('/dashboard/add-vehicle')
//                     cy.contains("Login").click()
//                     login2()
//                     AddvehicleImage()
//                 })
//                 it("3.1.1.3.1.2-Pdf file drag and Drop functionality check (TTF)", ()=>{
//                     cy.visit('/dashboard/add-vehicle')
//                     cy.contains("Login").click()
//                     login2()
//                     AddvehiclePdf()
//                 })
            
//             })
//         })
        
//     })
// }) 
//  })
//         describe("3.2-View Vehicle", function (){
//     describe("3.2.1- Table List View",()=>{
//          describe("3.2.1.2-Status ",()=>{
//             it("3.2.1.2.1-Active status check functionality(TTP)", ()=>{
//                 cy.visit('/dashboard/view-vehicles')
//                 cy.contains("Login").click()
//                 login2()
//                 Seller_Vehicle_StatusChanges_Active()
//             })
//             it("3.2.1.2.2-Block status check functionality(TTP)", ()=>{
//                 cy.visit('/dashboard/view-vehicles')
//                 cy.contains("Login").click()
//                 login2()
//                 Seller_Vehicle_StatusChanges_Block()
//             })
//          })
//          describe("3.2.1.3-Actions Column icons buttons",function(){
//             it("3.2.1.3.1-View icon functionality check(TTP)", ()=>{
//                 cy.visit('/dashboard/view-vehicles')
//                 cy.contains("Login").click()
//                 login2()
//                 viewVehicle_View_IconButton()
//             })
//             it("3.2.1.3.2-Edit icon button functionality check(TTP)", ()=>{
//                 cy.visit('/dashboard/view-vehicles')
//                 cy.contains("Login").click()
//                 login2()
//                 viewVehicle_Edit_IconButton()
//             })
//             it.skip("3.2.1.3.3-Delete icon button functionality check", ()=>{
//                 cy.visit('/dashboard/view-vehicles')
//                 cy.contains("Login").click()
//                 login2()
//                 viewVehicle_Delete_IconButton()
//             })
//           describe("3.2.1.3.1.4-Vehicle Notes",function(){
//             it("3.2.1.3.1.4.1-Add note button fuctionality(TTP)", ()=>{
//                 cy.visit('/dashboard/view-vehicles')
//                 cy.contains("Login").click()
//                 login2()
//                 viewVehicle_AddNotes() 
//             })
//             it.skip("3.2.1.3.1.4.2-Delete icon button fuctionality(TTP)", ()=>{
//                 cy.visit('/dashboard/view-vehicles')
//                 cy.contains("Login").click()
//                 login2()
//                 viewVehicle_DeleteNotes()
            
//             }) ////// Pending note table view
//             })
//         })
//     })
//     describe("3.2.2- Search",function(){
//         it("3.2.2.1-Serching with Vehicle Vin No (TTP)", ()=>{
//             cy.visit('/dashboard/view-vehicles')
//             cy.contains("Login").click()
//             login2()
//             Search_Valid_VinNO()
//         })
//         it("3.2.2.2-Serching with Vehicle InValid Vin No (TTP)", ()=>{
//             cy.visit('/dashboard/view-vehicles')
//             cy.contains("Login").click()
//             login2()
//             Search_InValid_VinNO()
//         })
//         it("3.2.4.1-Clear filter button functionality check", ()=>{
//             cy.visit('/dashboard/view-vehicles')
//             cy.contains("Login").click()
//             login2()
//             Search_ClearfilterButton()
//         })

//     })
// })
//     })
//        describe("4-Order", function (){
      
//         describe("4.1-Order table list view",function(){
//          it("4.1.1-View Icon button check Functionality(TTP)",()=>{
//             cy.visit('/dashboard/orders')
//             cy.contains("Login").click()
//             login2()
//             order_View_IconButton()
//          })
//          it("4.1.2-Status functionality check(TTP)",()=>{
//             cy.visit('/dashboard/orders')
//             cy.contains("Login").click()
//             login2()
//             Seller_Order_statusChanges()
//          })
       
//       })
//     describe("4.2-Search", function (){
//         it("4.2.1-Serching with Vehicle Vin No(TTP)", ()=>{
//             cy.visit('/dashboard/orders')
//             cy.contains("Login").click()
//             login2()
//             Search_Order_VinNO()
//         })
//         it("4.2.2-Serching with Vehicle Name(TTP)", ()=>{
//             cy.visit('/dashboard/orders')
//             cy.contains("Login").click()
//             login2()
//             Search_Order_VehicleName()
//         })
//         it("4.2.3-Serching with Vehicle InValid Vin NO(TTP)", ()=>{
//             cy.visit('/dashboard/orders')
//             cy.contains("Login").click()
//             login2()
//             Search_Order_InValid_VinNO()
//         })
//     })
//     describe("4.3-filter", function(){

//         it("4.3.1-filters by status fuctionality check(TTP)", ()=>{
//             cy.visit('/dashboard/orders')
//             cy.contains("Login").click()
//             login2()
//             Filter_BY_Status()
//         })  
//     })

//    })
//         describe("5-Payments", function (){

//             describe("5.1-Search", function(){
//         it("5.1.1-Search With Vin No (TTP)", ()=>{
//             cy.visit('/dashboard/payments')
//             cy.contains("Login").click()
//             login2()
//             Search_Payment_VinNo()
           
//         })
//         it("5.1.2-Search with Vehicle name (TTP)", ()=>{
//             cy.visit('/dashboard/payments')
//             cy.contains("Login").click()
//             login2()
//             Search_Payment_VehicleName()
//         })
//         it("5.1.3-Search With InVakid Vin No (TTP)", ()=>{
//             cy.visit('/dashboard/payments')
//             cy.contains("Login").click()
//             login2()
//             Search_Payment_InValid_VinNo()
//         })

//     })
//              describe("5.2-Filters", function(){
//         it("5.2.1-Filter by status(TTP)", ()=>{
//             cy.visit('/dashboard/payments')
//             cy.contains("Login").click()
//             login2()
//             Filters_Payment()
//         })
    
//     })
//     it(" 5.3-Clear Filter button (TTP)", ()=>{
//         cy.visit('/dashboard/payments')
//         cy.contains("Login").click()
//         login2()
//         ClearFilterButton_Payment_()
//     })
   
//    })
//        describe("6-Accounting", function(){
//            describe("Revenue",function(){
//         describe("6.1-Add Revenue",function(){
//             it("6.1.1-Add Button with Blank Field (TTF)", ()=>{
//                 cy.visit('/dashboard/add-revenue')
//                 cy.contains("Login").click()
//                 login2()
//                 addRevenue_Blank_filed()
//             })
//             it("6.1.2-Add Vehicle Drop down List (TTP)", ()=>{
//                 cy.visit('/dashboard/add-revenue')
//                 cy.contains("Login").click()
//                 login2()
//                 addRevenue_DropDown_List()
//             })
//             it("6.1.3-Add Revenue with Valid Data(TTP)", ()=>{
//                 cy.visit('/dashboard/add-revenue')
//                 cy.contains("Login").click()
//                 login2()
//                 addRevenue_Valid_Data()
    
//             })
//             it("6.1.4-Reset Button (TTP)", ()=>{
//                 cy.visit('/dashboard/add-revenue')
//                 cy.contains("Login").click()
//                 login2()
//                 addRevenue_ResetButton()
//             })
//           })
//         describe("6.2-View Revenue",function(){
//             describe("6.2.1-Search", function (){
//                 it(" 6.2.1.1-Search With Vin No (TTP)", ()=>{
//                     cy.visit('/dashboard/view-revenue')
//                     cy.contains("Login").click()
//                     login2()
//                     ViewRevenue_Search_VinNo()
//                 })
//                 it(" 6.2.1.2-Search With Vehicle Name (TTP)", ()=>{
//                     cy.visit('/dashboard/view-revenue')
//                     cy.contains("Login").click()
//                     login2()
//                     ViewRevenue_Search_VehicleName()
//                 })
//             describe("6.2.3-Table list view",function(){
//                     it("6.2.3.1-View Icon button (TTP)", ()=>{
//                         cy.visit('/dashboard/view-revenue')
//                         cy.contains("Login").click()
//                         login2()
//                         ViewRevenue_View_IconButton()
//                     })
//                     it("6.2.3.2-Edit Icon button (TTP)", ()=>{
//                         cy.visit('/dashboard/view-revenue')
//                         cy.contains("Login").click()
//                         login2()
//                         ViewRevenue_Edit_IconButton()
//                     })
//                     it("6.2.3.3-Delete Icon button (TTP)", ()=>{
//                         cy.visit('/dashboard/view-revenue')
//                         cy.contains("Login").click()
//                         login2()
//                         ViewRevenue_Delete_IconButton()
//                     })

//                 })
//             })
    
//           })

//     })
//            describe("Expense",function(){
//         describe("6.3-Add Expense",function(){
//             it("6.3.1-Add Expense With Blank Field (TTF)", ()=>{
//                 cy.visit('/dashboard/add-expense')
//                 cy.contains("Login").click()
//                 login2()
//                 addExpense_BlankData()
//             })
//             it("6.3.2-Add Vehicle Drop down List (TTP)", ()=>{
//                 cy.visit('/dashboard/add-expense')
//                 cy.contains("Login").click()
//                 login2()
//                 addExpense_Vehicle_DropDown()
//             })
//             it("6.3.3-Add Expense type Drop down List (TTP)", ()=>{
//                 cy.visit('/dashboard/add-expense')
//                 cy.contains("Login").click()
//                 login2()
//                 addExpense_ExpenseType_DropDown()
//             })
//             it("6.3.4-Add Expense with Valid Data(TTP)", ()=>{
//                 cy.visit('/dashboard/add-expense')
//                 cy.contains("Login").click()
//                 login2()
//                 addExpense_ValidData()
//             })
//             it("6.3.5-Reset Button (TTP)", ()=>{
//                 cy.visit('/dashboard/add-expense')
//                 cy.contains("Login").click()
//                 login2()
//                 addExpense_ResetButton()
//             })
        

//           })
//         describe("6.4-View Expense", function(){
//             describe("6.4.1-Search", function (){
//                 it("6.4.1.1-Search With Vin No (TTP)", ()=>{
//                     cy.visit('/dashboard/view-expense')
//                     cy.contains("Login").click()
//                     login2()
//                     ViewExpense_Search_VinNo()
//                 })
//                 it("6.4.1.2-Search With Vehicle Name (TTP)", ()=>{
//                     cy.visit('/dashboard/view-expense')
//                     cy.contains("Login").click()
//                     login2()
//                     ViewExpense_Search_VehicleName()
//                 })
//                 it("6.4.1.3-Search with Inavalid Vin No or Vehicle name (TTF)", ()=>{
//                     cy.visit('/dashboard/view-expense')
//                     cy.contains("Login").click()
//                     login2()
//                     ViewExpense_Search_InValid_VinNo()
//                 })
//                 describe("6.4.3-Table list view",function(){
//                     it("6.4.3.1-View Icon button (TTP)", ()=>{
//                         cy.visit('/dashboard/view-expense')
//                         cy.contains("Login").click()
//                         login2()
//                         ViewExpense_View_IconButton()
//                     })
//                     it("6.4.3.2-Edit Icon button (TTP)", ()=>{
//                         cy.visit('/dashboard/view-expense')
//                         cy.contains("Login").click()
//                         login2()
//                         ViewExpense_Edit_IconButton()
                       
//                     })
//                     it("6.4.3.3-Delete Icon button (TTP)", ()=>{
//                         cy.visit('/dashboard/view-expense')
//                         cy.contains("Login").click()
//                         login2()
//                         ViewExpense_Delete_IconButton()
//                     })
//                 })
//          })
//         })
//     })
//            describe("6-View Profit Report",function(){
//         describe("6.5.1-Search", function (){
//             it("6.5.1.1-Serching with Vin No(TTP)", ()=>{
//                 cy.visit('/dashboard/profit-report')
//                 cy.contains("Login").click()
//                 login2()
//                 ViewProfit_Search_Valid_VinNo()
//             })
//             it("6.5.1.2-Searching with Invalid Vin no (TTF)", ()=>{
//                 cy.visit('/dashboard/profit-report')
//                 cy.contains("Login").click()
//                 login2()
//                 ViewProfit_Search_InValid_VinNo()
//             })
//      })
//     })

//    })
//        describe("7-Chats", function(){
//             describe("7.1-Seller search-Bar",function(){
//               it("7.1.1-Seller can Search Admin in Search-Baar(TTP)", ()=>{
//                 cy.visit('/dashboard/chat')
//                 cy.contains("Login").click()
//                 login2()
//                 Chat_Search_AdminName()
//               })
//               it("7.1.1-Seller can Search Employees in Search-Baar(TTP)", ()=>{
//                 cy.visit('/dashboard/chat')
//                 cy.contains("Login").click()
//                 login2()
//                 Chat_Search_EmployeeName()
//               })
//             })
//              describe("7.2-Seller Chat",function(){
//                 it("7.2.1-Seller Chat with Admin functionality(TTP)", ()=>{
//                   cy.visit('/dashboard/chat')
//                   cy.contains("Login").click()
//                   login2()
//                   Chatwith_Seller_To_Admin()
//                   logout()
//                   Admin_login()
//                   Chatwith_Admin_To_Seller()
//                   logout()
//                 })
//                 it("7.2.2-Seller Chat with his Employees Functionality(TTP)", ()=>{
//                   cy.visit('/dashboard/chat')
//                   cy.contains("Login").click()
//                   login2()
//                   Chatwith_Seller_To_Employee()
//                   logout()
//                   Employee_login()
//                   Chatwith_Employee_To_Seller()
//                   logout()

//                 })

//                  // it("7.3-Users gets notified for a new chat functionality Check(TTP)", ()=>{
//                 //   cy.visit('/dashboard/chat')
//                 //   cy.contains("Login").click()
//                 //   login2()
//                 //   Chat_Search_EmployeeName()
//                 // })

//                })
//    })
//         describe("8.Reviews",function(){
//        describe("8.1-Search ",function(){
//         it("8.1.1-Search with First Name (TTP)", ()=>{
//             cy.visit('/dashboard/reviews')
//             cy.contains("Login").click()
//             login2()
//             Search_Review_FirstName()
//         })

//         it("8.1.2-Search with Invalid Customer Name (TTP)", ()=>{
//             cy.visit('/dashboard/reviews')
//             cy.contains("Login").click()
//             login2()
//             Search_Review_Ivalid_CustomerName()

//         })
//        })
// })
//         describe("9.Complaints",function(){
//            describe("9.1-Search ",function(){
//                 it("9.1.1-Search with First Name (TTP)", ()=>{
//          cy.visit('/dashboard/complaints')
//          cy.contains("Login").click()
//          login2()
//          Search_Complaint_FirstName()
//      })
//     //              it("9.1.2-Search with Complaint Tiltle(TTP)", ()=>{
//     //      cy.visit('/dashboard/complaints')
//     //      cy.contains("Login").click()
//     //      login2()   
//     //      Search_Complaint_ComplaintTitle()
//     //  })
//     })
// })
//         describe("10.Settings", function(){
//     describe("10.1-Profile", function(){
//   it("10.1.1-Update button with Blank field (TTF)", ()=>{
//       cy.visit('/dashboard/settings')
//       cy.contains("Login").click()
//       login2()
//       Profile_Update_BlankField()
//   })
//   it("10.1.2-Update Valid Data (TTP) ", ()=>{
//       cy.visit('/dashboard/settings')
//       cy.contains("Login").click()
//       login2()
//       Profile_Update_ValidData()
//   })
//   it("10.1.3-Enter Valid Zip Code (TTP)", ()=>{
//       cy.visit('/dashboard/settings')
//       cy.contains("Login").click()
//       login2()
//       Profile_ValidZip_Code()

//   })
//    it("10.1.4-Enter Invalid Zip Code (TTF)", ()=>{
//       cy.visit('/dashboard/settings')
//       cy.contains("Login").click()
//       login2()
//       Profile_InValidZip_Code()
//   })
//    })
//     describe("10.2-Password", function(){
//       it("10.2.1-Update Button With Blank  (TTF)", ()=>{
//           cy.visit('/dashboard/settings')
//           cy.contains("Login").click()
//           login2()
//           Password_BlankField()
          
//       })
//       it("10.2.2-Enter wrong passwod in Old Password text Field (TTF)", ()=>{
//           cy.visit('/dashboard/settings')
//           cy.contains("Login").click()
//           login2()
//           Password_WrongPassword()
          
//       })
//       it("10.2.3-Enter did not match password in text field(TTF)", ()=>{
//           cy.visit('/dashboard/settings')
//           cy.contains("Login").click()
//           login2()
//           Password_didNot_Match()
//       })
//       it.skip("10.2.4-Enter Valid Password (TTP)", ()=>{
//           cy.visit('/dashboard/settings')
//           cy.contains("Login").click()
//           login2()
//           Password_UpdateValid()

//       })
//     }) 
//     describe("10.3-Dealership", function(){
//       it("10.3.1-Update button with Blank field data (TTF)", ()=>{
//           cy.visit('/dashboard/settings')
//           cy.contains("Login").click()
//           login2()
//           Dealership_BlankField()
//       })
//       it("10.3.2-Update button with Valid data (TTP)", ()=>{
//           cy.visit('/dashboard/settings')
//           cy.contains("Login").click()
//           login2()
//           Dealership_UpdateData()
//       })
//     })
// })
})