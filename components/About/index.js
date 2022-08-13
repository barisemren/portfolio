import Image from "next/image";
import me from "../../public/pp.png";
export default function index() {
  return (
    <section className="container pt-8">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-3 justify-self-center lg:justify-self-start">
          <Image
            className="rounded-md"
            src={me}
            alt="Barış Emren"
            width={350}
            height={406}
            quality={100}
          />
        </div>
        <div className="col-span-12 lg:col-span-7 lg:col-start-5 lg:border-t border-b5 ">
          <div className="pt-14">
            <p className="text-3xl">
              As an self-taught developer, I am passionate about creating web
              applications. Currently, I am working as a Jr. Frontend Developer{" "}
              <a
                className="text-b6"
                target="_blank"
                rel="noreferrer"
                href="https://saypr.com/"
              >
                @Saypr
              </a>{" "}
              and trying to gradute from electrical and electronics engineering.
            </p>
          </div>
        </div>
        <div className="mt-8 col-span-12 lg:col-span-11 lg:border-b border-b5"></div>
        <div className="col-span-12 lg:col-span-6 mt-8">
          <h3 className="text-4xl text-b5 underline underline-offset-8">Experience.</h3>
          <div className="flex flex-row mt-10 pb-6 items-center justify-between border-b border-b5">
            <div className="flex flex-col space-y-4">
              <p className="text-b6 text-xl">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://saypr.com/"
                >
                  Saypr
                </a>
              </p>
              <p className="text-b5 text-xl">Frontend Developer</p>
            </div>
            <div className="text-xl">MAY 2022 - PRESENT</div>
          </div>
          <div className="flex flex-row mt-10 pb-6 items-center justify-between border-b border-b5">
            <div className="flex flex-col space-y-4">
              <p className="text-b6 text-xl">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.sufle.io/"
                >
                  Sufle
                </a>
              </p>
              <p className="text-b5 text-xl">Software Development Intern</p>
            </div>
            <div className="text-xl">MARCH 2022 - MAY 2022</div>
          </div>
          <div className="flex flex-row my-10 items-center justify-between">
            <div className="flex flex-col space-y-4">
              <p className="text-b6 text-xl">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.samm.com/en/"
                >
                  Samm Teknoloji
                </a>
              </p>
              <p className="text-b5 text-xl">Engineering Intern</p>
            </div>
            <div className="text-xl">JULY 2021 - AUGUST 2021</div>
          </div>
        </div>
      </div>
    </section>
  );
}
