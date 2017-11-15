"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var react_redux_1 = require("react-redux");
var ReduxStoreManager_1 = require("ReduxStoreManager");
var GitInfoContainer_1 = require("GitInfoContainer");
var GitInfoSubContainer_1 = require("GitInfoSubContainer");
var preset = function () {
    var store = ReduxStoreManager_1.readStore();
    var wrapper = enzyme_1.mount(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(GitInfoContainer_1.GitInfoContainer, { instanceIdPrefix: "UniTest", gitUrl: "https://api.github.com/repos/qk0106/React-prototype" })));
    return { wrapper: wrapper };
};
describe(">>>GitInfoContainer Unit Testing", function () {
    it("+++ check render 1 GitInfoContainer", function () {
        var wrapper = preset().wrapper;
        expect(wrapper.find(GitInfoContainer_1.GitInfoContainer).length).toEqual(1);
    });
    it("+++ check render 1 GitInfoSubContainer", function () {
        var wrapper = preset().wrapper;
        expect(wrapper.find(GitInfoSubContainer_1.GitInfoSubContainer).length).toEqual(1);
    });
    it("+++ check instanceProps", function () {
        var wrapper = preset().wrapper;
        expect(wrapper.find(GitInfoSubContainer_1.GitInfoSubContainer).prop("instanceProps").instancesProp).toEqual("GitInfoContainers");
    });
    it("+++ check instanceId", function () {
        var wrapper = preset().wrapper;
        expect(wrapper.find(GitInfoSubContainer_1.GitInfoSubContainer).prop("instanceProps").instanceId).toMatch(/UniTest_/);
    });
});
