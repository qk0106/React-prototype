import { wrapWithStyle } from "ReactStyleWrapper";

import * as React from "react";
const style = require("./style.less");

const component = ({ onSubmit, onChange, inputText }) => (
    <div>
        <form onSubmit={onSubmit}>
            <input value={inputText} onChange={onChange} />
            <button type="submit">Add Todo</button>
        </form>
    </div>
);

export const AddTodoPresenter = wrapWithStyle(style)(component);
