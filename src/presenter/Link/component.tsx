import * as React from 'react';

interface ILinkProps {
    active: boolean;
    children: any;
    onClick: (...args: any[]) => void;
}

export const Link: React.SFC<ILinkProps> = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a
            href="#"
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
};