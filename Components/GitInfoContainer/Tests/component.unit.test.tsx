import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { readStore } from "ReduxStoreManager";
import { GitInfoContainer } from "GitInfoContainer";
import { GitInfoSubContainer } from "GitInfoSubContainer";

const preset = () => {
    let store = readStore();
    let wrapper = mount(
        <Provider store={store}>
            <GitInfoContainer
                instanceIdPrefix="UniTest"
                gitUrl="https://api.github.com/repos/qk0106/React-prototype"
            />
        </Provider>
    );
    return { wrapper };
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

    it("+++ check instanceSet", () => {
        let { wrapper } = preset();
        expect(wrapper.find(GitInfoSubContainer).prop("instanceProps").instanceSet).toEqual(
            "GitInfoContainers"
        );
    });

    it("+++ check instanceId", () => {
        let { wrapper } = preset();
        expect(wrapper.find(GitInfoSubContainer).prop("instanceProps").instanceId).toMatch(
            /UniTest_/
        );
    });
});
