import { CgCodeSlash } from 'react-icons/cg'

export default function HeaderBar() {
    return (
        <header
            className='flex items-center justify-between px-4 md:px-10 lg:px-44 text-3xl h-14 absolute left-0 right-0 top-0'
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