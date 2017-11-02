import * as React from "react";
import { AddTodo } from "AddTodo";
import { TodoFooter } from "TodoFooter";
import { VisibleTodoList } from "VisibleTodoList";
import { generateInstanceId } from "Instantiator";
import { registerReducer } from "ReduxHelper";
import { reducer } from "./reducer";

export class TodoListApp extends React.Component<any> {
    private _instancesProp = "TodoListApps";
    private _instanceId = generateInstanceId("Test");
    private _reducer = reducer;

    constructor(props) {
        super(props);
        registerReducer(this._instancesProp, this._instanceId, this._reducer);
    }

    render() {
        let instanceId = this._instanceId;
        let instancesProp = this._instancesProp;
        let { inputText } = this.props;
        return (
            <div>
                <AddTodo
                    instancesProp={instancesProp}
                    instanceId={instanceId}
                    inputText={inputText}
                />
                <VisibleTodoList instancesProp={instancesProp} instanceId={instanceId} />
                <TodoFooter instancesProp={instancesProp} instanceId={instanceId} />
            </div>
        );
    }
}
