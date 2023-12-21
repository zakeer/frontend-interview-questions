import Image from 'next/image';

export default function Home() {
  const topics = [
    { title: 'HTML and CSS', link: 'html-and-css' },
    { title: 'Javascript', link: 'javascript' },
    { title: 'ReactJS', link: 'react' },
    { title: "API's", link: 'apis' },
    { title: 'JSON', link: 'json' },
    { title: 'NextJS', link: 'nextjs' },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className={`mb-3 text-4xl font-semibold`}>
        Frontend Interview Topics
      </h2>

      <div className="mt-32 grid gap-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {topics.map(({ link, title }) => (
          <a
            key={link}
            href={`/topics/${link}`}
            className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`text-2xl font-semibold`}>
              {title}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p> */}
          </a>
        ))}
      </div>
    </main>
  );
}
