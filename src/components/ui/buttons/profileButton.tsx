import Image from 'next/image'
export default function ProfileButton() {
    return (
        <button className='border-solid border-primary-100 p-1 border-[1px] rounded-md hover:border-accent-400 duration-150 w-[36px] h-[36px]'>
            <Image src={'/icons/profile.svg'} alt='shopping cart icon' width={44} height={44} />
        </button>
    )
}