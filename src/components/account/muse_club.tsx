import React from "react";
import { Progress } from "../ui/progress";
import Paymentcard from "../payment_card";

const MuseClub = () => {
  return (
    <div>
      <section className="">
        <div className=" mb-[65px]">
          <h2 className="text-3xl  tracking-widest font-normal mb-6 ">
            Muse Club
          </h2>
          <hr className="border border-b border-black" />
        </div>
        <div className="flex justify-between items-center mb-[30px]">
          <p className="text-[32px] font-normal">Your Annual Spend: $625</p>
          <p className="text-[32px] font-normal">
            $375 more to reach Muse Icon
          </p>
        </div>

        <div className="mb-11">
          <Progress value={70} className="h-2 bg-gray-200 mb-7" />
          <div className="flex justify-between text-xs mt-1">
            <span className=" text-[18px] font-normal ">$0 Member</span>
            <span className=" text-[18px] font-normal ">$300 Silver</span>
            <span className=" text-[18px] font-normal ">$600 Gold</span>
          </div>
        </div>

        <div >
          <Paymentcard/>
        </div>
      </section>
    </div>
  );
};

export default MuseClub;
