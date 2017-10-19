import * as React from 'react';
import { connect } from 'react-redux';
// import { addTodo } from './action';

let AddTodoPresentor = ({ onSubmit }) => {
    let input

    return (
        <div>
            <form
                onSubmit={onSubmit}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Add Todo
        </button>
            </form>
        </div>
    )
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: e => {
            e.preventDefault()
            console.log(dispatch, ownProps);

            // if (!input.value.trim()) {
            //     return
            // }
            // dispatch(addTodo(input.value))
            // input.value = ''
        },
    }
};

export const AddTodo = connect(undefined, mapDispatchToProps)(AddTodoPresentor);