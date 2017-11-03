import * as React from "react";
import { GitInfo } from "GitInfo";
import { TodoLister } from "TodoLister";
import { registerRoute } from "RouteHelper";

const AsyncTestPage = () => (
    <div>
        <div>
            <div>
                <span>This is Async Page</span>
                <GitInfo
                    instanceIdPrefix="AsyncTestPage"
                    gitUrl="https://api.github.com/repos/qk0106/React-prototype"
                />
                <GitInfo
                    instanceIdPrefix="AsyncTestPage"
                    gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
                />
                <TodoLister
                    instanceIdPrefix="AsyncTestPage"
                    inputText="This is TodoList in async page"
                />
            </div>
        </div>
    </div>
);

registerRoute("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
