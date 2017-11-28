import * as React from "react";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { newStore, readStore } from "ReduxStoreManager";
import { createInstance } from "ReduxInstanceHelper";
import { reducer } from "GitInfoAppContainer/Src/reducer";
import { collectMiddlewares } from "ReduxMiddlewareManager";
import {
    GitInfoContainer,
    ON_REFRESH_CLICK,
    REFRESH_GIT_INFO,
    FETCH_GIT_INFO
} from "GitInfoContainer";
import { GitInfoPresenter } from "GitInfoPresenter";

const mockStore = configureStore([collectMiddlewares()]);

const getStore = (instanceIdPrefix, componentName, reducer) => {
    newStore();
    const instanceId = createInstance(instanceIdPrefix, componentName, reducer);
    const realStore = readStore();
    return { instanceId, realStore };
};

const preset = () => {
    let instanceIdPrefix = "MockInstanceIdPrefix";
    let componentName = "MockComponentName";
    let gitUrl = "MockGitUrl";
    let { instanceId, realStore } = getStore(instanceIdPrefix, componentName, reducer);
    let store = mockStore(realStore.getState());
    let wrapper = mount(
        <Provider store={store}>
            <GitInfoContainer instanceId={instanceId} gitUrl={gitUrl} />
        </Provider>
    );
    return { wrapper, store, instanceId, gitUrl };
};

describe(">>>GitInfoSubContainer Unit Testing", () => {
    it("+++ check render 1 GitInfoContainer", () => {
        let { wrapper } = preset();
        expect(wrapper.find(GitInfoContainer).length).toEqual(1);
    });

    it("+++ check render 1 InitWrapper", () => {
        let { wrapper } = preset();
        expect(wrapper.find("InitWrapper").length).toEqual(1);
    });

    it("+++ check render 1 GitInfoPresenter", () => {
        let { wrapper } = preset();
        expect(wrapper.find(GitInfoPresenter).length).toEqual(1);
    });

    it("+++ check map dispatchProps correctly", () => {
        let { wrapper } = preset();
        let initWrapperProps = wrapper
            .find(GitInfoContainer)
            .childAt(0)
            .props();
        expect(initWrapperProps.gitSize).toEqual(0);
        expect(initWrapperProps.refreshCount).toEqual({ count: 0 });
        expect(initWrapperProps.gitUrl).toEqual("MockGitUrl");
    });

    it("+++ check map stateProps correctly", () => {
        let { wrapper, store } = preset();
        let initWrapperProps = wrapper
            .find(GitInfoContainer)
            .childAt(0)
            .props();
        initWrapperProps.onClick();
        let actions = store.getActions();
        expect(actions[0].type).toBe(ON_REFRESH_CLICK);
        expect(actions[1].type).toBe(REFRESH_GIT_INFO);
        expect(actions[2].type).toBe(FETCH_GIT_INFO);
    });
});
