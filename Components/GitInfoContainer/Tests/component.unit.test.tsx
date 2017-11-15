import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { readStore } from "ReduxStoreManager";
import { GitInfoContainer } from "GitInfoContainer";
import { GitInfoSubContainer } from "GitInfoSubContainer";

describe(">>>GitInfoContainer Unit Testing", () => {
    let store, wrapper;

    beforeEach(() => {
        store = readStore();
        wrapper = mount(
            <Provider store={store}>
                <GitInfoContainer
                    instanceIdPrefix="UniTest"
                    gitUrl="https://api.github.com/repos/qk0106/React-prototype"
                />
            </Provider>
        );
    });

    it("+++ check render 1 GitInfoContainer", () => {
        expect(wrapper.find(GitInfoContainer).length).toEqual(1);
    });

    it("+++ check render 1 GitInfoSubContainer", () => {
        expect(wrapper.find(GitInfoSubContainer).length).toEqual(1);
    });

    it("+++ check instanceProps", () => {
        expect(wrapper.find(GitInfoSubContainer).prop("instanceProps").instancesProp).toEqual(
            "GitInfoContainers"
        );
    });

    it("+++ check instanceId", () => {
        expect(wrapper.find(GitInfoSubContainer).prop("instanceProps").instanceId).toMatch(
            /UniTest_/
        );
    });
});
