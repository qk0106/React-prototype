import * as React from 'react';
import { addTodo } from './action'; // To get Action Creators
import { connect } from 'react-redux';

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
    let nextTodoId = 0;
    return {
        onSubmit: e => {
            e.preventDefault()
            dispatch(addTodo(ownProps.instanceId, [text, nextTodoId++]));

        },
        onChange: e => {
            text = e.target.value;
        }
    }
};

export const AddTodo = connect(undefined, mapDispatchToProps)(AddTodoPresenter);