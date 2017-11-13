import * as React from "react";
import { shallow } from "enzyme";
import { GitInfo } from "../Src/component";

const gitInfo = (
    <GitInfo
        instanceIdPrefix="AsyncTestPage"
        gitUrl="https://api.github.com/repos/qk0106/React-prototype"
    />
);

describe("A suite", function() {
    it("should render without throwing an error", function() {
        expect(shallow(gitInfo).length).toBe(1);
    });
});
