// Action Type
export const REFRESH: string = 'REFRESH';
export const GET_SIZE: string = 'GET_SIZE';

// Action Creator
export const Refresh = (refreshCount) => {
    return { type: REFRESH, refreshCount }
}

export const GetSize = (url) => {
    return { type: GetSize, url }
}