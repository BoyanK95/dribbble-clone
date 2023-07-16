'use client';
import { SessionInterface } from '@/common.type';
import Image from 'next/image';
import { ChangeEvent } from 'react';
import FormField from './FormField';

type Props = {
    type: string;
    session: SessionInterface;
};

const handleFormSubmit = (e: React.FormEvent) => {};
const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};

const ProjectForm = ({ type, session }: Props) => {
    const form = {
        image: '',
        title: ''
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
            <FormField
                title='Title'
                state={form.title}
                placeholder='Flexibble'
                setState={(value: string) => handleStateChange('title', value)}
            />
            <FormField
                type='url'
                title='Description'
                state={form.description}
                placeholder='Showcase and discover remarkable developer projects'
                setState={(value: string) => handleStateChange('description', value)}
            />
            <FormField
                type='url'
                title='GitHub URL'
                state={form.githubUrl}
                placeholder='https://github.com/BoyanK95'
                setState={(value: string) => handleStateChange('githubUrl', value)}
            />
            <FormField
                title='Title'
                state={form.title}
                placeholder='Flexibble'
                setState={(value: string) => handleStateChange('title', value)}
            />
            <div className='flexStart w-full'>
                  <button>Create</button>
            </div>
        </form>
    );
};

export default ProjectForm;
