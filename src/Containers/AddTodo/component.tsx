import * as React from "react";
import { addTodo, changeInputText } from "./action"; // To get Action Creators
import { getOwnState, generateContainer } from "ReduxHelper";

// should move this presenter to Presenters folder
const AddTodoPresenter = ({ onSubmit, onChange, inputText }) => (
    <div>
        <form onSubmit={onSubmit}>
            <input value={inputText} onChange={onChange} />
            <button type="submit">Add Todo</button>
        </form>
    </div>
);

const mapStateToProps = (state, { instanceProps, inputText }) => {
    let ownState = getOwnState(state, instanceProps);
    return {
        inputText: ownState.inputText !== undefined ? ownState.inputText : inputText
    };
};

const mapDispatchToProps = ({ inputText }, dispatch, { instanceProps }) => {
    let { instanceId } = instanceProps;
    return {
        onSubmit: e => {
            e.preventDefault();
            dispatch(addTodo(instanceId, { text: inputText }));
            dispatch(changeInputText(instanceId, { text: "" }));
        },
        onChange: e => {
            dispatch(changeInputText(instanceId, { text: e.target.value }));
        }
    };
};

export const AddTodo = generateContainer(mapStateToProps, mapDispatchToProps)(AddTodoPresenter);
