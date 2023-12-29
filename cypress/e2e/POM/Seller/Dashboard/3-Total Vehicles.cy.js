/// <reference types="cypress" />
import { backendURL } from "../extras"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000


export const TotalVehicle_Button = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicle found Successfully');

    let totalvehicle;
    let allSum = 0;

    cy.contains("Total Vehicles").next().invoke('text').then((text) => {
        totalvehicle = parseInt(text);

        cy.contains("Total Vehicles").parent().parent().parent().click();

                  //Available
                     cy.contains("Available").next().invoke('text').then((text) => {
                    allSum += parseInt(text)

                    //In Transit Vehicles
                    cy.contains("In Transit").next().invoke('text').then((text) => {
                     allSum += parseInt(text)

                  //Delivered
                   cy.contains("Delivered").next().invoke('text').then((text) => {
                     allSum += parseInt(text)

                 //Received Vehicles
                    cy.contains("Received By Customer").next().invoke('text').then((text) => {
                    allSum += parseInt(text)
                    cy.log(totalvehicle, allSum)
                    expect(totalvehicle).to.equal(allSum)
                 });
            })
                
          })
        })
    });
    cy.wait("@Vehicle found Successfully").its('response.statusCode').should('eq', 201);
}

export const stats_Active_vehicle = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicles found Successfully');
    cy.contains("Total Vehicles").parent().parent().parent().click();

    cy.contains("Active").next().invoke('text').then((text) => {

        const active = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Active").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(active, totalRecords)
            expect(active).to.equal(totalRecords);
        })
    });
}

export const stats_Blocked_vehicle = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicles found Successfully');
    cy.contains("Total Vehicles").parent().parent().parent().click();

    cy.contains("Blocked").next().invoke('text').then((text) => {

        const block = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Block").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(block, totalRecords)
            expect(block).to.equal(totalRecords);
        })
    });
}

export const stats_InDeal_vehicle = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicles found Successfully');
    cy.contains("Total Vehicles").parent().parent().parent().click();

    cy.contains("In Deal").next().invoke('text').then((text) => {

        const InDeal = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("In Deal").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(InDeal, totalRecords)
            expect(InDeal).to.equal(totalRecords);
        })
    });
}

export const stats_Sold_vehicle = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicles found Successfully');
    cy.contains("Total Vehicles").parent().parent().parent().click();

    cy.contains("Sold").next().invoke('text').then((text) => {

        const sold = parseInt(text);

        cy.get('[placeholder="Filter by Status"]').click()
        cy.get(".mantine-Select-dropdown").contains("Sold").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(sold, totalRecords)
            expect(sold).to.equal(totalRecords);
        })
    });
}


export const stats_Available_vehicle = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicles found Successfully');
    cy.contains("Total Vehicles").parent().parent().parent().click();

    cy.contains("Available").next().invoke('text').then((text) => {

        const available = parseInt(text);

        cy.get('[placeholder="Filter by Phase"]').click()
        cy.get(".mantine-Select-dropdown").contains("Blocked").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(available, totalRecords)
            expect(available).to.equal(totalRecords);
        })
    });
}

export const stats_InTransit_vehicle = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicles found Successfully');
    cy.contains("Total Vehicles").parent().parent().parent().click();

    cy.contains("In Transit").next().invoke('text').then((text) => {

        const intransit = parseInt(text);

        cy.get('[placeholder="Filter by Phase"]').click()
        cy.get(".mantine-Select-dropdown").contains("In Transit").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(intransit, totalRecords)
            expect(intransit).to.equal(totalRecords);
        })
    });
}
export const stats_Delivered_vehicle = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicles found Successfully');
    cy.contains("Total Vehicles").parent().parent().parent().click();

    cy.contains("Delivered").next().invoke('text').then((text) => {

        const Delivered = parseInt(text);

        cy.get('[placeholder="Filter by Phase"]').click()
        cy.get(".mantine-Select-dropdown").contains("Delivered").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(Delivered, totalRecords)
            expect(Delivered).to.equal(totalRecords);
        })
    });
}

export const stats_ReceivedByCustomer_vehicle = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/vehicle`).as('Vehicles found Successfully');
    cy.contains("Total Vehicles").parent().parent().parent().click();

    cy.contains("Received By Customer").next().invoke('text').then((text) => {

        const ReceivedByCustomer = parseInt(text);

        cy.get('[placeholder="Filter by Phase"]').click()
        cy.get(".mantine-Select-dropdown").contains("Received By Customer").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(ReceivedByCustomer, totalRecords)
            expect(ReceivedByCustomer).to.equal(totalRecords);
        })
    });
}









