import { wrapWithInit } from "ReactInitWrapper";
import { wrapWithConnect } from "ReduxConnectWrapper";

import { onAddClick, changeInputText, initInputInfo } from "./action";
import { AddTodoPresenter } from "AddTodoPresenter";

const stateProps = (ownState, ownProps) => ({
    inputText: ownState.inputText !== undefined ? ownState.inputText : ownProps.inputText
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    init: () => {
        dispatch(
            initInputInfo(instanceId)({
                gitUrl: "https://api.github.com/repos/qk0106/React-prototype"
            })
        );
    },
    onSubmit: e => {
        e.preventDefault();
        dispatch(onAddClick(instanceId)({ text: stateProps.inputText }));
    },
    onChange: e => {
        dispatch(changeInputText(instanceId)({ text: e.target.value }));
    }
});

export const AddTodoContainer = wrapWithConnect(stateProps, dispatchProps)(
    wrapWithInit(AddTodoPresenter)
);
