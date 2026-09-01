// const Button = ({

//     children,

//     className = "",

//     ...props

// }) => {

//     return (

//         <button

//             className={`
            
//             px-8

//             py-4

//             rounded-full

//             bg-cyan-400

//             text-black

//             font-semibold

//             hover:scale-105

//             duration-300

//             ${className}
            
//             `}

//             {...props}

//         >

//             {children}

//         </button>

//     );

// };

// export default Button;


const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        px-5
        py-2.5
        sm:px-6
        sm:py-3
        rounded-full
        bg-cyan-400
        text-slate-950
        font-medium
        text-xs
        sm:text-sm
        shadow-[0_0_20px_rgba(34,211,238,0.25)]
        hover:bg-cyan-300
        hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]
        hover:-translate-y-0.5
        active:translate-y-0
        transition-all
        duration-200
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;