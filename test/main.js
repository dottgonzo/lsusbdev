"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = __importDefault(require("../index"));
describe("main test", function () {
    this.timeout(50000);
    it("should return an object", function (done) {
        (0, index_1.default)()
            .then(function (data) {
            (0, chai_1.expect)(data).to.be.ok;
            (0, chai_1.expect)(data).to.be.an("array");
            //     expect(data[0].dev).to.be.a("string");
            done();
        })
            .catch(function (err) {
            done(err);
        });
    });
});
//# sourceMappingURL=main.js.map