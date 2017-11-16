import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { newStore, readStore } from "ReduxStoreManager";
import { registerInstance } from "ReactInstancesManager";
import { reducer } from "GitInfoContainer/Src/reducer";
import configureStore from "redux-mock-store";
import dynamicMiddlewares from "redux-dynamic-middlewares";
import { GitInfoSubContainer, REFRESH_GIT_INFO } from "GitInfoSubContainer";
import { GitSizePresenter } from "GitSizePresenter";

const mockStore = configureStore([dynamicMiddlewares]);

const getStore = (instanceProps, reducer) => {
    newStore();
    registerInstance(instanceProps, reducer);
    return readStore();
};

const preset = () => {
    let instanceProps = {
        instanceSet: "MockInstanceSet",
        instanceId: "MockInstanceId_112138"
    };
    let gitUrl = "MockGitUrl";
    let realStore = getStore(instanceProps, reducer);
    let store = mockStore(realStore.getState());
    let wrapper = mount(
        <Provider store={store}>
            <GitInfoSubContainer instanceProps={instanceProps} gitUrl={gitUrl} />
        </Provider>
    );
    return { wrapper, store, instanceProps, gitUrl };
};

describe(">>>GitInfoSubContainer Unit Testing", () => {
    it("+++ check render 1 GitInfoSubContainer", () => {
        let { wrapper } = preset();
        expect(wrapper.find(GitInfoSubContainer).length).toEqual(1);
    });

    it("+++ check render 1 GitSizePresenter", () => {
        let { wrapper } = preset();
        expect(wrapper.find(GitSizePresenter).length).toEqual(1);
    });

    it("+++ check map dispatchProps correctly", () => {
        let { wrapper } = preset();
        let initWrapperProps = wrapper
            .find(GitInfoSubContainer)
            .childAt(0)
            .props();
        expect(initWrapperProps.gitSize).toEqual(0);
        expect(initWrapperProps.refreshCount).toEqual({ count: 0 });
        expect(initWrapperProps.gitUrl).toEqual("MockGitUrl");
    });

    it("+++ check map stateProps correctly", () => {
        let { wrapper, store } = preset();
        let initWrapperProps = wrapper
            .find(GitInfoSubContainer)
            .childAt(0)
            .props();
        // init is invoked defaultly
        initWrapperProps.onClick();
        let actions = store.getActions();
        expect(actions[0].type).toBe(REFRESH_GIT_INFO);
        expect(actions[2].type).toBe(REFRESH_GIT_INFO);
    });
});
