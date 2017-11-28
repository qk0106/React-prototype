import {
    extractPrefixFromInstanceId,
    extractComponentNameFromInstanceId
} from "../Src/ReduxInstanceIdHelper";

describe(">>>ReduxInstanceIdHelper Unit Testing", () => {
    it("+++ check extractPrefixFromInstanceId", () => {
        const instanceId = "AsyncTestPage_TopContainer_650935552_TodoListContainer_4204973487";
        const prefix = "AsyncTestPage_TopContainer_650935552";
        expect(extractPrefixFromInstanceId(instanceId)).toEqual(prefix);
    });
    it("+++ check extractComponentNameFromInstanceId", () => {
        const instanceId = "AsyncTestPage_TopContainer_650935552_TodoListContainer_4204973487";
        const componentName = "TodoListContainer";
        expect(extractComponentNameFromInstanceId(instanceId)).toEqual(componentName);
    });
});
