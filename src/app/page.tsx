import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-start justify-start text-[#848884]">
        <div className="xl:max-w-5xl max-md:max-w-md max-sm:max-w-sm flex flex-col mx-6 my-6 xl:text-xl md:text-base sm:text-base gap-4 ">
          <div className="gap-5 flex flex-col text-[#e5e4e2] font-medium">
            <div className="w-fit">
              <div className="flex w-max flex-row animate-typing overflow-hidden whitespace-nowrap border-r-[10px] border-r-[#FF5E0E]">
                <span className="">arthurbfonseca27@gmail.com</span>
                <span className="text-[#848884] pl-3">~ </span>
                <span className="text-[#FF5E0E] pl-3">$ </span>
                <span className="text-[#848884] pl-3 pr-2">me -h</span>
                <div className=" animate-blink"></div>
              </div>
            </div>
            <div className="animate-fade animate-duration-1000 animate-delay-[2300ms]">
              <ul className="list-disc px-10 text-[#848884]">
                <li>
                  <a href="" className="text-[#e5e4e2] hover:bg-[#FF5E0E]">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="" className="text-[#e5e4e2] hover:bg-[#FF5E0E]">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="" className="text-[#e5e4e2] hover:bg-[#FF5E0E]">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="" className="text-[#e5e4e2] hover:bg-[#FF5E0E]">
                    Goodreads
                  </a>
                </li>
                <li>
                  <a href="" className="text-[#e5e4e2] hover:bg-[#FF5E0E]">
                    Instagram
                  </a>
                </li>
              </ul>
              <div className="pt-4 gap-5 flex flex-col">
                <p className="text-[#848884]">Hi, stranger &nbsp;👋🏼</p>
                <p className="text-[#848884]">
                  I&apos;m Arthur Fonseca. I was born and raised in Brazil.
                  Currently I am graduating in Computer Science at{" "}
                  <span className="text-[#e5e4e2] hover:text-[#FF5E0E]"><a href="https://www.ufscar.br/">UFSCar</a></span> and I&apos;m
                  doing an Student Research in NLP at{" "}
                  <span className="text-[#e5e4e2] hover:text-[#FF5E0E]"><a href="https://www.lalic.ufscar.br/">LALIC</a></span>.
                </p>
                <p className="text-[#848884]">
                  Nowadays my biggest passions are technology, financial markets
                  and sports. I love getting to know new cultures, which is
                  why I became fluent in English.
                </p>
                <p className="text-[#848884]">
                  My main website is under construction. Meanwhile you can reach
                  me through the links above.
                </p>
              </div>
            </div>
          </div>
          <div className="animate-fade animate-duration-1000 animate-delay-[2300ms]">
            <div className="flex flex-row gap-3">
              <span className="text-[#e5e4e2]">arthurbfonseca27@gmail.com</span>
              <span className="text-[#848884]">~ </span>
              <span className="text-[#FF5E0E]">$ </span>
              <span className="text-[#848884]">interest.md</span>
            </div>
            <h3 className="text-[#e5e4e2] bg-[#FF5E0E] w-fit px-2 my-4">
              Tech Skills &amp; Interests
            </h3>
            <ul className="list-disc px-10">
              <li>Python, Javascript and Typescript. </li>
              <li>SQL, PostgreSQL, Scrum, Git, Github. </li>
              <li>Web development, Backend development, Mobile development, Automation. </li>
              <li>
                Artificial Intelligence, Machine Learning.{" "}
              </li>
            </ul>
            <h3 className="text-[#e5e4e2] bg-[#FF5E0E] w-fit px-2 my-4">
              Personal Interests &amp; Hobbies
            </h3>
            <ul className="list-disc px-10">
              <li>
                Apart from my enthusiasm for technology, I am an avid athlete,
                enjoying brazillian jiu-jitsu, running and going to the gym. Also I am also deeply
                passionate about reading books on geopolitics, philosophy, and
                finance.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
