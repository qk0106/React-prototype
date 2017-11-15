import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { readStore } from "ReduxStoreManager";
import { registerInstance } from "ReactInstancesManager";
import { reducer } from "GitInfor/Src/reducer";
import configureStore from "redux-mock-store";
import { GitInfo, refreshGitInfo } from "GitInfo";
import { GitSize } from "GitSize";

describe(">>>GitInfo Unit Testing", () => {
    let instanceProps, gitUrl, store, mockStore, fakeStore, wrapper;

    beforeEach(() => {
        instanceProps = {
            instancesProp: "MockInstancesProp",
            instanceId: "MockInstanceId_112138"
        };
        gitUrl = "MockGitUrl";
        registerInstance(instanceProps, reducer);
        store = readStore();
        mockStore = configureStore();
        fakeStore = mockStore(store.getState());
        wrapper = mount(
            <Provider store={store}>
                <GitInfo instanceProps={instanceProps} gitUrl={gitUrl} />
            </Provider>
        );
    });

    it("+++ check render 1 GitInfo", () => {
        expect(wrapper.find(GitInfo).length).toEqual(1);
    });

    it("+++ check render 1 GitSize", () => {
        expect(wrapper.find(GitSize).length).toEqual(1);
    });

    it("+++ check store dispatch correct action - refreshGitInfo ", () => {
        let actions;
        fakeStore.dispatch(refreshGitInfo(instanceProps.instanceId, { gitUrl: gitUrl }));
        actions = fakeStore.getActions();
        expect(actions[0].type).toBe("REFRESH_GIT_INFO");
    });
});
