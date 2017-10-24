import {
    REFRESH_GIT_INFO,
    FETCH_GIT_INFO,
    FETCH_GIT_INFO_SUCCESS,
    FETCH_GIT_INFO_FAILED
} from "./action"; // To get Action Types
import { GitInfosProp } from "./component";
import { instancesReducerCreator } from "Instantiator";
import { FetchInstanceIdArray, RegisterToRootReducer } from "RootHelper";
import { combineReducers } from "redux";
import * as iassign from "immutable-assign";

const refreshCount = (refreshCount = { count: 0 }, action) => {
    switch (action.type) {
        case REFRESH_GIT_INFO:
            return iassign(refreshCount, obj => obj.count, count => count + 1);
        default:
            return refreshCount;
    }
};

const gitSize = (gitSize = 0, action) => {
    switch (action.type) {
        case FETCH_GIT_INFO:
            return "fetching git info";
        case FETCH_GIT_INFO_SUCCESS:
            return action.data.size;
        case FETCH_GIT_INFO_FAILED:
            return "error";
        default:
            return gitSize;
    }
};

const GitInfoReducer = combineReducers({
    gitSize,
    refreshCount
});

const GitInfosReducer = instancesReducerCreator(FetchInstanceIdArray(GitInfosProp), GitInfoReducer);

RegisterToRootReducer(GitInfosProp, GitInfosReducer);
