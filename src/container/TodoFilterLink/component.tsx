import { connect } from 'react-redux';
import { setVisibilityFilter } from './action';
import { Link } from '../../presenter';

const mapStateToProps = (state, ownProps) => {
    let ownState = state[ownProps.stateProp];
    return {
        active: ownProps.filter === ownState.visibilityFilter,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(
                setVisibilityFilter(ownProps.filter)
            );
        },
    }
};

export const TodoFilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
