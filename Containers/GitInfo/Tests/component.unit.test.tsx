import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import { configure, shallow, mount, render } from "enzyme";
import { GitInfo } from "../Src/component";

configure({ adapter: new Adapter() });

const gitInfo = (
    <GitInfo
        instanceIdPrefix="AsyncTestPage"
        gitUrl="https://api.github.com/repos/qk0106/React-prototype"
    />
);

describe("A suite", function() {
    it("should render without throwing an error", function() {
        console.log(shallow(gitInfo));
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
