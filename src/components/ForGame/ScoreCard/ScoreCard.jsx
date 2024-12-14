const ScoreCard = ({ score, time }) => {
  return (
    <div className="flex flex-row h-fit w-fit justufy-center items-center gap-2">
      <div className="flex justufy-center items-center bg-[#FFF07D] rounded-full h-fit w-fit px-2 py-1">
        <h2 className="text-[#EC3064] text-[16px]">{score} / 30</h2>
      </div>
      <div className="flex justufy-center items-center bg-[#FFF07D] rounded-full h-fit w-fit px-2 py-1">
        <h2 className="text-[#EC3064] text-[16px]">{time}с осталось</h2>
      </div>
    </div>
  );
};

export default ScoreCard;
