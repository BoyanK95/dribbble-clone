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
            <div className='flexStart form_image-container'>
                <label htmlFor='poster' className='flexCenter form_image-label'>
                    {!form.image && 'Choose a poster for your project'}
                </label>
                <input
                    id='image'
                    type='file'
                    accept='image/*'
                    required={type === 'create' ? true : false}
                    className='form_image-input'
                    onChange={(e) => handleChangeImage(e)}
                />
                {form.image && <Image src={form?.image} className='sm:p-10 object-contain z-20' alt='image' fill />}
            </div>

            <FormField
                title='Title'
                state={form.title}
                placeholder='Flexibble'
                setState={(value) => handleStateChange('title', value)}
            />

            <FormField
                title='Description'
                state={form.description}
                placeholder='Showcase and discover remarkable developer projects.'
                isTextArea
                setState={(value) => handleStateChange('description', value)}
            />

            <FormField
                type='url'
                title='Website URL'
                state={form.liveSiteUrl}
                placeholder='https://boyank-portfolio.vercel.app/'
                setState={(value) => handleStateChange('liveSiteUrl', value)}
            />

            <FormField
                type='url'
                title='GitHub URL'
                state={form.githubUrl}
                placeholder='https://github.com/BoyanK95'
                setState={(value) => handleStateChange('githubUrl', value)}
            />
            <div className='flexStart w-full'>
                <button>Create</button>
            </div>
        </form>
    );
};

export default ProjectForm;
