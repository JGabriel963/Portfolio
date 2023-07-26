export default function Modal({ isOpen, setIsOpen }) {
    if (isOpen) {
        return(
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-tertiary-color/50 z-50">
                <div className="h-full w-full flex justify-center items-center">
                    <div 
                        className="flex flex-col items-center  bg-background p-6 rounded-2xl w-[90%] md:w-[60%] relative"
                    >
                        
                        <button onClick={() => setIsOpen(!isOpen)}>CloseOpen</button>
                    </div>
                </div>
            </div>
        )
    }

    return null
}