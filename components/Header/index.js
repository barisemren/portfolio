/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

export default function index() {
  const router = useRouter();
  return (
    <section className="custom-container h-[15vh] py-8">
      <div className="grid grid-cols-12 text-b5">
        <div className="col-span-6 md:col-span-2">
          <Link href={"/"}>
            <h1 className="text-lg md:text-2xl cursor-pointer">Barış Emren</h1>
          </Link>
        </div>
        <div className="col-span-6 md:col-span-10 justify-self-end">
          <div className="inline-flex space-x-4 md:space-x-8 text-lg md:text-2xl">
            <Link href={"/about"}>
              <a
                className={cn(
                  "hover:text-b6 custom-hover relative",
                  router.pathname === "/about" && "active-link"
                )}
              >
                about
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
