import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-cover bg-no-repeat md:min-h-[300px] py-7 bg-[url('/herobg.jpg')] bg-center flex flex-col justify-center items-center md:gap-10 gap-3">
        <h1 className="md:text-[5rem] text-4xl font-medium text-white">
          Say hello to Zacky,
        </h1>
        <p className="text-white md:text-3xl text-md">
          Your Personal Desktop Assistant
        </p>
      </div>
      <div className="flex-col md:flex-row h-full flex justify-center items-center px-32 md:gap-24 gap-10">
        <Image
          src={"/bio.jpg"}
          width={300}
          height={300}
          className="rounded-lg mt-10 md:mx-auto hidden md:block"
        />
        <div className="flex flex-col gap-3 md:mx-0 -mx-20">
          <h2 className="text-center text-2xl font-medium mt-10">
            Hi, I'm Hamza! 👋
          </h2>
          <p className="leading-loose indent-8 md:mb-0 mb-8">
            For my senior 20 time project, I will be creating an AI powered
            desktop assistant named Zacky. From a young age, I've always been
            interested in design and how things work. I started by teaching
            myself how to code websites (like this one) and progressed on to
            physical design. After purchasing a 3D printer, I taught myself 3D
            design and have been creating projects with it ever since. Now, I've
            started diving into the world of electronics, and that is what
            prompted me to start this project. Through this, I will be able to
            grasp the basics of electrical design and hopefully be able to apply
            it to future projects.
          </p>
        </div>
      </div>
      <div className="mx-auto mb-10 -mt-5">
        <Image
          src={"/bio.jpg"}
          width={300}
          height={300}
          className="rounded-lg mt-10 md:mx-auto block md:hidden"
        />
      </div>
    </div>
  );
}
