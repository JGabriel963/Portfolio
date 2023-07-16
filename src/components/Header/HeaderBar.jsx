import { CgCodeSlash } from 'react-icons/cg'

export default function HeaderBar() {
    return (
        <header
            className='flex items-center justify-between px-4 md:px-8 text-3xl p-2'
        >
            <div>
                <span className='text-primary-color'>J</span>
                <span className='text-yellow '>.</span>
                <span className='text-primary-color'>G</span>
                <span className='text-blur'>.</span>
            </div>
            <CgCodeSlash />
        </header>
    )
}