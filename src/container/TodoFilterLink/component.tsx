import { setVisibilityFilter } from './action'; // To get Action Creators
import { Link } from '../../presenter';
import { connect } from 'react-redux';

const mapStateToProps = (state, { instanceId, filter }) => {
    let ownState = state['TodoLists'][instanceId];
    return {
        active: filter === ownState.visibilityFilter,
    }
};

const mapDispatchToProps = (dispatch, { instanceId, filter }) => {
    return {
        onClick: () => {
            dispatch(
                setVisibilityFilter(instanceId, [filter])
            );
        },
    }
};

export const TodoFilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
