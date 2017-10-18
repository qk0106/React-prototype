// Action Type
export const REFRESH_GIT_INFO: string = 'REFRESH_GIT_INFO';
export const FETCH_GIT_INFO: string = 'FETCH_GIT_INFO';
export const FETCH_GIT_INFO_SUCCESS: string = 'FETCH_GIT_INFO_SUCCESS';
export const FETCH_GIT_INFO_FAILED: string = 'FETCH_GIT_INFO_FAILED';

// Action Creator
export const refreshGitInfo = () => {
    return { 
        type: REFRESH_GIT_INFO,
    }
};

export const fetchGitInfo = () => {
    return {
        type: FETCH_GIT_INFO,
    }
};

export const fetchGitInfoSuccess = (data) => {
    return {
        type: FETCH_GIT_INFO_SUCCESS,
        data: data
    }
};

export const fetchGitInfoFailed = (error) => {
    return {
        type: FETCH_GIT_INFO_FAILED,
        error: error
    }
};