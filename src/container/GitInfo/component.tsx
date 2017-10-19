import { refreshGitInfo } from './action'; // To get Action Creators
import { GitSize } from '../../presenter';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    let ownState = state['GitInfos'][ownProps.instanceId];
    return {
        refreshCount: ownState.refreshCount,
        gitSize: ownState.gitSize,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(
                refreshGitInfo(ownProps.instanceId, [ownProps.gitUrl])
            );
        },
    }
};

export const GitInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(GitSize);
