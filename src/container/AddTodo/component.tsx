import { addTodo, changeInputText } from './action'; // To get Action Creators
import { connect } from 'react-redux';
import * as React from 'react';

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

const mapStateToProps = (state, { instanceId }) => {
    let ownState = state['TodoLists'][instanceId];
    return {
        text: ownState.inputText,
    }
};

let nextTodoId = 0;
const mapDispatchToProps = ({ text }, dispatch, { instanceId }) => {
    return {
        onSubmit: e => {
            e.preventDefault()
            dispatch(addTodo(instanceId, [text, nextTodoId++]));
            dispatch(changeInputText(instanceId, ['']))
        },
        onChange: e => {
            dispatch(changeInputText(instanceId, [e.target.value]))
        }
    }
};


const mergeProps = (stateProps, { dispatch }, ownProps) => {
    return {
        ...stateProps,
        ...mapDispatchToProps(stateProps, dispatch, ownProps),
    };
}

export const AddTodo = connect(mapStateToProps, null, mergeProps)(AddTodoPresenter);
