import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { readStore } from "ReduxStoreManager";
import { GitInfor } from "GitInfor";
import { GitInfo } from "GitInfo";

describe(">>>GitInfor Unit Testing", () => {
    let store, wrapper;

    beforeEach(() => {
        store = readStore();
        wrapper = mount(
            <Provider store={store}>
                <GitInfor
                    instanceIdPrefix="UniTest"
                    gitUrl="https://api.github.com/repos/qk0106/React-prototype"
                />
            </Provider>
        );
    });

    it("+++ check render 1 GitInfor", () => {
        expect(wrapper.find(GitInfor).length).toEqual(1);
    });

    it("+++ check render 1 GitInfo", () => {
        expect(wrapper.find(GitInfo).length).toEqual(1);
    });

    it("+++ check instanceProps", () => {
        expect(wrapper.find(GitInfo).prop("instanceProps").instancesProp).toEqual("GitInfors");
    });

    it("+++ check instanceId", () => {
        expect(wrapper.find(GitInfo).prop("instanceProps").instanceId).toMatch(/UniTest_/);
    });
});
