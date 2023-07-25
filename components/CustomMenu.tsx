import { Menu } from '@headlessui/react';
import Image from 'next/image';

type Props = {
    title: string;
    state: string;
    filters: Array<string>;
    setState: (value: string) => void;
};

const CustomMenu = ({ title, state, filters, setState }: Props) => {
    return (
        <div className='flexStart w-full relative flex-col gap-7'>
            <label htmlFor={title} className='w-full text-gray-100'>
                {title}
            </label>
            <Menu as='div' className='self-start relative'>
                <div>
                    <Menu.Button className='flexCenter custom_menu-btn'>
                        {state || 'Select a category'}
                        <Image src='/arrow-down.svg' height={5} width={10} alt='Arrow down' />
                    </Menu.Button>
                </div>
                <Menu.Items className='flexStart custom_menu-items'>
                    {filters.map((tag) => (
                        <Menu.Items key={tag}>
                            <button
                                type='button'
                                className='custom_menu-item'
                                value={tag}
                                onClick={(e) => setState(e.currentTarget.value)}
                            >
                                {tag}
                            </button>
                        </Menu.Items>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    );
};

export default CustomMenu;
