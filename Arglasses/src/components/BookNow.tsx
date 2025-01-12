export default function BookNow() {
  return (
    <section className="py-12">
      <div className="flex">
        {/* left white col */}
        <div className="border-r border-black ">
          <div className="p-32  flex flex-col items-center justify-between gap-6 text-center">
            <h2 className="text-4xl  uppercase font-light">
              secure a prescription from a medical professional
            </h2>
            <p>
              Click teh button below to schedule an in person exam with an
              optomentist at one of our partenr location to renew an expired
              prescription or get a new one
            </p>
            <button className="text-white bg-black p-2 px-8 uppercase">
              book now
            </button>
          </div>
        </div>
        {/* right blue circle */}
        <div className="p-32 ">
          <div className="bg-blue-600 text-white w-[500px] h-[500px] rounded-full  flex flex-col items-center justify-between gap-6 text-center">
            <h2 className="text-4xl  uppercase font-light">
              secure a prescription from a medical professional
            </h2>
            <p>
              Click teh button below to schedule an in person exam with an
              optomentist at one of our partenr location to renew an expired
              prescription or get a new one
            </p>
            <button className="text-white bg-black p-2 px-8 uppercase">
              book now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
