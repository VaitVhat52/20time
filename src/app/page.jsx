export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-cover bg-no-repeat min-h-[300px] bg-[url('/herobg.jpg')] bg-center flex flex-col justify-center items-center gap-3">
        <h1 className="text-[5rem] font-medium text-white">
          Say hello to NAME,
        </h1>
        <p className="text-white text-3xl">Your Personal Desktop Assistant</p>
      </div>
      <div className="h-full flex justify-center items-center px-32 gap-24">
        <img src="/bio.jpg" alt="Bio Image" className="w-[300px] rounded-lg" />
        <div className="flex flex-col gap-3">
          <h2 className="text-center text-2xl font-medium">Hi, I'm Hamza!</h2>
          <p className="leading-loose">
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
