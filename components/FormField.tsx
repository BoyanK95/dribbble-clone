import React from 'react';

type Props = {
    type?: string;
    title: string;
    state: string;
    placeholder: string;
    isTextArea?: boolean;
    setState: (value: string) => void;
};

const FormField = ({ type, title, state, placeholder, isTextArea, setState }: Props) => {
    return (
        <div className='flexStart flex-col w-full gap-4'>
            <label htmlFor=''>{title}</label>
            {isTextArea ? (
                <textarea placeholder={placeholder} value={state} required onChange={(e) => setState(e.target.value)} />
            ) : (
                <input
                    type={type || 'text'}
                    placeholder={placeholder}
                    value={state}
                    required
                    onChange={(e) => setState(e.target.value)}
                />
            )}
        </div>
    );
};

export default FormField;
