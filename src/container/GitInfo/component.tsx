import { refreshGitInfo } from './action'; // To get Action Creators
import { GitSize } from '../../presenter';
import { connect } from 'react-redux';

export const GitInfosProp = 'GitInfos';

const mapStateToProps = (state, { instanceId, gitUrl }) => {
    let ownState = state[GitInfosProp][instanceId];
    return {
        refreshCount: (ownState.refreshCount !== undefined) ? ownState.refreshCount : { count: 0 },
        gitSize: (ownState.gitSize !== undefined) ? ownState.gitSize : 0,
        gitUrl: gitUrl,
    }
};

const mapDispatchToProps = ({ }, dispatch, { instanceId, gitUrl }) => {
    return {
        onClick: () => {
            dispatch(
                refreshGitInfo(instanceId, [gitUrl])
            );
        },
    }
};

const mergeProps = (stateProps, { dispatch }, ownProps) => {
    return {
        ...stateProps,
        ...mapDispatchToProps(stateProps, dispatch, ownProps),
    };
}

export const GitInfo = connect(
    mapStateToProps,
    null,
    mergeProps
)(GitSize);
