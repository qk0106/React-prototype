import * as React from "react";
import { addTodo, changeInputText } from "./action"; // To get Action Creators
import { generateContainer } from "ReduxHelper";

// should move this presenter to Presenters folder
const AddTodoPresenter = ({ onSubmit, onChange, inputText }) => (
    <div>
        <form onSubmit={onSubmit}>
            <input value={inputText} onChange={onChange} />
            <button type="submit">Add Todo</button>
        </form>
    </div>
);

const stateProps = (ownState, ownProps) => ({
    inputText: ownState.inputText !== undefined ? ownState.inputText : ownProps.inputText
});

const dispatchProps = (stateProps, ownProps, dispatch, instanceId) => ({
    onSubmit: e => {
        e.preventDefault();
        dispatch(addTodo(instanceId, { text: stateProps.inputText }));
        dispatch(changeInputText(instanceId, { text: "" }));
    },
    onChange: e => {
        dispatch(changeInputText(instanceId, { text: e.target.value }));
    }
});

export const AddTodo = generateContainer(stateProps, dispatchProps)(AddTodoPresenter);
