"use clinet";

interface HeadersProps {
  setTab: (tab: string) => void;
  tab: string;
}

const Headers = ({ setTab, tab }: HeadersProps) => {
  return (
    <div>
      <header className="flex justify-between items-center mb-[100px]  pb-2">
        <h1 className="sub-title">WELCOME BACK, X</h1>
        <nav className="flex items-center justify-center gap-[60px] text-xs">
          <a
            onClick={() => setTab("Account Info")}
            className={`uppercase font-normal text-[16px] ${
              tab === "Account Info" ? "border-b border-black pb-2" : "pb-2"
            } cursor-pointer`}
          >
            Account Info
          </a>
          <a
            onClick={() => setTab("Chats")}
            className={`uppercase font-normal text-[16px] ${
              tab === "Chats" ? "border-b border-black pb-2" : "pb-2"
            } cursor-pointer`}
          >
            Chats
          </a>
          <a
            onClick={() => setTab("Dispute")}
            className={`uppercase font-normal text-[16px] ${
              tab === "Dispute" ? "border-b border-black pb-2" : "pb-2"
            } cursor-pointer`}
          >
            Dispute
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Headers;
