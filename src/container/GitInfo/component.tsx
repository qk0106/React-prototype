import { connect } from 'react-redux';
import { Refresh } from './action';
import { GitSize } from '../../presenter';
// import { asyncConnect } from 'redux-connect';


const mapStateToProps = (state, ownProps) => {
  let ownState = state[ownProps.stateProp];
  return {
    refreshCount: ownState.refreshCount,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => { dispatch(Refresh(ownProps.refreshCount)); },
  }
};

export const GitInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(GitSize);
