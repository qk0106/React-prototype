import * as React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { readStore } from "ReduxStoreManager";
import { GitInfor } from "../Src/component";
import { GitInfo } from "GitInfo";
import { GitSize } from "GitSize";

describe(">>>GitInfo Unit Testing", () => {
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

    it("+++ render 1 GitInfor", () => {
        expect(wrapper.find(GitInfor).length).toEqual(1);
    });

    it("+++ render 1 GitInfo", () => {
        expect(wrapper.find(GitInfo).length).toEqual(1);
    });

    it("+++ render 1 GitSize", () => {
        expect(wrapper.find(GitSize).length).toEqual(1);
    });

    // it("+++ check Prop matches with initialState", () => {
    //     expect(wrapper.find(GitInfo).prop("output")).toEqual(initialState.output);
    // });

    // it("+++ check action on dispatching ", () => {
    //     let action;
    //     store.dispatch(addInputs(500));
    //     store.dispatch(subtractInputs(100));
    //     action = store.getActions();
    //     expect(action[0].type).toBe("ADD_INPUTS");
    //     expect(action[1].type).toBe("SUBTRACT_INPUTS");
    // });
});
