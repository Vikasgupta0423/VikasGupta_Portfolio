const Button = ({

    children,

    className = "",

    ...props

}) => {

    return (

        <button

            className={`
            
            px-8

            py-4

            rounded-full

            bg-cyan-400

            text-black

            font-semibold

            hover:scale-105

            duration-300

            ${className}
            
            `}

            {...props}

        >

            {children}

        </button>

    );

};

export default Button;