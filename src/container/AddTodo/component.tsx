import * as React from 'react';
import { addTodo, changeInputText } from './action'; // To get Action Creators
import { connect } from 'react-redux';

let AddTodoPresenter = ({ onSubmit, onChange, text }) => {
    return (
        <div>
            <form onSubmit={onSubmit} >
                <input value={text} onChange={onChange} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    let ownState = state['TodoLists'][ownProps.instanceId];
    return {
        text: ownState.inputText,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    let text;
    let nextTodoId = 0;
    return {
        onSubmit: e => {
            e.preventDefault()
            dispatch(addTodo(ownProps.instanceId, [text, nextTodoId++]));
            dispatch(changeInputText(ownProps.instanceId, ['']))
        },
        onChange: e => {
            text = e.target.value;
            dispatch(changeInputText(ownProps.instanceId, [e.target.value]))
        }
    }
};

export const AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodoPresenter);