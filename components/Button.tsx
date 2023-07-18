import Image from 'next/image';
import { MouseEventHandler } from 'react';

type Props = {
    title: string;
    leftIcon?: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler;
    isSubmiting?: boolean;
    type?: 'submit' | 'button';
    bgColor?: string;
    textColor?: string;
};

const Button = ({ title, leftIcon, rightIcon, handleClick, isSubmiting, type, bgColor, textColor }: Props) => {
    return (
        <button className='flexStart gap-3 py-3 px-4' type={type || 'button'} onClick={handleClick} disabled={isSubmiting}>
            {leftIcon && <Image src={leftIcon} width={14} height={14} alt='left' />}
            {title}
            {rightIcon && <Image src={rightIcon} width={14} height={14} alt='right' />}
        </button>
    );
};

export default Button;
