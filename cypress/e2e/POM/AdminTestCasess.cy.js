
import { Admin_Filters_Payment, Admin_Search_Payment_InValid_VinNo, Admin_Search_Payment_VehicleName, Admin_Search_Payment_VinNo, Admin__Payment_ClearFilterButton } from "./Admin/10-Payments.cy.js"
import { admin_ViewExpense_Delete_IconButton, admin_ViewExpense_Edit_IconButton, admin_ViewExpense_Edit_ResetButton, admin_ViewExpense_Search_ExpenseType, admin_ViewExpense_View_IconButton, admin_ViewExpense_View_ModalCloseButton, admin_ViewExpense_viewscreen_AddButton, admin_addExpense_BlankData, admin_addExpense_ResetButton, admin_addExpense_ValidData } from "./Admin/11-Accounting/Expense.cy.js"
import { admin_ViewRevenue_Delete_IconButton, admin_ViewRevenue_Edit_IconButton, admin_ViewRevenue_Edit_ResetButton, admin_ViewRevenue_ModalCloseButton, admin_ViewRevenue_Search_VehicleName, admin_ViewRevenue_Search_VinNo, admin_ViewRevenue_View_IconButton, admin_addRevenue_Blank_filed, admin_addRevenue_DropDown_List, admin_addRevenue_ResetButton, admin_addRevenue_Valid_Data } from "./Admin/11-Accounting/Revenue.cy.js"
import { admin_ViewProfit_Search_InValid_VinNo, admin_ViewProfit_Search_Valid_VinNo } from "./Admin/11-Accounting/ViewProfit.cy.js"
import { Admin_Chat_Search_UserName, Admin_Chatwith_Seller_To_Admin, Chatwith_Admin_To_Seller, Chatwith_Admin_To_Seller_DocumentSending, Chatwith_Admin_To_Seller_ImageSending, Chatwith_Admin_To_Seller_VideoSending } from "./Admin/12-Chat.cy.js"
import { addReview_BlankField, addReview_ResetButton, addReview_ValidData, addReview_VehicleDropDown, viewReview_Search_CarName, viewReview_Search_CustomerNAme, viewReview_Search_Dealeship, viewReview_view_IconButton } from "./Admin/13-Review.cy.js"
import { addcomplaint_NoData, addcomplaint_Order_dropdown, addcomplaint_ResetButton, addcomplaint_ValidData, viewcomplaint_ClearSearchButtton, viewcomplaint_Search_CarNAme, viewcomplaint_Search_ComplaintTitle, viewcomplaint_Search_Dealership, viewcomplaint_Search_OrderNo, viewcomplaint_View_IconButton, viewcomplaint_View_ModalCloseButton } from "./Admin/14-Complaint.cy.js"
import { Admin_Profile_InValidZip_Code, Admin_Profile_Update_BlankField, Admin_Profile_Update_ValidData, Admin_Profile_ValidZip_Code, admin_Password_BlankField, admin_Password_UpdateValid, admin_Password_WrongPassword, admin_Password_didNot_Match } from "./Admin/15.Settings.cy.js"
import { Viewuser_StatusChanges, addUser_DuplicateData, addUser_InValid_ZipCode, addUser_NoData, addUser_ResetButton, addUser_ValidData, addUser_Valid_ZipCode, viewuser_AddUser_Button, viewuser_Check_AssignButton, viewuser_ClearFilterButton, viewuser_Delete_IconButton, viewuser_Edit_IconButton, viewuser_Modal_CloseButton, viewuser_Reset_Button, viewuser_SearchDealership, viewuser_SearchEmail, viewuser_SearchName, viewuser_View_IconButton, viewuser_filters } from "./Admin/2-UserManagement.cy"
import { Viewdealership_AdminApproval, Viewdealership_ClearFilterButton, Viewdealership_DeleteIconButton, Viewdealership_EditIconButton, Viewdealership_Filters, Viewdealership_Modal_CloseButton, Viewdealership_SearchName, Viewdealership_StatusChanges, Viewdealership_ViewIconButton } from "./Admin/3-Dealership.cy"
import { Admin_AddvehicleImage,Admin_viewVehicle_View_IconButton,Admin_viewVehicle_DeleteNotes,Admin_viewVehicle_Delete_IconButton,Admin_Search_InValid_VinNO,Admin_filterByStatus,Admin_filterByPhase, Admin_ClearfilterButton, Admin_Search_Valid_VinNO,Admin_viewVehicle_Edit_IconButton,Admin_viewVehicle_AddNotes,Admin_AddvehiclePdf,Admin_AddVehicle_InvalidVin,Admin_AddVehicle_AlreadyExist,Admin_AddVehicle_ValidData, Admin_AddVehicle_Nodata, Admin_Vehicle_StatusChanges_Active, Admin_Vehicle_StatusChanges_Block, Admin_View_AddVehicle_Button } from "./Admin/4-Vehicles.cy.js"
import { addWaranty_BlankFields,addWaranty_ValidData,addWaranty_ResetButton,viewWaranty_AddButton,viewWaranty_View_IconButton,viewWaranty_ViewIcon_CloseButton,viewWaranty_Edit_ResetButton,viewWaranty_Edit_IconButton,viewWaranty_Delete_IconButton} from "./Admin/6-Waranty.cy.js"
import { leads_Delete_IconButton, leads_View_IconButton, leads_View_ModalCloseButton } from "./Admin/7-Leads.cy.js"
import { Admin_Order_ClearFilterButton, Admin_Order_statusChanges, Admin_Search_Order_CustomerName, Admin_Search_Order_InValid_VinNO, Admin_Search_Order_VehicleName, Admin_Search_Order_VinNO, Admin_order_Filter_BY_Status, Admin_order_View_IconButton, Admin_order_View_ModalCloseButton } from "./Admin/8-Orders.cy.js"
import { Admin_login, login2, logout} from "./Admin/Add data.cy"
import { TotalUsers_Button, stats_accountant, stats_customer, stats_dispatcher, stats_inventorymanager, stats_seller } from "./Admin/1-Dashboard/1-Total User.cy.js"
import { TotalOrder_Button, stats_AcceptedOffer_order, stats_AwaitingOffer_order, stats_BasicInfoProvided_order, stats_Cancelled_order, stats_Completed_order, stats_CreditApplicationProvided_order, stats_Delivered_order, stats_DeliveryOptionsProvided_order, stats_DirectPaymentPaid_order, stats_DownPaymentPaid_order, stats_FinanceOptionsProvided_order, stats_Processing_order, stats_ReviewedandCompleted_order, stats_ServicesProvided_order, stats_Shipped_order, stats_WarrantyOptionsProvided_order, stats_pending_order } from "./Admin/1-Dashboard/2-Total Order.cy.js"
import { TotalVehicle_Button, stats_Active_vehicle, stats_Blocked_vehicle, stats_InDeal_vehicle, stats_Sold_vehicle } from "./Admin/1-Dashboard/3-Total Vehicles.cy.js"
import { TotalPayments_Button, stats_Pending_payment, stats_Successful_payment } from "./Admin/1-Dashboard/4-Total Payment.cy.js"
import { TotalComplaints_Button, stats_Not_repliedcomplaints, stats_repliedcomplaints } from "./Admin/1-Dashboard/5-Total Complaints.cy.js"
import { TotalReviews_Button, stats_NegativeReviews, stats_PositiveReviews } from "./Admin/1-Dashboard/6-Total Review.cy.js"
import { TotalAccount_Button, stats_Expenses_Count, stats_Revenue_Count, stats_TotalExpense_Ammount, stats_TotalProfit, stats_TotalRevenue_Ammount } from "./Admin/1-Dashboard/7-Total Account.cy.js"



describe("Admin", ()=>{
   // describe("1-Dashboard",()=>{
   //    describe("1.1-Total User",()=>{
   //        it("1.1.1-Verifying Total Staff Functionality(TTP)",()=>{
   //           cy.visit('/dashboard/stats-details')
   //           cy.contains("Login").click()
   //       Admin_login()
   //       TotalUsers_Button()
   //        })
   //          it("1.1.1.1-Verifying Stats of Seller(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //          stats_seller()
   //         })
   //       it("1.1.1.2-Verifying Stats of Customer(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //          stats_customer()
   //         })
           
   //        it("1.1.1.3-Verifying Stats of Inventory Managers(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //            stats_inventorymanager()
   //         })
   //         it("1.1.1.4-Verifying Stats of Accountant(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //           Admin_login()
   //           stats_accountant()
             
   //         })
   //         it("1.1.1.5-Verifying Stats of Dispatchers(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //           Admin_login()
   //           stats_dispatcher()
   //         })
  
  
   //   })
   //   describe("1.2-Total Orders",()=>{
   //     describe("1.2.1-Verifying Total Orders(TTP)",()=>{
   //        it("1.1.1.2-Verifying Stats of Orders(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //           Admin_login()
   //           TotalOrder_Button()
   //         })
  
   //         it("1.2.1.1-Verify stats of Pending Order(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //           stats_pending_order()
   //         })
   //         it("1.2.1.2-Verify stats of Down-Payment Paid(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //            stats_DownPaymentPaid_order()
   //         })
  
   //         it("1.2.1.3-Verify stats of Direct Payment Paid(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //           Admin_login()
   //           stats_DirectPaymentPaid_order()
   //         })
  
   //         it("1.2.1.4-Verify stats of Shipped(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //           Admin_login()
   //            stats_Shipped_order()
   //         })
  
   //         it("1.2.1.5-Verify stats of Delivered(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //           Admin_login()
   //           stats_Delivered_order()
   //         })
   //         it("1.2.1.5-Verify stats of Completed(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //             stats_Completed_order()
   //         })
  
   //          it("1.2.1.6-Verify stats of Reviewed and Completed(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //            stats_ReviewedandCompleted_order()
   //         })
   //         it("1.2.1.7-Verify stats of Processing order(TTP)",()=>{
   //          cy.visit('/dashboard/stats-details')
   //          cy.contains("Login").click()
   //          Admin_login()
   //          stats_Processing_order()
            
   //       })
      
   //         it("1.2.1.7-Verify stats of Cancelled(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //          Admin_login()
   //          stats_Cancelled_order()
   //         })
   //         it("1.2.1.8-Verify stats of Basic Info Provided(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //            stats_BasicInfoProvided_order()
   //         })
  
   //         it("1.2.1.9-Verify stats of Finance Options Provided(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //           Admin_login()
   //           stats_FinanceOptionsProvided_order()
   //         })
   //         it("1.2.1.10-Verify stats of Credit Application Provided(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //            stats_CreditApplicationProvided_order()
   //         })
  
   //         it("1.2.1.11-Verify stats of Delivery Options Provided(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //            stats_DeliveryOptionsProvided_order()
   //         })
   //         it("1.2.1.12-Verify stats of Warranty Options Provided(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //           Admin_login()
   //           stats_WarrantyOptionsProvided_order()
   //         })
   //         it("1.2.1.13-Verify stats of Services Provided(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //            stats_ServicesProvided_order()
   //         })
   //         it("1.2.1.14-Verify stats of Awaiting Offer(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //            stats_AwaitingOffer_order()
   //         })
   //         it("1.2.1.15-Verify stats of Accepted Offer(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //            stats_AcceptedOffer_order()
  
   //         })
   //     })
   //   })
  
   //   describe("1.3-Total Vehiles",()=>{
   //    it("1.3.1-Verifying Total Vehicles(TTP)",()=>{
   //        cy.visit('/dashboard/stats-details')
   //        cy.contains("Login").click()
   //        Admin_login()
   //        TotalVehicle_Button()
   //     })
  
   //     it("1.3.1.1-Verify status of Active Vehicles(TTP)",()=>{
   //        cy.visit('/dashboard/stats-details')
   //        cy.contains("Login").click()
   //        Admin_login()
   //        stats_Active_vehicle()
  
   //     })
  
   //     it("1.3.1.2-Verify status of Block Vehicles(TTP)",()=>{
   //        cy.visit('/dashboard/stats-details')
   //        cy.contains("Login").click()
   //        Admin_login()
   //        stats_Blocked_vehicle()
   //     })
   //     it("1.3.1.3-Verify status of In-Deal Vehicles(TTP)",()=>{
   //        cy.visit('/dashboard/stats-details')
   //        cy.contains("Login").click()
   //        Admin_login()
   //        stats_InDeal_vehicle()
   //     })
   //      it("1.3.1.4-Verify status of Sold Vehicles(TTP)",()=>{
   //        cy.visit('/dashboard/stats-details')
   //        cy.contains("Login").click()
   //        Admin_login()
   //        stats_Sold_vehicle()
   //     })
   //   })
   //   describe("1.4-Payment",()=>{
   //    describe("1.4.1-Verifying Total Payments(TTP)",()=>{
   //        it("1.4.1-Verifying Total Payments(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //            TotalPayments_Button()
   //         })
   //         it("1.4.1.1-Verify Stats Of Pending Status(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //          Admin_login()
   //          stats_Pending_payment()
   //         })
   //         it("1.4.1.2-Verify stats of Success Status(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //           Admin_login()
   //           stats_Successful_payment()
   //         })

   //    })
    
   //   })
   //   describe("1.5-Total Complaint",()=>{
   //      describe("1.5.1-Verifying Total Complaints(TTP)",()=>{
   //        it("1.5.1-Verifying Total Complaints(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()  
   //            Admin_login()
   //            TotalComplaints_Button()
   //         })
   //          it("1.5.1.1-Verify Stats of Replied status(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()  
   //            Admin_login()
   //            stats_repliedcomplaints()
   //         })
   //         it("1.5.1.2-Verify Status of Non-Replied Status(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()  
   //            Admin_login()
   //            stats_Not_repliedcomplaints()
   //         })
   //      })
   //   })
   //   describe("1.6-Reviews",()=>{
   //       describe("1.6.1-Verifying Total Reviews(TTP)",()=>{
   //        it("1.6.1-VerifyingTotal Reviews(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //            Admin_login()
   //            TotalReviews_Button()

   //         })
   //         it("1.6.1.1-Verify Stats of Negative Reviews(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //           Admin_login()
   //           stats_NegativeReviews()
   //         })
   //         it("1.6.1.2-Verify Stats of Positive Reviews(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()
   //           Admin_login()
   //           stats_PositiveReviews()
   //         })
   //       })
   //   })
   //   describe("1.7-Total Accounts",()=>{
   //     describe("1.7.1-Verifying Total Accounts(TTP)",()=>{
   //        it("1.7.1-Verifying Total Accounts(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()  
   //           Admin_login()
   //           TotalAccount_Button()
   //         })
   //         it("1.7.1.1-Verify Stat of Expense Count(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()  
   //            Admin_login()
   //            stats_Expenses_Count()
   //         })
   //         it("1.7.1.2-Verify Stat of Revenue Count(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()  
   //            Admin_login()
   //            stats_Revenue_Count()
              
   //         })
   //         it("1.7.1.3-Verify Stat of Total Expense Amount(TTP)",()=>{
   //            cy.visit('/dashboard/stats-details')
   //            cy.contains("Login").click()  
   //            Admin_login()
   //            stats_TotalExpense_Ammount()
              
   //         })
   //         it("1.7.1.4-Verify Stat of Total Revenue Amount(TTP)",()=>{
   //          cy.visit('/dashboard/stats-details')
   //          cy.contains("Login").click()  
   //          Admin_login()
   //          stats_TotalRevenue_Ammount()
            
   //       })
   //       it("1.7.1.5-Verify Stat of Total Profit(TTP)",()=>{
   //          cy.visit('/dashboard/stats-details')
   //          cy.contains("Login").click()  
   //          Admin_login()
   //          stats_TotalProfit()
            
   //       })



           
   //     })
   //   })
   //  })
      //   describe("2-User MAnagement", ()=>{
      //       describe("2.1- Add User", ()=>{
      //           it("2.1.1-Add user with no data (TTF)", ()=>{
      //               cy.visit('/dashboard/add-employee')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               addUser_NoData()
      //            })
      //            it("2.1.2-Add user with Valid data(TTP)", ()=>{
      //               cy.visit('/dashboard/add-employee')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               addUser_ValidData()

      //            })
      //            it("2.1.3-Add user with duplicate data(TTF)", ()=>{
      //               cy.visit('/dashboard/add-employee')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               addUser_DuplicateData()

      //            })
      //            it("2.1.4-Reset Button Functionality check(TTP)", ()=>{
      //               cy.visit('/dashboard/add-employee')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               addUser_ResetButton()
      //            })
      //            it(" 2.1.5- InValid Zip-code throw error check(TTF)", ()=>{
      //               cy.visit('/dashboard/add-employee')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               addUser_InValid_ZipCode()
    
      //            })
      //            it("2.1.6-Enter Valid Zip-Code(TTP)", ()=>{
      //               cy.visit('/dashboard/add-employee')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               addUser_Valid_ZipCode()
      //            })
                
      //       })
      //       describe("2.2- View Users",()=>{
      //           it("2.2.2-Filter Bar functionality Check(TTP)", ()=>{
      //               cy.visit('/dashboard/view-employees')
      //               cy.contains("Login").click()
      //               Admin_login()
      //              viewuser_filters()
      //            })
      //       describe("2.2.3-Search-Bar", ()=>{
      //           it("2.2.1-Search With Exist UserName(TTP)", ()=>{
      //               cy.visit('/dashboard/view-employees')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               viewuser_SearchName()
    
      //            })
      //            it("2.2.2- Search with Exist User Email(TTP)", ()=>{
      //               cy.visit('/dashboard/view-employees')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               viewuser_SearchEmail()
    
      //            })
      //            it("2.2.3-Search by Dealership(TTP)", ()=>{
      //               cy.visit('/dashboard/view-employees')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               viewuser_SearchDealership()
      //            })
      //       })
      //       it("2.2.4-Clear filter Button functionality check(TTP)", ()=>{
      //           cy.visit('/dashboard/view-employees')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           viewuser_ClearFilterButton()
      //        })
      //        describe("2.2.5-Actions functionality check",()=>{
      //           it("2.2.5.1.1-Close Button On View Modal Functionality check", ()=>{
      //               cy.visit('/dashboard/view-employees')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               viewuser_Modal_CloseButton()
      //            })
      //            it("2.2.5.1.2-View Icon functionality check(TTP)", ()=>{
      //               cy.visit('/dashboard/view-employees')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               viewuser_View_IconButton()
      //            })
      //           describe("2.2.5.2-Edit Icon functionality check(TTP)", ()=>{
      //               it("2.2.5.2.1-Edit Icon functionality check(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-employees')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   viewuser_Edit_IconButton()
      //                })

      //                it("2.2.5.2.2-Reset Button Functionality Check(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-employees')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   viewuser_Reset_Button()
      //                })
      //           })
      //               it("2.2.5.3-Delete Icon functionality check(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-employees')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   viewuser_Delete_IconButton()
      //                })
      //                it("2.2.5.4-Assign Access Column(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-employees')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   viewuser_Check_AssignButton()
      //                })
      //                it("2.2.6-Active Block Status functionality  Check(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-employees')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   Viewuser_StatusChanges()
      //                })
      //                it("2.2.7-Add Employee Button functionality check(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-employees')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   viewuser_AddUser_Button()
      //                })   
      //        })
      //       })
      //   })
      //   describe("3-View Dealerships", ()=>{
      //       describe("3.1-Actions Icon Functionality", ()=>{
      //           describe("3.1.1-View icon functionality(TTP)", ()=>{
      //               it("3.1.1.1-View icon functionality check(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-dealerships')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   Viewdealership_ViewIconButton()
      //                })
      //                it("3.1.1.2.Close Icon On View Modal Functionality check(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-dealerships')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   Viewdealership_Modal_CloseButton()
      //               })
      //       })
      //          it("3.1.2-Edit icon functionality(TTP)", ()=>{
      //           cy.visit('/dashboard/view-dealerships')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Viewdealership_EditIconButton()
      //        })
      //          it("3.1.3-Delete Icon functionality(TTP)", ()=>{
      //           cy.visit('/dashboard/view-dealerships')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Viewdealership_DeleteIconButton()
      //        })
      //   })
      //   describe("3.2-Search Bar",()=>{
      //       it("3.2.1-Search With Dealership Name (TTP)", ()=>{
      //           cy.visit('/dashboard/view-dealerships')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Viewdealership_SearchName()
      //        })
      //   })

      //          it("3.3-filters functionality check(TTP)", ()=>{
      //               cy.visit('/dashboard/view-dealerships')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Viewdealership_Filters()
      //            })
      //            it("3.4-Clear filter Button functionality check(TTP)", ()=>{
      //               cy.visit('/dashboard/view-dealerships')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Viewdealership_ClearFilterButton()
      //            })
      //           it("3.5-Status Functionality check( Active And Block)", ()=>{
      //               cy.visit('/dashboard/view-dealerships')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Viewdealership_StatusChanges()
      //            })
      //           //  it("3.6-Dealership Approval with Admin", ()=>{
      //           //     cy.visit('/dashboard/view-dealerships')
      //           //     cy.contains("Login").click()
      //           //     Admin_login()
      //           //     Viewdealership_AdminApproval()
      //           //  })
               
      //   })

      //   describe("4-Vehicles", ()=>{
      //     describe("4.1-Add Vehicle",()=>{
      //        describe("4.1.1-Stepper", ()=>{
      //           describe("4.1.1.1-Step1 (Vehicle Info)", ()=>{
      //               it("4.1.1.1.1-Add Vehicle Info with no data(TTF)", ()=>{
      //                       cy.visit('/dashboard/add-vehicle')
      //                       cy.contains("Login").click()
      //                       Admin_login()
      //                       Admin_AddVehicle_Nodata()
      //               })
    
      //               it("4.1.1.1.2-Add Vehicle with Valid data(TTP)", ()=>{
      //                   cy.visit('/dashboard/add-vehicle')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   Admin_AddVehicle_ValidData()
      //           })
      //           it("4.1.1.1.3-Add Vehicle with already existed VIN(TTF)", ()=>{
      //               cy.visit('/dashboard/add-vehicle')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Admin_AddVehicle_AlreadyExist()
      //       })
      //          it("4.1.1.1.4-Add Vehicle with Invalid VIN(TTF)", ()=>{
      //           cy.visit('/dashboard/add-vehicle')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_AddVehicle_InvalidVin()
      //   })         
      //             })
      //           describe("4.1.1.2-Step3 (Images and Model)",()=>{
      //              it("4.1.1.2.1-Image drag and drop functionality", ()=>{
      //               cy.visit('/dashboard/add-vehicle')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Admin_AddvehicleImage()
      //              })
      //              it("4.1.1.2.2-Pdf drag and drop functionality", ()=>{
      //               cy.visit('/dashboard/add-vehicle')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Admin_AddvehiclePdf()
      //              })                  
      //             })
      //         })
      //     })
      //     describe("4.2-View Vehicles",()=>{
      //         describe("4.2.1-Table List View",()=>{
      //            describe("4.2.1.1-Actions Icon functionality",()=>{
      //                describe("4.2.1.1.1-View iconfunctionality check(TTP)",()=>{
      //                  it("4.2.1.1.1.1-View icon functionality check(TTP)", ()=>{
      //                     cy.visit('/dashboard/view-vehicles')
      //                     cy.contains("Login").click()
      //                     Admin_login()
      //                     Admin_viewVehicle_View_IconButton()
      //                  })
      //                  describe("4.2.1.1.1.1-Vehicle Notes", ()=>{
      //                    it("4.2.1.1.1.1.2Add Note",()=>{
      //                       cy.visit('/dashboard/view-vehicles')
      //                       cy.contains("Login").click()
      //                       Admin_login()
      //                       Admin_viewVehicle_AddNotes()
      //                    })
      //                    it.skip("4.2.1.1.1.1.3-Delete Note",()=>{
      //                       cy.visit('/dashboard/view-vehicles')
      //                       cy.contains("Login").click()
      //                       Admin_login()
      //                       Admin_viewVehicle_DeleteNotes()
      //                    })


      //                  })
         
        
      //                 })
      //                 it("4.2.1.1.2-Edit Icon functionality check(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-vehicles')
      //                     cy.contains("Login").click()
      //                     Admin_login()
      //                     Admin_viewVehicle_Edit_IconButton()
      //                 })
      //                 it.skip("4.2.1.3-Delete Icon functionality check(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-vehicles')
      //                     cy.contains("Login").click()
      //                     Admin_login()
      //                     Admin_viewVehicle_Delete_IconButton()
      //                 })

      //             })
      //             describe("4.2.1.2-status",()=>{
      //                it("Active status functionality(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-vehicles')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   Admin_Vehicle_StatusChanges_Active()
      //                 })
      //                 it("Block status functionality(TTP)", ()=>{
      //                   cy.visit('/dashboard/view-vehicles')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   Admin_Vehicle_StatusChanges_Block()
      //                 })


      //             })
      //         })
      //         describe("4.2.2-Search",()=>{
      //           it("4.2.2.1-Search by Valid Data(TTP)", ()=>{
      //               cy.visit('/dashboard/view-vehicles')
      //                 cy.contains("Login").click()
      //                 Admin_login()
      //                Admin_Search_Valid_VinNO()
      //             })
      //             it("4.2.2.2-Search by InValid Data (TTF)", ()=>{
      //               cy.visit('/dashboard/view-vehicles')
      //                 cy.contains("Login").click()
      //                 Admin_login()
      //                 Admin_Search_InValid_VinNO()
      //             })


      //         })
      //         it("4.2.3-Clear filter button", ()=>{
      //           cy.visit('/dashboard/view-vehicles')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_ClearfilterButton()
      //         })
      //         describe("4.2.5-Filters functionality", ()=>{
      //             it("4.2.5.1-Filter by status(TTP)", ()=>{
      //               cy.visit('/dashboard/view-vehicles')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Admin_filterByStatus()
                    
      //             })   
      //             it("4.2.5.2-Filter by phase(TTP)", ()=>{
      //               cy.visit('/dashboard/view-vehicles')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Admin_filterByPhase()
                   
      //             }) 



      //         })
      //         it("4.2.6-Add Vehicle Button functionality check(TTP)", ()=>{
      //          cy.visit('/dashboard/view-vehicles')
      //          cy.contains("Login").click()
      //          Admin_login()
      //         Admin_View_AddVehicle_Button()
      //        })
            
      //       })
      //   })
        describe("6-Warantay",()=>{
          describe("6.1- Add Waranty",()=>{
            it("6.1.1-Add Waranty With blank fields(TTF)",()=>{
                cy.visit('/dashboard/add-warranty')
                cy.contains("Login").click()
                Admin_login()
                addWaranty_BlankFields()
        })

            it("6.1.2-Add Waranty with Valid Data(TTP)",()=>{
            cy.visit('/dashboard/add-warranty')
            cy.contains("Login").click()
            Admin_login()
            addWaranty_ValidData()
        })
            it("6.1.4-Reset Button functionality check(TTP)",()=>{
              cy.visit('/dashboard/add-warranty')
              cy.contains("Login").click()
              Admin_login()
              addWaranty_ResetButton()
       })
          })
          describe("6.2-View Waranty",()=>{
             it("6.2.2-Add Warranty Button functionality check(TTP)",()=>{
                cy.visit('/dashboard/view-warranties')
                cy.contains("Login").click()
                Admin_login()
                viewWaranty_AddButton()
             })
            describe("6.2.3-Actions Icons In table",()=>{
                describe("6.2.3.1-View Icon button (TTP)",()=>{
                    it("6.2.3.1.1-View Icon functionality check(TTP)",()=>{
                        cy.visit('/dashboard/view-warranties')
                        cy.contains("Login").click()
                        Admin_login()
                        viewWaranty_View_IconButton()
                       
                     })
                     it("6.2.3.1.2-Close Button On View Modal functionality check(TTP)",()=>{
                        cy.visit('/dashboard/view-warranties')
                        cy.contains("Login").click()
                        Admin_login()
                        viewWaranty_ViewIcon_CloseButton()
                       
                     })
                })
                describe("6.2.3.2-Edit Icon Button(TTP)",()=>{
                    it("6.2.3.2.1-Reset Button functionality check(TTP)",()=>{
                        cy.visit('/dashboard/view-warranties')
                        cy.contains("Login").click()
                        Admin_login()
                        viewWaranty_Edit_ResetButton()
                     })
                     it("6.2.3.2.2-Edit Icon functionality check(TTP)",()=>{
                        cy.visit('/dashboard/view-warranties')
                        cy.contains("Login").click()
                        Admin_login()
                        viewWaranty_Edit_IconButton()
                     })
                })
                it("6.2.3.3-Delete Icon Button functionality(TTP)",()=>{
                    cy.visit('/dashboard/view-warranties')
                    cy.contains("Login").click()
                    Admin_login()
                    viewWaranty_Delete_IconButton()
                 })
            })
          })
        
         })
      //   describe("7-Leads",()=>{
      //       describe("7.2-View Icon functionality (TTP)",()=>{
      //           it("7.2-View Icon functionality (TTP)",()=>{
      //               cy.visit('/dashboard/view-leads')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               leads_View_IconButton()
      //            })
      //            it("7.2.1-Close Button on View Modal(TTP)",()=>{
      //               cy.visit('/dashboard/view-leads')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               leads_View_ModalCloseButton()
      //            })
      //        })
      //        it("7.3-Delete Icon Functionality(TTP)",()=>{
      //           cy.visit('/dashboard/view-leads')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           leads_Delete_IconButton()
      //        })
      //   })
      //   describe("8-Orders", ()=>{
      //     describe("8.1-Order table list View",()=>{
      //       it("8.1.1-View Icon Button Check functionality(TTP)",()=>{
      //           cy.visit('/dashboard/orders')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_order_View_IconButton()
      //        })
      //        it("8.1.1.1-Close Button On View Modal functionality Check(TTP)",()=>{
      //           cy.visit('/dashboard/orders')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_order_View_ModalCloseButton()
      //        })
      //        it("8.1.2-Status functionality check(TTP)",()=>{
      //          cy.visit('/dashboard/orders')
      //          cy.contains("Login").click()
      //          Admin_login()
      //          Admin_Order_statusChanges()
      //       })
      //     })
      //     describe("8.2-Search",()=>{
      //       it("8.2.1-Search with Valid VIN(TTP)",()=>{
      //           cy.visit('/dashboard/orders')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_Search_Order_VinNO()
            
      //        })
      //        it("8.2.2-Search with Invalid VIN(TTF)",()=>{
      //           cy.visit('/dashboard/orders')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_Search_Order_InValid_VinNO()
            
      //        })
      //        it("8.2.3-Search with Valid Vehicle Name(TTP)",()=>{
      //           cy.visit('/dashboard/orders')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_Search_Order_VehicleName()
            
      //        })
      //        it("8.2.4-Search with Valid Customer Name(TTP)",()=>{
      //           cy.visit('/dashboard/orders')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_Search_Order_CustomerName()
      //        })
            


      //     })
      //     describe("8.3-Filters", ()=>{
      //       it("8.3-Filters by status Check functionality(TTP)",()=>{
      //           cy.visit('/dashboard/orders')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_order_Filter_BY_Status()
      //        })
      //     })
      //     it("8.4-Clear Filter Button",()=>{
      //       cy.visit('/dashboard/orders')
      //       cy.contains("Login").click()
      //       Admin_login()
      //       Admin_Order_ClearFilterButton()
      //    })

      //   })
      //   describe("10.Payments", ()=>{
      //     describe("10.1-Search",()=>{
      //       it("10.1.1-Search by Valid VIN(TTP)",()=>{
      //           cy.visit('/dashboard/payments')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_Search_Payment_VinNo()
      //        })
      //        it("10.1.2-Search with Vehicle Name(TTP)",()=>{
      //           cy.visit('/dashboard/payments')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_Search_Payment_VehicleName()
      //        })
      //        it("10.1.3-Searching by Invalid VIN(TTF)",()=>{
      //           cy.visit('/dashboard/payments')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_Search_Payment_InValid_VinNo()
      //        })
      //     })
      //     describe("10.2-Filters",()=>{
      //       it("10.2.1-Filter by Status Functionality Check(TTP)",()=>{
      //           cy.visit('/dashboard/payments')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_Filters_Payment()
      //        })
      //     })
      //     it("10.3-Clear filters Button(TTP)",()=>{
      //       cy.visit('/dashboard/payments')
      //       cy.contains("Login").click()
      //       Admin_login()
      //       Admin__Payment_ClearFilterButton()
      //    })
      //   })
      //   describe("11.Accounting",()=>{
      //    describe("11.1-Add Revenue",()=>{
      //          it("11.1.1-Add Revenue with Blank fields(TTF)", ()=>{
      //           cy.visit('/dashboard/add-revenue')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_addRevenue_Blank_filed()
      //          })
      //          it("11.1.2-Select Vehicle by Drop down list(TTP)", ()=>{
      //           cy.visit('/dashboard/add-revenue')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_addRevenue_DropDown_List()
      //          })
      //          it("11.1.3-Add Revenue with Valid Data(TTP)", ()=>{
      //           cy.visit('/dashboard/add-revenue')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_addRevenue_Valid_Data()
      //          })
      //          it("11.1.4-Reset Button(TTP)", ()=>{
      //           cy.visit('/dashboard/add-revenue')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_addRevenue_ResetButton()
      //          })
      //    })
      //    describe("11.2-View Revenue", ()=>{
      //      describe("11.2.1-Search", ()=>{
      //       it("11.2.1.1-Search with Valid VIN(TTP)",()=>{
      //           cy.visit('/dashboard/view-revenue')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_ViewRevenue_Search_VinNo()
      //        })
      //        it("11.2.1.2-Search with Vehicle Name(TTP)",()=>{
      //           cy.visit('/dashboard/view-revenue')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_ViewRevenue_Search_VehicleName()
      //        })

             

      //      })
      //      describe("11.2.3-Table list View",()=>{
      //       it("11.2.3.1.View Icon Button functionality(TTP)",()=>{
      //           cy.visit('/dashboard/view-revenue')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_ViewRevenue_View_IconButton()
      //        })
      //        it("11.2.3.1.1-Close Button On View Modal Functionality check(TTP)",()=>{
      //           cy.visit('/dashboard/view-revenue')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_ViewRevenue_ModalCloseButton()
      //        })
      //        it("11.2.3.2.Edit Icon Button functionality(TTP)",()=>{
      //           cy.visit('/dashboard/view-revenue')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_ViewRevenue_Edit_IconButton()
      //        })
      //        it("11.2.3.2.1-Reset Button On Update Revenue functionality(TTP)",()=>{
      //           cy.visit('/dashboard/view-revenue')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_ViewRevenue_Edit_ResetButton()
      //        })
      //        it("11.2.3.3-Delete Icon Button functionality(TTP)",()=>{
      //           cy.visit('/dashboard/view-revenue')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_ViewRevenue_Delete_IconButton()
      //        })
             
      //      })
      //    })
      //    describe("11.3-Add Expense",()=>{
      //       it("11.3.1-Add Expense with no data(TTF)",()=>{
      //           cy.visit('/dashboard/add-expense')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_addExpense_BlankData()
      //        })
      //        it("11.3.2-Add Expense with Valid data(TTP)",()=>{
      //           cy.visit('/dashboard/add-expense')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_addExpense_ValidData()
      //        })
      //        it("11.3.3-Reset Button Functionality check(TTP)",()=>{
      //           cy.visit('/dashboard/add-expense')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           admin_addExpense_ResetButton()
      //        })
      //    })
      //    describe("11.4-View Expense",()=>{
      //       describe("11.4.1-Search", ()=>{
      //           it("11.4.2.4-Search with Expense type(TTP)",()=>{
      //               cy.visit('/dashboard/view-expense')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               admin_ViewExpense_Search_ExpenseType()
      //            })
      //       })
      //       describe("11.4.3-Table List View",()=>{
      //           it("11.4.3.1-View Icon Button(TTP)",()=>{
      //               cy.visit('/dashboard/view-expense')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               admin_ViewExpense_View_IconButton()
      //            })
      //            it("11.4.3.1.1-Close Button on View Modal(TTP)",()=>{
      //               cy.visit('/dashboard/view-expense')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               admin_ViewExpense_View_ModalCloseButton()
      //            })
      //            it("11.4.3.2-Edit Icon Button(TTP)",()=>{
      //               cy.visit('/dashboard/view-expense')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               admin_ViewExpense_Edit_IconButton()
      //            })
      //            it("11.4.3.2.1-Reset Button functionality on Update Expense(TTP) ",()=>{
      //               cy.visit('/dashboard/view-expense')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               admin_ViewExpense_Edit_ResetButton()
      //            })
      //            it("11.4.3.3-Delete Icon Button(TTP)",()=>{
      //               cy.visit('/dashboard/view-expense')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               admin_ViewExpense_Delete_IconButton()
      //            })
      //            it("11.4.4-Add Expenses Button functionality(TTP)",()=>{
      //               cy.visit('/dashboard/view-expense')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               admin_ViewExpense_viewscreen_AddButton()
      //            })
              
      //       })
      //    })
      //    describe("11.5-View Profit Report",()=>{
      //       describe("11.5.1-Search",()=>{
      //           it("11.5.1.1-Searching with Valid VIN(TTP)",()=>{
      //               cy.visit('/dashboard/profit-report')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               admin_ViewProfit_Search_Valid_VinNo()
      //            })
      //            it("11.5.1.2-Searching with Invalid VIN(TTF)",()=>{
      //               cy.visit('/dashboard/profit-report')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               admin_ViewProfit_Search_InValid_VinNo()
      //            })
      //        })
      //    })
        
      //   })
      //   describe("12-Chats", function(){
      //       describe("12.1-Search-Bar",function(){
      //         it("12.1.1-Can Search every User(TTP)", ()=>{
      //           cy.visit('/dashboard/chat')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           Admin_Chat_Search_UserName()
      //         })
      //       })
      //       describe("12.2-Seller Chat",function(){
      //           it("12.2.1-Admin can Chat with every Employee(TTP)", ()=>{
      //             cy.visit('/dashboard/chat')
      //             cy.contains("Login").click()
      //             Admin_login()
      //             Chatwith_Admin_To_Seller()
      //             logout()
      //             login2()
      //             Admin_Chatwith_Seller_To_Admin
      //           })
      //          })
      //       describe("12.4-Media Sending ",()=>{
      //          it("12.4.1-User Can send an Image(TTP)", ()=>{
      //             cy.visit('/dashboard/chat')
      //             cy.contains("Login").click()
      //             Admin_login()
      //             Chatwith_Admin_To_Seller_ImageSending()
      //             // logout()
      //             // login2()
      //             // Admin_Chatwith_Seller_To_Admin
      //           })
      //           it("12.4.2-User can Send a Video(TTP)", ()=>{
      //             cy.visit('/dashboard/chat')
      //             cy.contains("Login").click()
      //             Admin_login()
      //             Chatwith_Admin_To_Seller_VideoSending()
      //             // logout()
      //             // login2()
      //             // Admin_Chatwith_Seller_To_Admin
      //           })
      //           it("12.4.3-User can Send a document(TTP)", ()=>{
      //             cy.visit('/dashboard/chat')
      //             cy.contains("Login").click()
      //             Admin_login()
      //             Chatwith_Admin_To_Seller_DocumentSending()
      //             // logout()
      //             // login2()
      //             // Admin_Chatwith_Seller_To_Admin
      //           })
      //       })
      //     })
      //   describe("13-Review",()=>{
      //       describe("13.1-Add Review",()=>{
      //           it(" 13.1.1-Add Review with no data(TTF)", ()=>{
      //               cy.visit('/dashboard/add-review')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               addReview_BlankField()
      //             })
      //             it("13.1.2-Add Review with Valid data(TTP)", ()=>{
      //               cy.visit('/dashboard/add-review')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               addReview_ValidData()
      //             })
      //             it("13.1.3-Reset Button Functionality(TTP)", ()=>{
      //               cy.visit('/dashboard/add-review')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               addReview_ResetButton()
      //             })
      //             it("13.1.4-Select Vehicle by Drop Down list(TTP)", ()=>{
      //               cy.visit('/dashboard/add-review')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               addReview_VehicleDropDown()
      //             })
 
      //       })
      //       describe("13.2-View Review",()=>{
      //           describe(" 13.2.1-Search",()=>{
      //               it("13.1.1-Search by Car Name(TTP)", ()=>{
                     
      //                   cy.visit('/dashboard/add-review')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   viewReview_Search_CarName()
      //                 })
      //                 it("13.1.2-Search by Dealership(TTP)", ()=>{
      //                   cy.visit('/dashboard/reviews')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   viewReview_Search_Dealeship()
      //                 })
      //                 it("13.1.3-Search by Customer Name(TTP)", ()=>{
      //                   cy.visit('/dashboard/reviews')
      //                   cy.contains("Login").click()
      //                   Admin_login()
      //                   viewReview_Search_CustomerNAme()
      //                 })
        
      //           })
      //           it("13.2.3-View Icon functionality(TTP)", ()=>{
      //               cy.visit('/dashboard/reviews')
      //               cy.contains("Login").click()
      //               Admin_login()
      //              viewReview_view_IconButton()
      //             })
      //             it("13.3.1-Close Button on View Modal(TTP)", ()=>{
      //               cy.visit('/dashboard/reviews')
      //               cy.contains("Login").click()
      //               Admin_login()
                   
      //             })

      //       })   
      //   })
      //   describe("14.Complaints",()=>{
      //      describe("14.1-Add Complaint",()=>{
      //       it("14.1.1-Add Complaint with no data(TTP)", ()=>{
      //           cy.visit('/dashboard/add-complaint')
      //           cy.contains("Login").click()
      //           Admin_login()
      //          addcomplaint_NoData()
      //         })
      //         it("14.1.2-Add Complaint with Valid data(TTP)", ()=>{
      //           cy.visit('/dashboard/add-complaint')
      //           cy.contains("Login").click()
      //           Admin_login()
      //          addcomplaint_ValidData()
      //         })
      //         it("14.1.3-Reset Button Functionality(TTP)", ()=>{
      //           cy.visit('/dashboard/add-complaint')
      //           cy.contains("Login").click()
      //           Admin_login()
      //          addcomplaint_ResetButton()
      //         })
      //         it("14.1.4-Select Order by drop down list(TTP)", ()=>{
      //           cy.visit('/dashboard/add-complaint')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           addcomplaint_Order_dropdown()
      //         })
      //      })
      //      describe("14.2-View Complaint",()=>{
      //       describe("14.2.1-Search",()=>{
      //           it("14.2.1.1-Search Complaint by Car-Name(TTP)", ()=>{
      //               cy.visit('/dashboard/complaints')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               viewcomplaint_Search_CarNAme()
                    
      //             })
      //             it("14.2.1.2-Search Complaint by Order-No(TTP)", ()=>{
      //               cy.visit('/dashboard/complaints')
      //               cy.contains("Login").click()
      //               Admin_login()
      //             viewcomplaint_Search_OrderNo()
      //             })
      //             it("14.2.1.3-Search Complaint by Complaint Title(TTP)", ()=>{
      //               cy.visit('/dashboard/complaints')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               viewcomplaint_Search_ComplaintTitle()
      //             })
      //             it("14.2.1.4-Search Complaint by Dealership(TTP)", ()=>{
      //               cy.visit('/dashboard/complaints')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               viewcomplaint_Search_Dealership()
      //             })



      //       })
      //       describe("14.2.3-View Icon In Action(TTP)",()=>{
      //           it("14.2.3-View Icon In Action(TTP)",()=>{
      //               cy.visit('/dashboard/complaints')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               viewcomplaint_View_IconButton()
      //           })
      //           it("14.2.3.1-Close Button On View Modal",()=>{
      //               cy.visit('/dashboard/complaints')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               viewcomplaint_View_ModalCloseButton()
      //           })



      //       })
      //       it("14.2.4-Clear Search Button functionality check(TTP)",()=>{
      //           cy.visit('/dashboard/complaints')
      //           cy.contains("Login").click()
      //           Admin_login()
      //           viewcomplaint_ClearSearchButtton()
      //       })
      //      })
      //   })

      //   describe("15.Settings",()=>{
      //       describe("15.1-Profile",()=>{
      //           it("15.1.1-Update profile with no data(TTF)", ()=>{
      //               cy.visit('/dashboard/settings')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Admin_Profile_Update_BlankField()
      //             })

      //             it("15.1.2-Update Profile with valid data(TTP)", ()=>{
      //               cy.visit('/dashboard/settings')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Admin_Profile_Update_ValidData()
      //             })
      //             it("15.1.3-Update Profile with Valid Zip-code(TTP)", ()=>{
      //               cy.visit('/dashboard/settings')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Admin_Profile_ValidZip_Code()
      //             })
      //             it("15.1.4-Update Profile with Invalid Zip-code(TTF)", ()=>{
      //               cy.visit('/dashboard/settings')
      //               cy.contains("Login").click()
      //               Admin_login()
      //               Admin_Profile_InValidZip_Code()
      //             })
      //       })
      //       describe("15.2-Password",()=>{
      //           it("15.2.1-Update Password with blank fields(TTF)", ()=>{
      //               cy.visit('/dashboard/settings')
      //               cy.contains("Login").click()
      //               Admin_login()
      //              admin_Password_BlankField()
      //             })
      //             it("15.2.2-Update password with Wrong Old Password(TTP)", ()=>{
      //               cy.visit('/dashboard/settings')
      //               cy.contains("Login").click()
      //               Admin_login()
      //              admin_Password_WrongPassword()
      //             })
      //             it("15.2.4-Different passwords in New and Confirm Password(TTF)", ()=>{
      //                cy.visit('/dashboard/settings')
      //                cy.contains("Login").click()
      //                Admin_login()
      //               admin_Password_didNot_Match()
      //              })
      //             it.skip("15.2.3-Update password with Valid data(TTP)", ()=>{
      //               cy.visit('/dashboard/settings')
      //               cy.contains("Login").click()
      //               Admin_login()
      //              admin_Password_UpdateValid()
      //             })
               
      //       })
      //   })
       

})
    