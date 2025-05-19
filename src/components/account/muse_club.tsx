// // import React from "react";
// // import { Progress } from "../ui/progress";
// // import Paymentcard from "../payment_card";

// // const MuseClub = () => {
// //   return (
// //     <div>
// //       <section className="">
// //         <div className=" mb-[65px]">
// //           <h2 className="text-3xl  tracking-widest font-normal mb-6 ">
// //             Muse Club
// //           </h2>
// //           <hr className="border border-b border-black" />
// //         </div>
// //         <div className="flex justify-between items-center mb-[30px]">
// //           <p className="text-[32px] font-normal">Your Annual Spend: $625</p>
// //           <p className="text-[32px] font-normal">
// //             $375 more to reach Muse Icon
// //           </p>
// //         </div>

// //         <div className="mb-11">
// //           <Progress value={70} className="h-2 bg-gray-200 mb-7" />
// //           <div className="flex justify-between text-xs mt-1">
// //             <span className=" text-[18px] font-normal ">$0 Member</span>
// //             <span className=" text-[18px] font-normal ">$300 Silver</span>
// //             <span className=" text-[18px] font-normal ">$600 Gold</span>
// //           </div>
// //         </div>

// //         <div >
// //           <Paymentcard/>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default MuseClub;






// import React from "react";
// import { Progress } from "../ui/progress";
// import Paymentcard from "../payment_card";

// const MuseClub = () => {
//   return (
//     <div className="w-full
//     ">
//       <section>
//         {/* Title Section */}
//         <div className="mb-12">
//           <h2 className="text-2xl sm:text-3xl tracking-wide font-normal mb-4 sm:mb-6">
//             Muse Club
//           </h2>
//           <hr className="border border-b border-black" />
//         </div>

//         {/* Spend Info Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
//           <p className="text-xl sm:text-2xl lg:text-[32px] font-normal">
//             Your Annual Spend: $625
//           </p>
//           <p className="text-xl sm:text-2xl lg:text-[32px] font-normal">
//             $375 more to reach Muse Icon
//           </p>
//         </div>

//         {/* Progress Bar */}
//         <div className="mb-10">
//           <Progress value={70} className="h-2 bg-gray-200 mb-4 sm:mb-6" />
//           <div className="flex justify-between text-sm sm:text-base text-gray-700 mt-1">
//             <span className="text-base sm:text-lg font-normal">$0 Member</span>
//             <span className="text-base sm:text-lg font-normal">$300 Silver</span>
//             <span className="text-base sm:text-lg font-normal">$600 Gold</span>
//           </div>
//         </div>

//         {/* Payment Card Section */}
//         <div>
//           <Paymentcard />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MuseClub;




import React from "react";
import Paymentcard from "../payment_card";

const MuseClub = () => {
  const progressValue = 70;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <section>
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl tracking-wide font-normal mb-4 sm:mb-6">
            Muse Club
          </h2>
          <hr className="border border-black" />
        </div>

        {/* Spend Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <p className="text-xl sm:text-2xl lg:text-[32px] font-normal">
            Your Annual Spend: $625
          </p>
          <p className="text-xl sm:text-2xl lg:text-[32px] font-normal">
            $375 more to reach Muse Icon
          </p>
        </div>

        {/* Progress Bar with custom fill color */}
        <div className="mb-10">
          <div className="relative w-full h-2 bg-gray-200 rounded">
            <div
              className="h-2 rounded transition-all duration-300"
              style={{
                width: `${progressValue}%`,
                backgroundColor: progressValue > 0 ? "#891D33" : "transparent",
              }}
            ></div>
          </div>
          <div className="flex justify-between text-sm sm:text-base text-gray-700 mt-4 sm:mt-6">
            <span className="text-base sm:text-lg font-normal">$0 Member</span>
            <span className="text-base sm:text-lg font-normal">$300 Silver</span>
            <span className="text-base sm:text-lg font-normal">$600 Gold</span>
          </div>
        </div>

        {/* Payment Cards */}
        <div>
          <Paymentcard />
        </div>
      </section>
    </div>
  );
};

export default MuseClub;

