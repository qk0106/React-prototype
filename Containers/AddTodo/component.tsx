import { wrapWithInit } from "ReactInitComponentWrapper";
import { wrapWithConnect } from "ReduxConnectComponentWrapper";
import { addTodo, changeInputText, initInputInfo } from "./action"; // To get Action Creators
import { AddTodoView } from "AddTodoView";

const stateProps = (ownState, ownProps) => ({
    inputText: ownState.inputText !== undefined ? ownState.inputText : ownProps.inputText
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    init: () => {
        dispatch(
            initInputInfo(instanceId, {
                gitUrl: "https://api.github.com/repos/qk0106/React-prototype"
            })
        );
    },
    onSubmit: e => {
        e.preventDefault();
        dispatch(addTodo(instanceId, { text: stateProps.inputText }));
        dispatch(changeInputText(instanceId, { text: "" }));
    },
    onChange: e => {
        dispatch(changeInputText(instanceId, { text: e.target.value }));
    }
});

export const AddTodo = wrapWithConnect({ stateProps, dispatchProps }, wrapWithInit(AddTodoView));
