"use strict";
exports.__esModule = true;
exports.Course = void 0;
var fs = require("fs");
var data = "New File Contents";
var Course = /** @class */ (function () {
    function Course() {
    }
    Course.prototype.myfuntion = function () {
        data += "Shubham Rekkawar";
        fs.writeFile("temp.txt", data, function (err) {
            if (err)
                console.log(err);
            console.log("Successfully Written to File.");
        });
    };
    return Course;
}());
exports.Course = Course;
