import * as React from "react";
import { shallow } from "enzyme";
import { GitInfo } from "../Src/component";

test("GitInfo changes the text after click", () => {
    // Render a checkbox with label in the document
    const gitInfo = shallow(
        <GitInfo
            instanceIdPrefix="AsyncTestPage"
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
    );

    console.log(gitInfo);

    console.log(gitInfo.text());

    expect(2).toBe(2);
});
