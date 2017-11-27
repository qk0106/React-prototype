const style = require("./style.less");
import * as React from "react";
import * as CSSModules from "react-css-modules";
import {} from "semantic-ui-react";

const component = ({ gitSize, refreshCount, onClick }) => (
    <div>
        <p>Git Info Component</p>
        <p styleName="size-bg">Size: {gitSize}</p>
        <p>Refresh Count: {refreshCount.count}</p>
        <button onClick={onClick}> Refresh </button>
    </div>
);

export const GitInfoPresenter = CSSModules(component, style); // modulise style with component
