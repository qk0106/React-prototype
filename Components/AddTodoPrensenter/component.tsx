const style = require("./style.less");
import * as React from "react";
import * as CSSModules from "react-css-modules";
import {} from "semantic-ui-react";

const _AddTodoView = ({ onSubmit, onChange, inputText }) => (
    <div>
        <form onSubmit={onSubmit}>
            <input value={inputText} onChange={onChange} />
            <button type="submit">Add Todo</button>
        </form>
    </div>
);

export const AddTodoView = CSSModules(_AddTodoView, style); // modulise style with component
