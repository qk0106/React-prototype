import * as React from "react";
import { shallow } from "enzyme";
import { GitInfo } from "../Src/component";

const gitInfo = (
    <GitInfo
        instanceIdPrefix="AsyncTestPage"
        gitUrl="https://api.github.com/repos/qk0106/React-prototype"
    />
);

describe("GitInfo Suite", function() {
    it("should render without throwing an error", function() {
        console.log("======================");
        console.log(shallow(gitInfo));
        console.log("======================");
        expect(shallow(gitInfo).length).toBe(1);
    });
});
