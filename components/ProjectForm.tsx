'use client';
import { SessionInterface } from '@/common.type';
import Image from 'next/image';
import { ChangeEvent } from 'react';

type Props = {
    type: string;
    session: SessionInterface;
};

const handleFormSubmit = (e: React.FormEvent) => {};
const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};

const ProjectForm = ({ type, session }: Props) => {
    const form = {
        image: ''
    };

    return (
        <form onSubmit={handleFormSubmit} className='flexStart form'>
            <div className='flexStart form_image-label'>
                <label htmlFor='poster'>{!form.image && 'Chose an image for your project'}</label>
                <input
                    id='image'
                    type='file'
                    accept='image/*'
                    required={type === 'create'}
                    className='form_image-input'
                    onChange={handleChangeImage}
                />
                {form.image && (
                    <Image src={form.image} className='sm:p-10 object-contain z-20' alt='Project poster' fill />
                )}
            </div>
        </form>
    );
};

export default ProjectForm;
