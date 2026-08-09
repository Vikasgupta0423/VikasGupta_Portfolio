const AvailabilityCard = () => {
  return (
    <div
      className="
      absolute
      bottom-5
      -left-10
      bg-white/10
      backdrop-blur-xl
      rounded-2xl
      border
      border-cyan-500/20
      px-5
      py-4"
    >
      <div className="flex items-center gap-3">

        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

        <div>

          <h3 className="font-semibold">
            Available for Work
          </h3>

          <p className="text-gray-400 text-sm">
            Open to Full Stack Opportunities
          </p>

        </div>

      </div>
    </div>
  );
};

export default AvailabilityCard;