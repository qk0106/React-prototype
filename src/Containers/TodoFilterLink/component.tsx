import { setVisibilityFilter } from "./action"; // To get Action Creators
import { Link } from "Link";
import { getOwnState, generateContainer } from "ReduxHelper";

const mapStateToProps = (state, ownProps) => {
    let ownState = getOwnState(state, ownProps.instanceProps);
    return {
        active: ownProps.filter === ownState.visibilityFilter,
        children: ownProps.children
    };
};

const mapDispatchToProps = (stateProps, dispatch, ownProps) => {
    let { instanceId } = ownProps.instanceProps;
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(instanceId, { filter: ownProps.filter }));
        }
    };
};

export const TodoFilterLink = generateContainer(mapStateToProps, mapDispatchToProps)(Link);
