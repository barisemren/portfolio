import Link from "next/link";

export default function Experience({ exp }) {
  return (
    <div className="flex flex-row mt-10 pb-6 items-center justify-between border-b border-b5 hover:text-b6">
      <div className="flex flex-col space-y-4">
        <p className="text-b6 text-xl">
          <Link href={exp.link}>
            <a target="_blank" rel="noreferrer">
              {exp.company}
            </a>
          </Link>
        </p>
        <p className="text-b5 text-xl">{exp.role}</p>
      </div>
      <div className="text-xl">{exp.date}</div>
    </div>
  );
}
