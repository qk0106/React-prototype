"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iassign = require("immutable-assign");
var GitInfoSubContainer_1 = require("GitInfoSubContainer"); // To get Action Types
var redux_1 = require("redux");
var refreshCount = function (refreshCount, action) {
    if (refreshCount === void 0) { refreshCount = { count: 0 }; }
    switch (action.type) {
        case GitInfoSubContainer_1.REFRESH_GIT_INFO:
            return iassign(refreshCount, function (obj) { return obj.count; }, function (count) { return count + 1; });
        default:
            return refreshCount;
    }
};
var gitSize = function (gitSize, action) {
    if (gitSize === void 0) { gitSize = 0; }
    switch (action.type) {
        case GitInfoSubContainer_1.FETCH_GIT_INFO:
            return "fetching git info";
        case GitInfoSubContainer_1.FETCH_GIT_INFO_SUCCESS:
            return action.data.size;
        case GitInfoSubContainer_1.FETCH_GIT_INFO_FAILED:
            return "error";
        default:
            return gitSize;
    }
};
exports.reducer = redux_1.combineReducers({
    gitSize: gitSize,
    refreshCount: refreshCount
});
