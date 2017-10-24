import { addTodo, changeInputText } from "./action"; // To get Action Creators
import { connect } from "react-redux";
import * as React from "react";

let AddTodoPresenter = ({ onSubmit, onChange, inputText }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={inputText} onChange={onChange} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state, { instancesProp, instanceId, inputText }) => {
    let ownState = state[instancesProp][instanceId];
    return {
        inputText: ownState.inputText !== undefined ? ownState.inputText : inputText
    };
};

const mapDispatchToProps = ({ inputText }, dispatch, { instanceId }) => {
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

const mergeProps = (stateProps, { dispatch }, ownProps) => {
    return {
        ...stateProps,
        ...mapDispatchToProps(stateProps, dispatch, ownProps)
    };
};

export const AddTodo = connect(mapStateToProps, null, mergeProps)(AddTodoPresenter);
