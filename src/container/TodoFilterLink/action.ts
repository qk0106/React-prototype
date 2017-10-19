// Action Type
export const SET_VISIBILITY_FILTER: string = 'SET_VISIBILITY_FILTER';

// Action Creator
export const setVisibilityFilter = (filter) => {
    return { type: SET_VISIBILITY_FILTER, filter }
}
