import './Button.css';
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Button = ({ children, ...props }: Props) => (
    <button {...props}>{children}</button>
);
export default Button;