import { connect } from 'react-redux';
import { refresh } from './action';
import { GitSize } from '../../presenter';

const mapStateToProps = (state, ownProps) => {
  let ownState = state[ownProps.stateProp];
  return {
    refreshCount: ownState.refreshCount,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => { dispatch(refresh(ownProps.refreshCount)); },
  }
};

export const GitInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(GitSize);
