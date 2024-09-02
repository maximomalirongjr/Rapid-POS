/// <reference types="cypress" />

import data from '../fixtures/data.json';
import loginModule from '../modules/LoginModule';


describe('QA-Engineer-Take-Home-Evaluation', () => {
    beforeEach(() => {
        cy.wait(3000);
        cy.log('Waiting for the api to be available.')
    });

    it('TC-PR-001_Valid Login', () => {
        loginModule.login(data.validLogin);
    });

    it('TC-PR-002_Login with Case-Sensitive Username', () => {
        loginModule.login(data.validLoginUpperCase);
    });

    it('TC-PR-003_Invalid Username format', () => {
        loginModule.login(data.invalidUsernameFormat);
    });

    it('TC-PR-004_Empty Username', () => {
        loginModule.login(data.emptyUsername);
    });

    it('TC-PR-005_Missing Username', () => {
        loginModule.missingUsername(data.missingUsername);
    });

    it('TC-PR-006_Empty Password', () => {
        loginModule.login(data.emptyPassword);
    });

    it('TC-PR-007_Missing Password', () => {
        loginModule.missingPassword(data.missingPassword);
    });

    it('TC-PR-008_Empty Username and Password', () => {
        loginModule.login(data.emptyUsernameAndPassword);
    });

    it('TC-PR-009_Missing Username and Password', () => {
        loginModule.missingUsernameAndPassword(data.missingUsernameAndPassword);
    });

    it('TC-PR-010_Invalid Login', () => {
        loginModule.login(data.invalidLogin);
    });

    it('TC-PR-011_Malformed JSON Response', () => {
        loginModule.login(data.malformedToken);
    });

    it('TC-PR-012_Server Error', () => {
        loginModule.login(data.serverError);
    });

    it('TC-PR-013_Slow Response', () => {
        loginModule.login(data.slowResponse);
    });

    it('TC-PR-014_SQL Injection Attempt', () => {
        loginModule.login(data.sqlInjectionAttempt);
    });

    it('TC-PR-015_Different Content Types', () => {
        loginModule.login(data.differentContentType);
    });
})

describe('QA-Engineer-Take-Home-Evaluation', () => {
    it('TC-PR-016_Brute Force Attack Mitigation', () => {
        loginModule.login(data.validLogin);
    });

    it('TC-PR-016_Brute Force Attack Mitigation', () => {
        loginModule.login(data.bruteForceAttack);
    });
})