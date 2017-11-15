import * as React from "react";
import { shallow } from "enzyme";
import { GitSizePresenter } from "GitSizePresenter";

const preset = () => {
    let mockFn = jest.fn();
    let wrapper = shallow(<GitSizePresenter gitSize={0} refreshCount={0} onClick={mockFn} />);
    return { wrapper };
};

describe(">>>GitSizePresenter Unit Testing", () => {
    it("+++ check render 2 p tags", () => {
        let { wrapper } = preset();
        expect(wrapper.find("p").length).toEqual(2);
    });

    it("+++ check render 1 button tag", () => {
        let { wrapper } = preset();
        expect(wrapper.find("button").length).toEqual(1);
    });
});
