const style = require("./style.less");
import * as React from "react";
import * as CSSModules from "react-css-modules";
import {} from "semantic-ui-react";

const _TopPresenter = ({ clickCount, onClick }) => (
    <div>
        <p>Click Count: {clickCount}</p>
        <button onClick={onClick}> Add Count </button>
    </div>
);

export const TopPresenter = CSSModules(_TopPresenter, style); // modulise style with component
