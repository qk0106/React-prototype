import { refreshGitInfo } from './action'; // To get Action Creators
import { GitSize } from '../../presenter';
import { connect } from 'react-redux';

const mapStateToProps = (state, { instanceId }) => {
    let ownState = state['GitInfos'][instanceId];
    return {
        refreshCount: ownState.refreshCount,
        gitSize: ownState.gitSize,
    }
};

const mapDispatchToProps = (dispatch, { instanceId, gitUrl }) => {
    return {
        onClick: () => {
            dispatch(
                refreshGitInfo(instanceId, [gitUrl])
            );
        },
    }
};

export const GitInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(GitSize);
