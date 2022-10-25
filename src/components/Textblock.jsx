const Textblock = ({ children, className }) => {
    return(
        <div className={`p-5 w-4/6 text-white flex flex-col mt-10, ${className}` }>
            {children}
        </div>
    )
}

export default Textblock