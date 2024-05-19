function TableBody({ data }) {
  return data?.map((obj, index) => {
    const { name, rank, score, time } = obj;
    const isLastRow = index === data.length - 1;
    return (
      <tr
        key={index}
        className={`font-Inter flex justify-between items-center py-3 px-2 rounded-[4.22px] gap-12 shadow-[0px_1.7px_10.1px_0px_#00000026]
            ${
              index <= 2
                ? " bg-gradient-to-r from-[#FFEAE1] to-[#F6D837]"
                : "bg-white"
            } ${
          isLastRow ? "bg-gradient-to-r from-[#A409F4] to-[#2038B5]" : ""
        } 
            
            `}
      >
        <td className=" flex gap-[14px] items-center ">
          {index <= 2 ? (
            <img
              className="w-5 h-6 "
              src="/images/TopThree.png"
              alt="top three"
            />
          ) : (
            <span
              className={`w-6 font-Inter py-[6.89px] px-[1.53px] rounded-full  border-[0.5px] border-solid border-[#3983FF] text-[10px] font-bold leading-[10px] text-center  ${
                isLastRow
                  ? " text-[#252042] bg-white  "
                  : "text-white border  bg-[#095FEEE5] "
              }`}
            >
              {rank}
              <sup className="text-[8px] leading-[10px] text-center">th</sup>
            </span>
          )}

          <div
            className={`font-Inter text-xs leading-[41.8px]  text-[19px] text-left font-bold flex  items-center gap-[6px]  ${
              isLastRow ? "text-white" : "text-[#252042]"
            }    `}
          >
            <img
              className="w-6"
              src={` ${
                isLastRow ? "/images/user-gray.png" : "/images/user.png"
              }   `}
              alt="player icon"
            />
            <span>{name ? name : "Unknown"}</span>
          </div>
        </td>

        <td
          className={`flex gap-[34px] font-Inter text-xs font-semibold leading-[14.5px]  text-left text-black  ${
            isLastRow ? "text-white" : ""
          }`}
        >
          <span className="  ">{score}</span>

          <div className="">{Math.floor(Number(time) / 60) + 1}</div>
        </td>
      </tr>
    );
  });
}

export default TableBody;
