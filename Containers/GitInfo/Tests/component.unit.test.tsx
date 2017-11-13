import * as React from "react";
import { shallow, mount, render } from "enzyme";

import { GitInfo } from "../Src/component";

const gitInfo = (
    <GitInfo
        instanceIdPrefix="AsyncTestPage"
        gitUrl="https://api.github.com/repos/qk0106/React-prototype"
    />
);

describe("A suite", function() {
    it("should render without throwing an error", function() {
        expect(shallow(gitInfo).contains(<div className="foo">Bar</div>)).toBe(true);
    });

    it('should be selectable by class "foo"', function() {
        expect(shallow(gitInfo).is(".foo")).toBe(true);
    });

    it("should mount in a full DOM", function() {
        expect(mount(gitInfo).find(".foo").length).toBe(1);
    });

    it("should render to static HTML", function() {
        expect(render(gitInfo).text()).toEqual("Bar");
    });
});
