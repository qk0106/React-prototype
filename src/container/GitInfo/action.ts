// Action Type
export const REFRESH_GIT_INFO: string = 'REFRESH_GIT_INFO';
export const FETCH_GIT_INFO: string = 'FETCH_GIT_INFO';
export const FETCH_GIT_INFO_SUCCESS: string = 'FETCH_GIT_INFO_SUCCESS';
export const FETCH_GIT_INFO_FAILED: string = 'FETCH_GIT_INFO_FAILED';

// Action Creator
export const refreshGitInfo = (instanceId) => {
    return { 
        type: REFRESH_GIT_INFO,
        instanceId
    }
};

export const fetchGitInfo = (instanceId) => {
    return {
        type: FETCH_GIT_INFO,
        instanceId,
    }
};

export const fetchGitInfoSuccess = (instanceId, data) => {
    return {
        type: FETCH_GIT_INFO_SUCCESS,
        instanceId,
        data,
    }
};

export const fetchGitInfoFailed = (instanceId, error) => {
    return {
        type: FETCH_GIT_INFO_FAILED,
        instanceId,
        error,
    }
};