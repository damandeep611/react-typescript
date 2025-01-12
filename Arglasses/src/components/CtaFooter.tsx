export default function CtaFooter() {
  return (
    <section className="bg-blue-500 py-12">
      <div className="relative flex items-center justify-center m-6 rounded-lg bg-[url('https://images.pexels.com/photos/1499481/pexels-photo-1499481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-96">
        <div className=" flex flex-col items-center justify-between gap-6 ">
          <span>Collection</span>
          <h2 className="text-4xl font-light uppercase">
            The Glasses.com collection
          </h2>
          <p className=" max-w-md text-center text-base text-gray-500 capitalize">
            get the best for less, with a premium frame + lenses starting at 555
            a making in the balance betweee style and price
          </p>
          <button className="bg-black text-white p-2 px-8 rounded-lg">
            shop the collection
          </button>
        </div>
      </div>
    </section>
  );
}
