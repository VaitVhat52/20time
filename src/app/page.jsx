import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-cover bg-no-repeat md:min-h-[300px] py-10 bg-[url('/herobg.jpg')] bg-center flex flex-col justify-center items-center gap-3">
        <h1 className="md:text-[5rem] text-5xl font-medium text-white">
          Say hello to Zacky,
        </h1>
        <p className="text-white md:text-3xl text-xl">
          Your Personal Desktop Assistant
        </p>
      </div>
      <div className="flex-col md:flex-row h-full flex justify-center items-center px-32 md:gap-24 gap-10">
        <Image
          src={"/bio.jpg"}
          width={300}
          height={300}
          className="rounded-lg mt-10 md:mx-auto"
        />
        <div className="flex flex-col gap-3 md:mx-0 -mx-20">
          <h2 className="text-center text-2xl font-medium">
            Hi, I'm Hamza! 👋
          </h2>
          <p className="leading-loose indent-8 md:mb-0 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            repellat veritatis quaerat placeat excepturi nostrum eaque?
            Asperiores labore consequuntur hic rem, vero voluptate, cupiditate
            laborum odio at, deserunt eveniet iste! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Maxime dolorum vel ea? Perspiciatis,
            architecto magni hic id autem corrupti assumenda. Fuga dolore
            delectus dolor adipisci quaerat deleniti laudantium assumenda
            obcaecati?
          </p>
        </div>
      </div>
    </div>
  );
}
