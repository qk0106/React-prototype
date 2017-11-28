import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { readStore } from "ReduxStoreManager";
import { GitInfoAppContainer } from "GitInfoAppContainer";
import { GitInfoContainer } from "GitInfoContainer";

const preset = () => {
    let store = readStore();
    let instanceIdPrefix = "MockInstanceIdPrefix";
    let gitUrl = "MockGitUrl";
    let wrapper = mount(
        <Provider store={store}>
            <GitInfoAppContainer instanceIdPrefix={instanceIdPrefix} gitUrl={gitUrl} />
        </Provider>
    );
    return { wrapper, instanceIdPrefix, gitUrl };
};

describe(">>>GitInfoAppContainer Unit Testing", () => {
    it("+++ check render 1 GitInfoAppContainer", () => {
        let { wrapper } = preset();
        expect(wrapper.find(GitInfoAppContainer).length).toEqual(1);
    });

    it("+++ check render 1 InstanceWrapper", () => {
        let { wrapper } = preset();
        expect(wrapper.find("InstanceWrapper").length).toEqual(1);
    });

    it("+++ check render 1 GitInfoContainer", () => {
        let { wrapper } = preset();
        expect(wrapper.find(GitInfoContainer).length).toEqual(1);
    });

    it("+++ check props passing - instanceId", () => {
        let { wrapper, instanceIdPrefix } = preset();
        let instanceId = wrapper.find(GitInfoContainer).prop("instanceId");
        expect(instanceId).toMatch(new RegExp(instanceIdPrefix + "_"));
    });

    it("+++ check props passing - gitUrl", () => {
        let { wrapper, gitUrl } = preset();
        expect(wrapper.find(GitInfoContainer).prop("gitUrl")).toEqual(gitUrl);
    });
});
