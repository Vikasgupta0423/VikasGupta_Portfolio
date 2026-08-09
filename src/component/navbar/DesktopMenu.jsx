import { navigation } from "../../data/navigation";

const DesktopMenu = () => {
  return (
    <ul className="hidden lg:flex items-center gap-2 rounded-full bg-white/[0.02] p-2">
      {navigation.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="
            group
            relative
            flex
            items-center
            gap-2
            overflow-hidden
            rounded-xl
            px-5
            py-3
            text-sm
            font-medium
            transition-all
            duration-500
          "
          >
            {/* Glass Background */}
            <span
              className="
              absolute
              inset-0
              rounded-xl
              border
              border-transparent
              bg-white/[0.02]
              opacity-0
              backdrop-blur-xl
              transition-all
              duration-500
              group-hover:border-cyan-400/20
              group-hover:bg-cyan-500/10
              group-hover:opacity-100
            "
            />

            {/* Shine */}
            <span
              className="
              absolute
              left-[-120%]
              top-0
              h-full
              w-1/2
              -skew-x-12
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-all
              duration-700
              group-hover:left-[130%]
            "
            />

            {/* Icon */}
            <item.icon
              size={17}
              className="
              relative
              z-10
              text-slate-500
              transition-all
              duration-300
              group-hover:text-cyan-400
              group-hover:scale-110
            "
            />

            {/* Flip Text */}
            <div className="relative h-5 overflow-hidden">
              <span
                className="
                block
                text-slate-300
                transition-transform
                duration-500
                group-hover:-translate-y-full
              "
              >
                {item.title}
              </span>

              <span
                className="
                absolute
                left-0
                top-full
                text-cyan-400
                transition-transform
                duration-500
                group-hover:-translate-y-full
              "
              >
                {item.title}
              </span>
            </div>

            {/* Bottom Line */}
            <span
              className="
              absolute
              bottom-0
              left-1/2
              h-[2px]
              w-0
              -translate-x-1/2
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-purple-500
              transition-all
              duration-500
              group-hover:w-3/4
            "
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;