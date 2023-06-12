export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-2/5 gap-16 text-center">
        <div className="flex flex-col">
          <h1 className="text-9xl text-liyab-warm-yellow">
            焔 LIYAB
          </h1>
          <p className="text-3xl font-light leading-none text-liyab-warm-yellow">
            EST. 2023
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-liyab-warm-yellow">WHAT WE DO</h2>
          <p className="mt-5 text-xl">
            Founded on January 19, 2023, LIYAB is made up of Discord individuals
            who aim to kindle their talents like a scorching flame through their
            passion, making them shine brightly. The group consists of singers
            and hosts with raw, innate talent from all over the country who were
            personally discovered by the founders through its unique recruitment
            process: exclusively through scouting.
          </p>
        </div>
      </div>
    </div>
  );
}
