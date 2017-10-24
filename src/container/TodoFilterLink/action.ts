import { InstanceActionCreator } from '../../Global/instantiation';

// Action Type
export const SET_VISIBILITY_FILTER: string = 'SET_VISIBILITY_FILTER';

// Action Creator
export const setVisibilityFilter = InstanceActionCreator(SET_VISIBILITY_FILTER, ['filter']);
