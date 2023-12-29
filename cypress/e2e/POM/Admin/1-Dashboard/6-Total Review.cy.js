/// <reference types="cypress" />
import { backendURL } from "../../Seller/extras"
    //// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000


export const TotalReviews_Button = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/review`).as('Reviews found Successfully');

    let totalreview;
    let allSum = 0;

    cy.contains("Total Reviews").next().invoke('text').then((text) => {
        totalreview = parseInt(text);

        cy.contains("Total Reviews").parent().parent().parent().click();


        //Positive Reviews
        cy.contains("Positive Reviews").next().invoke('text').then((text) => {

            allSum += parseInt(text)

            //Negative Reviews
            cy.contains("Negative Reviews").next().invoke('text').then((text) => {

                allSum += parseInt(text)
                cy.log(totalreview, allSum)
                expect(totalreview).to.equal(allSum)

            })
        })
    });
    cy.wait("@Reviews found Successfully").its('response.statusCode').should('eq', 200);
}

export const stats_PositiveReviews = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/review`).as('Reviews found Successfully');
    cy.contains("Total Reviews").parent().parent().parent().click();

    cy.contains("Positive Reviews").next().invoke('text').then((text) => {

        const positivereview  = parseInt(text);

    ///filters by status

        // cy.get('[placeholder="Filter by User Type"]').click()
        // cy.get(".mantine-Select-dropdown").contains("Positive Reviews").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(positivereview, totalRecords)
            expect(positivereview).to.equal(totalRecords);
        })
    });
    cy.wait("@Reviews found Successfully").its('response.statusCode').should('eq', 200);
}

export const stats_NegativeReviews = () => {

    cy.contains("1. Dashboard").click()
    cy.intercept('GET', `${backendURL}/review`).as('Reviews found Successfully');
    cy.contains("Total Reviews").parent().parent().parent().click();

    cy.contains("Negative Reviews").next().invoke('text').then((text) => {

        const negativereview  = parseInt(text);

    ///filters by status
        // cy.get('[placeholder="Filter by User Type"]').click()
        // cy.get(".mantine-Select-dropdown").contains("Negative Reviews").click()

        cy.get(".rdt_Pagination").contains("of", { matchCase: true }).invoke("text").then((text) => {
            const totalRecords = parseInt(text.split(" ")[2]);
            cy.log(negativereview, totalRecords)
            expect(negativereview).to.equal(totalRecords);
        })
    });
    cy.wait("@Reviews found Successfully").its('response.statusCode').should('eq', 200);
}


