 <reference types="cypress" />
import { backendURL } from "../extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000

export const TotalOrder_Button = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');

    let totalorder;
    let allSum = 0;

    cy.contains("Total Orders").next().invoke('text').then((text) => {
        totalorder = parseInt(text);


        cy.contains("Total Orders").parent().parent().parent().click();


        //Pending
        cy.contains("Pending").next().invoke('text').then((text) => {

            allSum += parseInt(text)

              //Down Payment Paid
              cy.contains("Down Payment Paid").next().invoke('text').then((text) => {
                allSum += parseInt(text)

               //Direct Payment Paid
                cy.contains("Direct Payment Paid").next().invoke('text').then((text) => {
                    allSum += parseInt(text)
                 
                });
                 //Shipped
                     cy.contains("Shipped").next().invoke('text').then((text) => {
                    allSum += parseInt(text)
                   
                    
                     //Delivered
                    cy.contains("Delivered").next().invoke('text').then((text) => {
                    allSum += parseInt(text)
                   

                   //Completed
                      cy.contains("Completed").next().invoke('text').then((text) => {
                        allSum += parseInt(text)
                      

                      //Reviewed and Completed
                      cy.contains("Reviewed and Completed").next().invoke('text').then((text) => {
                        allSum += parseInt(text)
                     

                          //Cancelled
                      cy.contains("Cancelled").next().invoke('text').then((text) => {
                        allSum += parseInt(text)
                     

                          //Basic Info Provided
                      cy.contains("Basic Info Provided").next().invoke('text').then((text) => {
                        allSum += parseInt(text)
                     

                          //Finance Options Provided
                      cy.contains("Finance Options Provided").next().invoke('text').then((text) => {
                        allSum += parseInt(text)
                      

                          //Credit Application Provided
                      cy.contains("Credit Application Provided").next().invoke('text').then((text) => {
                        allSum += parseInt(text)
                        

                          //Delivery Options Provided
                      cy.contains("Delivery Options Provided").next().invoke('text').then((text) => {
                        allSum += parseInt(text)
                       

                          //Warranty Options Provided
                      cy.contains("Warranty Options Provided").next().invoke('text').then((text) => {
                        allSum += parseInt(text)
                     

                          //Services Provided
                      cy.contains("Services Provided").next().invoke('text').then((text) => {
                        allSum += parseInt(text)
                      

                          //Awaiting Offer
                      cy.contains("Awaiting Offer").next().invoke('text').then((text) => {
                        allSum += parseInt(text)
                    

                          //Accepted Offer
                      cy.contains("Accepted Offer").next().invoke('text').then((text) => {
                        allSum += parseInt(text)
                    
                           // Stipulation
                           cy.contains("Stipulations Provided").next().invoke('text').then((text) => {
                            allSum += parseInt(text)
                            cy.log(totalorder, allSum)
                            expect(totalorder).to.equal(allSum)
                        });

                                          });

                                     });

                                      });

                                       });
 
                                     });

                                  });

                               });
                                });
                             });
                        });
                         });
                    });
                });
            });
        });
    });
    cy.wait("@Orders found Successfully").its('response.statusCode').should('eq', 200);
}


export const stats_pending_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Pending").next().invoke('text').then((text) => {

        const pending = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Pending").click()
        cy.wait(6000)

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(pending, totalRecords)
            expect(pending).to.equal(totalRecords);
        })
    });
}

export const stats_DownPaymentPaid_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Down Payment Paid").next().invoke('text').then((text) => {

        const DownPaymentPaid = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Down Payment Paid").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(DownPaymentPaid, totalRecords)
            expect(DownPaymentPaid).to.equal(totalRecords);
        })
    });
}

export const stats_DirectPaymentPaid_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Direct Payment Paid").next().invoke('text').then((text) => {

        const DirectPaymentPaid = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Direct Payment Paid").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(DirectPaymentPaid, totalRecords)
            expect(DirectPaymentPaid).to.equal(totalRecords);
        })
    });
}

export const stats_Shipped_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Shipped").next().invoke('text').then((text) => {

        const Shipped = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Shipped").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(Shipped, totalRecords)
            expect(Shipped).to.equal(totalRecords);
        })
    });
}
export const stats_Delivered_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Delivered").next().invoke('text').then((text) => {

        const Delivered = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Delivered").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(Delivered, totalRecords)
            expect(Delivered).to.equal(totalRecords);
        })
    });
}
export const stats_Completed_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Completed").next().invoke('text').then((text) => {

        const Completed = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Completed").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(Completed, totalRecords)
            expect(Completed).to.equal(totalRecords);
        })
    });
}

export const stats_ReviewedandCompleted_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Reviewed and Completed").next().invoke('text').then((text) => {

        const ReviewedandCompleted = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Reviewed and Completed").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(ReviewedandCompleted, totalRecords)
            expect(ReviewedandCompleted).to.equal(totalRecords);
        })
    });
}
export const stats_Processing_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Processing").next().invoke('text').then((text) => {

        const Processing = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Processing").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(Processing, totalRecords)
            expect(Processing).to.equal(totalRecords);
        })
    });
}



export const stats_Cancelled_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Cancelled").next().invoke('text').then((text) => {

        const Cancelled = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Cancelled").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(Cancelled, totalRecords)
            expect(Cancelled).to.equal(totalRecords);
        })
    });
}

export const stats_BasicInfoProvided_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Basic Info Provided").next().invoke('text').then((text) => {

        const BasicInfoProvided = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Basic Info Provided").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(BasicInfoProvided, totalRecords)
            expect(BasicInfoProvided).to.equal(totalRecords);
        })
    });
}

export const stats_FinanceOptionsProvided_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Finance Options Provided").next().invoke('text').then((text) => {

        const FinanceOptionsProvided = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Finance Options Provided").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(FinanceOptionsProvided, totalRecords)
            expect(FinanceOptionsProvided).to.equal(totalRecords);
        })
    });
}

export const stats_CreditApplicationProvided_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Credit Application Provided").next().invoke('text').then((text) => {

        const CreditApplicationProvided = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Credit Application Provided").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(CreditApplicationProvided, totalRecords)
            expect(CreditApplicationProvided).to.equal(totalRecords);
        })
    });
}

export const stats_DeliveryOptionsProvided_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Delivery Options Provided").next().invoke('text').then((text) => {

        const DeliveryOptionsProvided = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Delivery Options Provided").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(DeliveryOptionsProvided, totalRecords)
            expect(DeliveryOptionsProvided).to.equal(totalRecords);
        })
    });
}
export const stats_WarrantyOptionsProvided_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Warranty Options Provided").next().invoke('text').then((text) => {

        const WarrantyOptionsProvided = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Warranty Options Provided").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(WarrantyOptionsProvided, totalRecords)
            expect(WarrantyOptionsProvided).to.equal(totalRecords);
        })
    });
}

export const stats_ServicesProvided_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Services Provided").next().invoke('text').then((text) => {

        const ServicesProvided = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Services Provided").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(ServicesProvided, totalRecords)
            expect(ServicesProvided).to.equal(totalRecords);
        })
    });
}

export const stats_AwaitingOffer_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Awaiting Offer").next().invoke('text').then((text) => {

        const AwaitingOffer = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Awaiting Offer").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(AwaitingOffer, totalRecords)
            expect(AwaitingOffer).to.equal(totalRecords);
        })
    });
}

export const stats_AcceptedOffer_order = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();

    cy.contains("Accepted Offer").next().invoke('text').then((text) => {

        const AcceptedOffer = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Accepted").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(AcceptedOffer, totalRecords)
            expect(AcceptedOffer).to.equal(totalRecords);
        })
    });
}
export const stats_StipulationProvided = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/order`).as('Orders found Successfully');
    cy.contains("Total Orders").parent().parent().parent().click();
    cy.wait(30000)
    cy.contains("Stipulations Provided").next().invoke('text').then((text) => {

        const stipulation = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Stipulations Provided").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(stipulation, totalRecords)
            expect(stipulation).to.equal(totalRecords);
        })
    });
}








