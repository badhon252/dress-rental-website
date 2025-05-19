// "use clinet";

// interface HeadersProps {
//   setTab: (tab: string) => void;
//   tab: string;
// }

// const Headers = ({ setTab, tab }: HeadersProps) => {
//   return (
//     <div>
//       <header className="flex justify-between items-center mb-[100px]  pb-2">
//         <h1 className="sub-title">WELCOME BACK, X</h1>
//         <nav className="flex items-center justify-center gap-[60px] text-xs">
//           <a
//             onClick={() => setTab("Account Info")}
//             className={`uppercase font-normal text-[16px] ${
//               tab === "Account Info" ? "border-b border-black pb-2" : "pb-2"
//             } cursor-pointer`}
//           >
//             Account Info
//           </a>
//           <a
//             onClick={() => setTab("Chats")}
//             className={`uppercase font-normal text-[16px] ${
//               tab === "Chats" ? "border-b border-black pb-2" : "pb-2"
//             } cursor-pointer`}
//           >
//             Chats
//           </a>
//           <a
//             onClick={() => setTab("Dispute")}
//             className={`uppercase font-normal text-[16px] ${
//               tab === "Dispute" ? "border-b border-black pb-2" : "pb-2"
//             } cursor-pointer`}
//           >
//             Dispute
//           </a>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Headers;



"use client";

interface HeadersProps {
  setTab: (tab: string) => void;
  tab: string;
}

const Headers = ({ setTab, tab }: HeadersProps) => {
  return (
    <div className="w-full">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-2 gap-4">
        <h1 className="sub-title text-lg sm:text-xl md:text-[48px]">WELCOME BACK, X</h1>
        <nav className="flex flex-wrap items-center justify-start md:justify-center gap-4 sm:gap-6 md:gap-12 text-xs">
          {["Account Info", "Chats", "Dispute"].map((label) => (
            <a
              key={label}
              onClick={() => setTab(label)}
              className={`uppercase font-normal text-sm md:text-base cursor-pointer pb-2 ${
                tab === label ? "border-b border-black" : ""
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Headers;

