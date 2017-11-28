import * as React from "react";
import { mount } from "enzyme";
import { GitInfoPresenter } from "GitInfoPresenter";

const preset = () => {
    let mockFn = jest.fn();
    mockFn.mockReturnValueOnce(10);
    let wrapper = mount(<GitInfoPresenter gitSize={288} refreshCount={9} onClick={mockFn} />);
    return { wrapper };
};

describe(">>>GitInfoPresenter Unit Testing", () => {
    it("+++ check render 3 p tags", () => {
        let { wrapper } = preset();
        expect(wrapper.find("p").length).toEqual(3);
    });

    it("+++ check render 1 button tag", () => {
        let { wrapper } = preset();
        expect(wrapper.find("button").length).toEqual(1);
    });

    it("+++ check gitSize", () => {
        let { wrapper } = preset();
        expect(wrapper.prop("gitSize")).toEqual(288);
    });

    it("+++ check refreshCount", () => {
        let { wrapper } = preset();
        expect(wrapper.prop("refreshCount")).toEqual(9);
    });

    it("+++ check onClick", () => {
        let { wrapper } = preset();
        expect(wrapper.prop("onClick")()).toEqual(10);
    });
});
