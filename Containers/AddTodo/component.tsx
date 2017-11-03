import { addTodo, changeInputText } from "./action"; // To get Action Creators
import { AddTodoView } from "AddTodoView";
import { generateReduxComponent } from "ReduxHelper";

const stateProps = (ownState, ownProps) => ({
    inputText: ownState.inputText !== undefined ? ownState.inputText : ownProps.inputText
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    onSubmit: e => {
        e.preventDefault();
        dispatch(addTodo(instanceId, { text: stateProps.inputText }));
        dispatch(changeInputText(instanceId, { text: "" }));
    },
    onChange: e => {
        dispatch(changeInputText(instanceId, { text: e.target.value }));
    }
});

export const AddTodo = generateReduxComponent({ stateProps, dispatchProps }, AddTodoView);
