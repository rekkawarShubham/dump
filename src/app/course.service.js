"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CourseService = void 0;
var mock_course_1 = require("./courses/mock-course");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var CourseService = /** @class */ (function () {
    function CourseService(MessagesService) {
        this.MessagesService = MessagesService;
    }
    CourseService.prototype.getCourses = function () {
        this.MessagesService.add("Fectech course from services");
        return rxjs_1.of(mock_course_1.COURSES);
    };
    CourseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
