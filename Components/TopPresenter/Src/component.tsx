const style = require("./style.less");
import * as React from "react";
import * as CSSModules from "react-css-modules";
import {} from "semantic-ui-react";

const component = ({ clickCount, onClick }) => (
    <div>
        <p>Click Count: {clickCount}</p>
        <button onClick={onClick}> Add Count </button>
    </div>
);

export const TopPresenter = CSSModules(component, style);
