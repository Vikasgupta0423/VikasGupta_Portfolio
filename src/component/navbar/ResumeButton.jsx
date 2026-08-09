import { Download } from "lucide-react";

const ResumeButton = () => {
  return (
    <a
      href="/resume/FSD_v2.1_Vikas_Gupta.pdf"
      download
      className="
        group
        relative
        hidden
        overflow-hidden
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-500/10
        px-8
        py-3
        backdrop-blur-xl
        lg:flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
      "
    >
      {/* Glass Background */}
      <span
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-cyan-500/10
          via-sky-500/10
          to-purple-500/10
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Flip Text */}
      <span className="relative h-6 overflow-hidden">
        {/* Default */}
        <span
          className="
            flex
            items-center
            gap-2
            text-white
            font-semibold
            transition-transform
            duration-500
            ease-in-out
            group-hover:-translate-y-full
          "
        >
          <Download size={18} />
          Resume
        </span>

        {/* Hover */}
        <span
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            gap-2
            translate-y-full
            text-cyan-400
            font-semibold
            transition-transform
            duration-500
            ease-in-out
            group-hover:translate-y-0
          "
        >
          <Download size={18} />
          Download
        </span>
      </span>
    </a>
  );
};

export default ResumeButton;