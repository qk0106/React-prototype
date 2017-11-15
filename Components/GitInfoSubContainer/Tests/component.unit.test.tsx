import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { readStore } from "ReduxStoreManager";
import { registerInstance } from "ReactInstancesManager";
import { reducer } from "GitInfoContainer/Src/reducer";
import configureStore from "redux-mock-store";
import { GitInfoSubContainer, refreshGitInfo } from "GitInfoSubContainer";
import { GitSizePresenter } from "GitSizePresenter";

describe(">>>GitInfoSubContainer Unit Testing", () => {
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
                <GitInfoSubContainer instanceProps={instanceProps} gitUrl={gitUrl} />
            </Provider>
        );
    });

    it("+++ check render 1 GitInfoSubContainer", () => {
        expect(wrapper.find(GitInfoSubContainer).length).toEqual(1);
    });

    it("+++ check render 1 GitSizePresenter", () => {
        expect(wrapper.find(GitSizePresenter).length).toEqual(1);
    });

    it("+++ check store dispatch correct action - refreshGitInfo ", () => {
        let actions;
        fakeStore.dispatch(refreshGitInfo(instanceProps.instanceId, { gitUrl: gitUrl }));
        actions = fakeStore.getActions();
        expect(actions[0].type).toBe("REFRESH_GIT_INFO");
    });
});
