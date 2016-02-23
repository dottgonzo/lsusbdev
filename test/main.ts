import Usb = require("../index");
import * as chai from "chai";
let expect = chai.expect;

describe("netw object", function() {
    this.timeout(50000);

    it("should return an object", function(done) {

        Usb().then(function(data) {

            expect(data).to.be.ok;
            expect(data).to.be.an("array");
            //     expect(data[0].dev).to.be.a("string");
            done();
        }).catch(function(err) {
            throw err;
            done();
        });

    });

});