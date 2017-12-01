import * as React from "react";

import { Provider } from "react-redux";
import { readStore } from "ReduxStoreManager";
import { collectRoutes } from "ReactRouteManager";
export default class App extends React.Component<any> {
    render() {
        const store = readStore();
        const routes = collectRoutes();
        return <Provider store={store}>{routes}</Provider>;
    }
}

// export default class App extends React.Component<any> {
//     interval: number;
//     state = { count: 0 };

//     //This state will be maintained during hot reloads
//     componentWillMount() {
//         this.interval = window.setInterval(() => {
//             this.setState({ count: this.state.count + 1 });
//         }, 1000);
//     }

//     componentWillUnmount() {
//         window.clearInterval(this.interval);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello world! s</h1>
//                 <div>Welcome to hot-reloading React written in TypeScript! {this.state.count}</div>
//             </div>
//         );
//     }
// }
