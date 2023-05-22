import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import './Button.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>
type ButtonType = DefaultButtonPropsType & {
    count: () => void

}
const Button: React.FC<ButtonType> = (
    {
        disabled,
        count,
        ...restProps
    }
) => {
    return (
        <button
            className="button"
            disabled={disabled}
            onClick={count}
            {...restProps}
        ></button>
    );
};

export default Button;