const Card = ({children, className}) => {
    
    return (
        <div className={`h-[300px] w-[220px] rounded-lg overflow-hidden hover:cursor-pointer, ${className}`}>
            {children}
        </div>
    )
}

export default Card