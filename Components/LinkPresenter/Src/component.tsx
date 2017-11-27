import * as React from "react";

const style = require("./style.less");
import { wrapWithStyle } from "ReactStyleWrapper";

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

export const LinkPresenter = wrapWithStyle(style)(component);
