import Link from "next/link";
import Icon from "../Icon";

function Socials() {
  return (
    <div className="flex items-center gap-x-10 flex-wrap gap-y-10 ">
      <Link href={"mailto:baris.emren@yahoo.com"}>
        <a
          target="_blank"
          className="text-xl bg-b3 border border-black hover:border-b6 hover:bg-b6 hover:text-b3 rounded-3xl flex items-center px-5 py-2"
        >
          Email
        </a>
      </Link>
      <Link href={`https://github.com/barisemren`}>
        <a target="_blank">
          <Icon icon="github" size="32" className="hover:text-b6" />
        </a>
      </Link>
      <Link href={`https://instagram.com/barisemren`}>
        <a target="_blank">
          <Icon icon="instagram" size="32" className="hover:text-b6" />
        </a>
      </Link>
      <Link href={`https://linkedin.com/in/barisemren`}>
        <a target="_blank">
          <Icon icon="linkedin" size="32" className="hover:text-b6" />
        </a>
      </Link>
      <Link href={`https://open.spotify.com/user/baris.emren`}>
        <a target="_blank">
          <Icon icon="spotify" size="32" className="hover:text-b6" />
        </a>
      </Link>
      <Link href={`https://vsco.co/barisemren/gallery`}>
        <a target="_blank">
          <Icon icon="vsco" size="32" className="hover:text-b6" />
        </a>
      </Link>
    </div>
  );
}

export default Socials;
