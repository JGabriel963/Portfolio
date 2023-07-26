import { GoIssueClosed } from 'react-icons/go'
import { PiEyeClosedBold } from 'react-icons/pi'
import { MdClose } from 'react-icons/md'

export default function Modal({ isOpen, setIsOpen, img, title }) {
    if (isOpen) {
        return(
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-tertiary-color/50 z-50">
                <div className="h-full w-full flex justify-center items-center">
                    <div 
                        className="flex flex-col  bg-background p-6 pb-9 rounded-2xl w-[90%] md:w-[60%] relative"
                    >
                        <img 
                            src={img} 
                            alt="project"
                            className="rounded-2xl" 
                        />

                        <h1 className="font-extrabold text-3xl my-2 text-tertiary-color">{title}</h1>

                        <p
                            className="p-1 text-gray-2"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur pariatur natus cum assumenda aspernatur a totam? At expedita excepturi ex, odio, maiores cupiditate doloremque nulla recusandae tenetur illo natus enim quidem quaerat rem. Eius neque dolores, iste atque, unde maiores hic mollitia eos dolor distinctio minus! Vel voluptatum natus sint.
                        </p>
                        <button
                            className="absolute bottom-3 right-3 bg-tertiary-color text-white p-2 rounded-full text-2xl"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <MdClose />
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return null
}