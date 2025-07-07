
interface StatsSectionProps {
  newLeads?: number;
  totalLeads?: number;
  leadClosure?: number;
  paymentInitiated?: number;
  paymentCompleted?: number;
}

const StatsSection = ({ 
  newLeads = 23, 
  totalLeads = 3829, 
  leadClosure = 12, 
  paymentInitiated = 5, 
  paymentCompleted = 3 
}: StatsSectionProps) => {
  return (
    <div className="grid grid-cols-5 gap-1 md:gap-4 mb-6">
      <div className="bg-green-500 text-white p-2 md:p-4 rounded">
        <div className="text-sm md:text-2xl font-bold">{newLeads} ▲</div>
        <div className="text-xs md:text-sm">new leads</div>
      </div>
      <div className="bg-blue-500 text-white p-2 md:p-4 rounded">
        <div className="text-sm md:text-2xl font-bold">{totalLeads}</div>
        <div className="text-xs md:text-sm">total leads</div>
      </div>
      <div className="bg-blue-400 text-white p-2 md:p-4 rounded">
        <div className="text-sm md:text-2xl font-bold">{leadClosure}</div>
        <div className="text-xs md:text-sm">Lead Closure</div>
      </div>
      <div className="bg-blue-300 text-white p-2 md:p-4 rounded">
        <div className="text-sm md:text-2xl font-bold">{paymentInitiated}</div>
        <div className="text-xs md:text-sm">Payment Initiated</div>
      </div>
      <div className="bg-blue-600 text-white p-2 md:p-4 rounded">
        <div className="text-sm md:text-2xl font-bold">{paymentCompleted}</div>
        <div className="text-xs md:test-sm">Payment Completed</div>
      </div>
    </div>
  );
};

export default StatsSection;
