"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var react_redux_1 = require("react-redux");
var ReduxStoreManager_1 = require("ReduxStoreManager");
var ReactInstancesManager_1 = require("ReactInstancesManager");
var reducer_1 = require("GitInfoContainer/Src/reducer");
var redux_mock_store_1 = require("redux-mock-store");
var GitInfoSubContainer_1 = require("GitInfoSubContainer");
var GitSizePresenter_1 = require("GitSizePresenter");
describe(">>>GitInfoSubContainer Unit Testing", function () {
    var instanceProps, gitUrl, store, mockStore, fakeStore, wrapper;
    beforeEach(function () {
        instanceProps = {
            instancesProp: "MockInstancesProp",
            instanceId: "MockInstanceId_112138"
        };
        gitUrl = "MockGitUrl";
        ReactInstancesManager_1.registerInstance(instanceProps, reducer_1.reducer);
        store = ReduxStoreManager_1.readStore();
        mockStore = redux_mock_store_1.default();
        fakeStore = mockStore(store.getState());
        wrapper = enzyme_1.mount(React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(GitInfoSubContainer_1.GitInfoSubContainer, { instanceProps: instanceProps, gitUrl: gitUrl })));
    });
    it("+++ check render 1 GitInfoSubContainer", function () {
        expect(wrapper.find(GitInfoSubContainer_1.GitInfoSubContainer).length).toEqual(1);
    });
    it("+++ check render 1 GitSizePresenter", function () {
        expect(wrapper.find(GitSizePresenter_1.GitSizePresenter).length).toEqual(1);
    });
    it("+++ check store dispatch correct action - refreshGitInfo ", function () {
        var actions;
        fakeStore.dispatch(GitInfoSubContainer_1.refreshGitInfo(instanceProps.instanceId, { gitUrl: gitUrl }));
        actions = fakeStore.getActions();
        expect(actions[0].type).toBe("REFRESH_GIT_INFO");
    });
});
