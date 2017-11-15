"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var react_redux_1 = require("react-redux");
var ReduxStoreManager_1 = require("ReduxStoreManager");
var GitInfor_1 = require("GitInfor");
var GitInfo_1 = require("GitInfo");
describe(">>>GitInfor Unit Testing", function () {
    var store, wrapper;
    beforeEach(function () {
        store = ReduxStoreManager_1.readStore();
        wrapper = enzyme_1.mount(React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(GitInfor_1.GitInfor, { instanceIdPrefix: "UniTest", gitUrl: "https://api.github.com/repos/qk0106/React-prototype" })));
    });
    it("+++ check render 1 GitInfor", function () {
        console.log(JSON.stringify(wrapper, undefined, 4));
        expect(wrapper.find(GitInfor_1.GitInfor).length).toEqual(1);
    });
    it("+++ check render 1 GitInfo", function () {
        expect(wrapper.find(GitInfo_1.GitInfo).length).toEqual(1);
    });
    it("+++ check instanceProps", function () {
        expect(wrapper.find(GitInfo_1.GitInfo).prop("instanceProps").instancesProp).toEqual("GitInfors");
    });
    it("+++ check instanceId", function () {
        expect(wrapper.find(GitInfo_1.GitInfo).prop("instanceProps").instanceId).toMatch(/UniTest_/);
    });
});
