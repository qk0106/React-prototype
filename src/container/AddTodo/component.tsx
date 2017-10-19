import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './action';

let AddTodoPresenter = ({ onSubmit, onChange }) => {
    return (
        <div>
            <form onSubmit={onSubmit} >
                <input onChange={onChange} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
};

const mapDispatchToProps = (dispatch, ownProps) => {
    let text;
    return {
        onSubmit: e => {
            e.preventDefault()
            dispatch(addTodo(ownProps.instanceId, text));

        },
        onChange: e => {
            text = e.target.value;
        }
    }
};

export const AddTodo = connect(undefined, mapDispatchToProps)(AddTodoPresenter);