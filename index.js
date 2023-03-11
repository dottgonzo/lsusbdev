"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function lsusbdev(e) {
    return new Promise(function (resolve, reject) {
        let callbacked = false;
        let timo = setTimeout(function () {
            if (!callbacked) {
                reject("timeout error");
            }
        }, 50000);
        (0, child_process_1.exec)(__dirname + "/list.sh", function (error, stdout, stderr) {
            callbacked = true;
            clearTimeout(timo);
            if (error && error != null) {
                reject(error);
            }
            else if (stderr) {
                reject(stderr);
            }
            else {
                resolve(JSON.parse(stdout + ""));
            }
        });
    });
}
exports.default = lsusbdev;
//# sourceMappingURL=index.js.map