import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className="flex flex-col items-start justify-start text-[#848884]">
        <div className="max-w-4xl flex flex-col ml-6 my-6 text-xl gap-4 ">
          <div className="gap-5 flex flex-col text-[#e5e4e2] font-medium">
            <div className="flex flex-row gap-3">
              <span className="">hello@joaofraga.com</span>
              <span className="text-[#848884]">~ </span>
              <span className="text-[#007FFF]">$ </span>
              <span className="text-[#848884]">me -h</span>
              <div className="w-[10px] animate-typing"></div>
            </div>
            <ul className="list-disc px-10 text-[#848884]">
              <li>
                <a href="" className="text-[#e5e4e2] hover:bg-[#007FFF]">
                  Resume
                </a>
              </li>
              <li>
                <a href="" className="text-[#e5e4e2] hover:bg-[#007FFF]">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="" className="text-[#e5e4e2] hover:bg-[#007FFF]">
                  GitHub
                </a>
              </li>
              <li>
                <a href="" className="text-[#e5e4e2] hover:bg-[#007FFF]">
                  Goodreads
                </a>
              </li>
              <li>
                <a href="" className="text-[#e5e4e2] hover:bg-[#007FFF]">
                  Instagram
                </a>
              </li>
            </ul>
            <p className="text-[#848884]">Hi, stranger 👋🏼</p>
            <p className="text-[#848884]">
              I'm João Victor Fraga. I was born and raised in Brazil. Currently
              I am graduating in Software Engineering at{" "}
              <span className="text-[#e5e4e2]">FIAP</span> and I'm doing an
              Internship in Software Engineering at{" "}
              <span className="text-[#e5e4e2]">@PayPal</span> which is top tier
              payment service known worldwide.
            </p>
            <p className="text-[#848884]">
              Nowdays my biggest passions are technology, financial markets and
              geopolitics. I love getting to know new cultures, which is why I
              became fluent in English and now I am learning French. I've
              visited 28 countries and worked in 7 of them, which made me
              develop a great ability to work with people from different
              cultures.
            </p>
            <p className="text-[#848884]">
              My main website is under construction. Meanwhile you can reach me
              through the links above.
            </p>
          </div>
          <div className="gap-4 flex flex-col">
            <div className="flex flex-row gap-4">
              <span className="text-[#e5e4e2]">hello@joaofraga.com</span>
              <span className="text-[#848884]">~ </span>
              <span className="text-[#007FFF]">$ </span>
              <span className="text-[#848884]">interest.md</span>
            </div>
            <h3 className="text-[#e5e4e2] bg-[#007FFF] w-fit px-2">
              Tech Skills & Interests
            </h3>
            <ul className="list-disc px-10">
              <li>Python, Javascript and Typescript. </li>
              <li>SQL, PostgreSQL, AWS, Scrum, Git, Github. </li>
              <li>Web development, Backend development, Automation. </li>
              <li>
                Artificial Intelligence, Machine Learning, Cyber Security.{" "}
              </li>
            </ul>
            <h3 className="text-[#e5e4e2] bg-[#007FFF] w-fit px-2">
              Personal Interests & Hobbies
            </h3>
            <ul className="list-disc px-10">
              <li>
                Apart from my enthusiasm for technology, I am an avid athlete,
                enjoying tennis, muay thai, and running. Also I am also deeply
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
