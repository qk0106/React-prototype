import * as CSSModules from "react-css-modules";

export const wrapWithStyle = style => WrappedComponent => {
    return CSSModules(WrappedComponent, style);
};
