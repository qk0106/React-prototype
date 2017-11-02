import * as React from "react";
import { AddTodo } from "AddTodo";
import { TodoFooter } from "TodoFooter";
import { VisibleTodoList } from "VisibleTodoList";
import { yieldRegisteredInstanceId } from "Instantiator";
import { registerReducer } from "ReduxHelper";
import { reducer } from "./reducer";

export class TodoListApp extends React.Component<any> {
    private _instancesProp = "TodoListApps";
    private _instanceId;
    private _reducer = reducer;

    constructor(props) {
        super(props);
        console.log(this.state);
        console.log(this.props);
        this._instanceId = yieldRegisteredInstanceId(this._instancesProp, "Test");
        registerReducer(this._instancesProp, this._reducer);
    }

    getInstancesProp() {
        return this._instancesProp;
    }

    getInstanceId() {
        return this._instanceId;
    }

    render() {
        let { inputText } = this.props;
        let instanceId = this.getInstanceId();
        let instancesProp = this.getInstancesProp();
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
