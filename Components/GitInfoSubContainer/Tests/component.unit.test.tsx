import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { readStore } from "ReduxStoreManager";
import { registerInstance } from "ReactInstancesManager";
import { reducer } from "GitInfoContainer/Src/reducer";
import configureStore from "redux-mock-store";
import { GitInfoSubContainer, refreshGitInfo } from "GitInfoSubContainer";
import { GitSizePresenter } from "GitSizePresenter";

const preset = () => {
    let instanceProps = {
        instancesProp: "MockInstancesProp",
        instanceId: "MockInstanceId_112138"
    };
    let gitUrl = "MockGitUrl";
    registerInstance(instanceProps, reducer);
    let store = readStore();
    let mockStore = configureStore();
    let fakeStore = mockStore(store.getState());
    let wrapper = mount(
        <Provider store={store}>
            <GitInfoSubContainer instanceProps={instanceProps} gitUrl={gitUrl} />
        </Provider>
    );
    return { wrapper, fakeStore, instanceProps, gitUrl };
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

    it("+++ check store dispatch correct action - refreshGitInfo ", () => {
        let { fakeStore, instanceProps, gitUrl } = preset();
        fakeStore.dispatch(refreshGitInfo(instanceProps.instanceId, { gitUrl: gitUrl }));
        let actions = fakeStore.getActions();
        expect(actions[0].type).toBe("REFRESH_GIT_INFO");
    });
});
