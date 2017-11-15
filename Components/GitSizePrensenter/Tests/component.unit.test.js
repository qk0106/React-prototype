"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var GitSize_1 = require("GitSize");
describe(">>>GitSize Unit Testing", function () {
    var wrapper, mockFn;
    beforeEach(function () {
        mockFn = jest.fn();
        wrapper = enzyme_1.shallow(React.createElement(GitSize_1.GitSize, { gitSize: 0, refreshCount: 0, onClick: mockFn }));
    });
    it("+++ check render 2 p tags", function () {
        expect(wrapper.find("p").length).toEqual(2);
    });
    it("+++ check render 1 button tag", function () {
        expect(wrapper.find("button").length).toEqual(1);
    });
});
