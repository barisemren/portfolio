import { CircleUser, House, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function VerticalNavigationBar() {
  let tabs = [
    { id: "/", icon: "Home" },
    { id: "/about", icon: "About" },
    { id: "/contact", icon: "Contact" },
  ];
  return (
    <section className="w-min py-3 px-3 bg-soft rounded-[40px] fixed left-6 right-auto top-1/2 -translate-y-1/2 z-50 font-sans">
      <div className="w-full h-full">
        <div className="flex flex-col gap-3">
          {tabs.map((tab) => (
            <Link key={tab.id} href={tab.id} className="hover:text-soft hover:bg-dark rounded-full p-2" >
              {tab?.icon === "Home" && <House size={20} />}
              {tab?.icon === "About" && <CircleUser size={20} />}
              {tab?.icon === "Contact" && <MessageCircle size={20} />}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
