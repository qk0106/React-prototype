import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { newStore, readStore } from "ReduxStoreManager";
import { registerInstance } from "ReactInstancesManager";
import { reducer } from "GitInfoContainer/Src/reducer";
import configureStore from "redux-mock-store";
import dynamicMiddlewares from "redux-dynamic-middlewares";
import { GitInfoSubContainer, refreshGitInfo, REFRESH_GIT_INFO } from "GitInfoSubContainer";
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
    let store = getStore(instanceProps, reducer);
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

    it("+++ check map stateProps correctly", () => {
        let { wrapper } = preset();
        let presenterProps = wrapper.find(GitSizePresenter).props();
        expect(presenterProps.gitSize).toEqual("fetching git info");
        expect(presenterProps.refreshCount).toEqual({ count: 1 });
        expect(presenterProps.gitUrl).toEqual("MockGitUrl");
    });

    it("+++ check store dispatch correct action - refreshGitInfo ", () => {
        let { instanceProps, gitUrl } = preset();
        let fakeStore = mockStore();
        fakeStore.dispatch(refreshGitInfo(instanceProps.instanceId, { gitUrl: gitUrl }));
        let actions = fakeStore.getActions();
        console.log(actions);
        expect(actions[0].type).toBe(REFRESH_GIT_INFO);
    });
});
