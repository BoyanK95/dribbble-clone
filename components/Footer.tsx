import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className='flexStart footer'>
            <div className='flex flex-col gap-12 w-full'>
                <div className='flex items-start flex-col'>
                    <Image src='/logo-purple.svg' width={115} height={38} alt='Flexible'/>
                    <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                        Flexibble is aming to shine with its ability to create, share, grow your developers projects!
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
