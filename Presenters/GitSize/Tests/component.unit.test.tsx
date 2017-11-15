import * as React from "react";
import { shallow } from "enzyme";
import { GitSize } from "GitSize";

describe(">>>GitSize Unit Testing", () => {
    let wrapper, mockFn;

    beforeEach(() => {
        mockFn = jest.fn();
        wrapper = shallow(<GitSize gitSize={0} refreshCount={0} onClick={mockFn} />);
    });

    it("+++ check render 2 p tags", () => {
        expect(wrapper.find("p").length).toEqual(2);
    });

    it("+++ check render 1 button tag", () => {
        expect(wrapper.find("button").length).toEqual(1);
    });
});
