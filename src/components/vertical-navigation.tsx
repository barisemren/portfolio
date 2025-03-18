import { CircleUser, House, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function VerticalNavigationBar() {
  const tabs = [
    { id: "/", icon: "Home" },
    { id: "/about", icon: "About" },
    { id: "/contact", icon: "Contact" },
  ];
  return (
    <section className="w-min py-3 px-3 bg-soft rounded-[40px] fixed left-1/2 -translate-x-1/2 top-6 lg:left-6 lg:right-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 z-50 font-sans">
      <div className="w-full lg:h-full">
        <div className="flex flex-row lg:flex-col gap-3">
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
