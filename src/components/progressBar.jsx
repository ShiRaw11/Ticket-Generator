const ProgressHeader = ({ title, step }) => {
  const totalSteps = 3;
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[25px] font-title font-light text-white">{title}</h2>
        <span className="text-white font-light text-[16px] font-[Roboto]">
          Step {step}/{totalSteps}
        </span>
      </div>

 
      <div className="w-full bg-drag_bg h-[6px] rounded-full overflow-hidden">
        <div
          className="bg-gradien h-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressHeader;

  