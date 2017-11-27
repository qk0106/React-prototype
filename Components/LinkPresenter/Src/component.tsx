const style = require("./style.less");
import * as React from "react";
import * as CSSModules from "react-css-modules";
import {} from "semantic-ui-react";

interface ILinkProps {
    active: boolean;
    children: any;
    onClick: (...args: any[]) => void;
}

const component: React.SFC<ILinkProps> = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>;
    }

    return (
        <a
            href="#"
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    );
};

export const LinkPresenter = CSSModules(component, style); // modulise style with component
