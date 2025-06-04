

const StatsSection = () => {
  return (
    <div className="grid grid-cols-5 gap-1 md:gap-4 mb-6">
      <div className="bg-green-500 text-white p-2 md:p-4 rounded">
        <div className="text-sm md:text-2xl font-bold">23 ▲</div>
        <div className="text-xs md:text-sm">new leads</div>
      </div>
      <div className="bg-blue-500 text-white p-2 md:p-4 rounded">
        <div className="text-sm md:text-2xl font-bold">3829</div>
        <div className="text-xs md:text-sm">total leads</div>
      </div>
      <div className="bg-blue-400 text-white p-2 md:p-4 rounded">
        <div className="text-sm md:text-2xl font-bold">12</div>
        <div className="text-xs md:text-sm">Lead Closure</div>
      </div>
      <div className="bg-blue-300 text-white p-2 md:p-4 rounded">
        <div className="text-sm md:text-2xl font-bold">5</div>
        <div className="text-xs md:text-sm">Payment Initiated</div>
      </div>
      <div className="bg-blue-600 text-white p-2 md:p-4 rounded">
        <div className="text-sm md:text-2xl font-bold">3</div>
        <div className="text-xs md:text-sm">Payment Completed</div>
      </div>
    </div>
  );
};

export default StatsSection;

