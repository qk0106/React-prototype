import { connect } from 'react-redux';
import { refreshGitInfo } from './action';
import { GitSize } from '../../presenter';

const mapStateToProps = (state) => {
  let ownState = state['GitInfo'];
  return {
    refreshCount: ownState.refreshCount,
    gitSize: ownState.gitSize,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(
        refreshGitInfo()
      );
    },
  }
};

export const GitInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(GitSize);
