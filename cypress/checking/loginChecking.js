/// <reference types="cypress" />
import constant from "../common/constant.js";

class loginChecking {
    checkLoginResponse(model, response) {
        //function to validate token
        function isJWT(token) {
            const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;
            return jwtRegex.test(token);
        }
        
        //validating the response status code
        expect(model.statusCode).to.equal(response.status);

        if (model.testType == constant.valid) {
            //validating the response body
            expect(response.body).to.have.property('token');

            //validating the response token
            expect(true).to.equal(isJWT(response.body.token));
        }

        //validating the response time
        if (model.testType == constant.slowResponse) {
            expect(response.duration).to.be.greaterThan(2000);
        } else {
            expect(response.duration).to.be.lessThan(2000);
        }
    }

    checkInvalidLoginResponse(model, response) {
        //validating the response status code
        expect(model.statusCode).to.equal(response.status);

        //validating the response time
        expect(response.duration).to.be.lessThan(2000);

        //checking for Bad Request type error
        if (model.statusCode <= 400) {
            //validating the response body
            expect(response.body).to.have.property('error');
            expect(model.errorMessage).to.equal(response.body.error);
        }

        //checking for Brute For Attack
        if (model.statusCode == 429) {
            expect(model.errorMessage).to.equal(response.body.error);
        }
    }
}

export default new loginChecking();