import * as React from "react";
import { shallow } from "enzyme";
import { GitSize } from "../Src/component";

const mockFn = jest.fn();
const gitSize = <GitSize gitSize={0} refreshCount={0} onClick={mockFn} />;

describe("GitSize Suite", function() {
    it("should render without throwing an error", function() {
        console.log("======================");
        console.log(shallow(gitSize));
        console.log("======================");
        expect(shallow(gitSize).length).toBe(1);
    });
});
