import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { readStore } from "ReduxStoreManager";
import { GitInfoContainer, instanceSet } from "GitInfoContainer";
import { GitInfoSubContainer } from "GitInfoSubContainer";

const preset = () => {
    let store = readStore();
    let instanceIdPrefix = "mockInstanceIdPrefix";
    let gitUrl = "mockGitUrl";
    let wrapper = mount(
        <Provider store={store}>
            <GitInfoContainer instanceIdPrefix={instanceIdPrefix} gitUrl={gitUrl} />
        </Provider>
    );
    return { wrapper, instanceIdPrefix, gitUrl };
};

describe(">>>GitInfoContainer Unit Testing", () => {
    it("+++ check render 1 GitInfoContainer", () => {
        let { wrapper } = preset();
        expect(wrapper.find(GitInfoContainer).length).toEqual(1);
    });

    it("+++ check render 1 GitInfoSubContainer", () => {
        let { wrapper } = preset();
        expect(wrapper.find(GitInfoSubContainer).length).toEqual(1);
    });

    it("+++ check instanceProps", () => {
        let { wrapper, instanceIdPrefix } = preset();
        let instanceProps = wrapper.find(GitInfoSubContainer).prop("instanceProps");
        expect(instanceProps.instanceSet).toEqual(instanceSet);
        expect(instanceProps.instanceId).toMatch(new RegExp(instanceIdPrefix + "_"));
    });

    it("+++ check gitUrl", () => {
        let { wrapper, gitUrl } = preset();
        expect(wrapper.find(GitInfoSubContainer).prop("gitUrl")).toEqual(gitUrl);
    });
});
