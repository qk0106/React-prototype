import { setVisibilityFilter } from './action'; // To get Action Creators
import { Link } from '../../presenter';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    let ownState = state['TodoLists'][ownProps.instanceId];
    return {
        active: ownProps.filter === ownState.visibilityFilter,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(
                setVisibilityFilter(ownProps.instanceId, [ownProps.filter])
            );
        },
    }
};

export const TodoFilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
