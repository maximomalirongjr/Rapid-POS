/// <reference types="cypress" />

import loginChecking from "../checking/LoginChecking.js";
import constant from "../common/constant.js";

class loginModule {
    login(model) {
        //invoking Login endpoint for complete request body
        cy.invokeLoginEndpoint(model).then((apiResponse) => {

            //checking for all valid scenarios
            if (model.testType != constant.invalid) {

                //checking the response model for valid scenarios
                loginChecking.checkLoginResponse(model, apiResponse);
            }

            //checking for all invalid scenarios
            else {

                //checking the response model for invalid scenarios
                loginChecking.checkInvalidLoginResponse(model, apiResponse);
            }
        });
    }

    missingUsername(model) {
        //invoking Login endpoint for missing username property in the request body
        cy.invokeMissingUsernameEndpoint(model).then((apiResponse) => {

            //checking the response model for missing username property
            loginChecking.checkInvalidLoginResponse(model, apiResponse);
        });
    }

    missingPassword(model) {
        //invoking Login endpoint for missing password property in the request body
        cy.invokeMissingPasswordEndpoint(model).then((apiResponse) => {

            //checking the response model for missing password property
            loginChecking.checkInvalidLoginResponse(model, apiResponse);
        });
    }

    missingUsernameAndPassword(model) {
        //invoking Login endpoint for missing username and password property in the request body
        cy.invokeMissingUsernameAndPassword(model).then((apiResponse) => {

            //checking the response model for missing username and password property
            loginChecking.checkInvalidLoginResponse(model, apiResponse);
        });
    }
}

export default new loginModule();