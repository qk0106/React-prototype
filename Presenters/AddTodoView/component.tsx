import * as React from "react";

export const AddTodoView = ({ onSubmit, onChange, inputText }) => (
    <div>
        <form onSubmit={onSubmit}>
            <input value={inputText} onChange={onChange} />
            <button type="submit">Add Todo</button>
        </form>
    </div>
);
