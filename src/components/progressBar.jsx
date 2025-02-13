const ProgressHeader = ({ title, step }) => {
    const totalSteps = 3;
    const progressPercentage = (step / totalSteps) * 100;
  
    return (
      <div>
        <div className="flex justify-between mb-2">
          <h2 className="text-[32px] font-[JejuMyeongjo] font-light text-white">{title}</h2>
          <span className="text-white font-light text-[16px] font-[Roboto]">
            Step {step}/{totalSteps}
          </span>
        </div>
        <div className="w-full bg-gray-700 h-2 rounded-full">
          <div
            className="bg-teal-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    );
  };
  
  export default ProgressHeader;
  