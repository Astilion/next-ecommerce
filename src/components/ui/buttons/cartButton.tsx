import Image from 'next/image'
export default function CartButton() {
    return (
        <button className='border-solid border-primary-100 p-2 border-[1px] rounded-md hover:border-accent-400 duration-150 w-[36px] h-[36px]'>
            <Image src={'/icons/cart.svg'} alt='shopping cart icon' width={18} height={18} />
        </button>
    )
}