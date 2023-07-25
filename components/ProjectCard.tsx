import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    id: string;
    image: string;
    title: string;
    name: string;
    avatarUrl: string;
    userId: string;
};

const ProjectCard = ({ id, image, title, name, avatarUrl, userId }: Props) => {
    return (
        <div className='flexCenter flex-col rounded-2xl drop-shadow-card'>
            <Link href={`/project/${id}`} className='flexCenter group relative w-full h-full'>
                <Image className='w-full h-full object-cover rounded-2xl' src={image} width={414} height={314} alt='Project Image' />
            </Link>
        </div>
    );
};

export default ProjectCard;
