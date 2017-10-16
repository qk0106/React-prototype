// Action Type
export const REFRESH: string = 'REFRESH';
export const FETCH_GIT_INFO: string = 'FETCH_GIT_INFO';
export const FETCH_GIT_INFO_SUCCESS: string = 'FETCH_GIT_INFO_SUCCESS';
export const FETCH_GIT_INFO_FAILED: string = 'FETCH_GIT_INFO_FAILED';

// Action Creator
export const refresh = (refreshCount) => {
    return { 
        type: REFRESH,
        refreshCount 
    }
};

export const fetchGitInfo = (url) => {
    return {
        type: FETCH_GIT_INFO,
        response: url
    }
};

export const fetchGitInfoSuccess = (data) => {
    return {
        type: FETCH_GIT_INFO,
        response: data
    }
};

export const fetchGitInfoFailed = (error) => {
    return {
        type: FETCH_GIT_INFO,
        error: error
    }
};