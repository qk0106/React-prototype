import * as React from "react";
import { AddTodo } from "AddTodo";
import { TodoFooter } from "TodoFooter";
import { VisibleTodoList } from "VisibleTodoList";
import { generateInstanceId, registerInstance } from "Instantiator";
import { reducer } from "./reducer";

const TodoListAppContainer = ({ instancesProp, instanceId, otherProps }) => (
    <div>
        <AddTodo
            instancesProp={instancesProp}
            instanceId={instanceId}
            inputText={otherProps.inputText}
        />
        <VisibleTodoList instancesProp={instancesProp} instanceId={instanceId} />
        <TodoFooter instancesProp={instancesProp} instanceId={instanceId} />
    </div>
);

export class TodoListApp extends React.Component<any> {
    private _instancesProp = "TodoListApps";
    private _instanceId = generateInstanceId("Test");
    private _reducer = reducer;

    constructor(props) {
        super(props);
        registerInstance(this._instancesProp, this._instanceId, this._reducer);
    }

    render() {
        let instanceId = this._instanceId;
        let instancesProp = this._instancesProp;
        return (
            <TodoListAppContainer
                instancesProp={instancesProp}
                instanceId={instanceId}
                otherProps={this.props}
            />
        );
    }
}
