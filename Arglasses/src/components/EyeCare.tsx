const bigText = [
  { id: 1, title: "glasses for digital screens" },
  { id: 2, title: "outdoor sunglasses and glasses" },
  { id: 3, title: "prescription gaming glasses" },
  { id: 4, title: "gaming glasses with prescription" },
  { id: 5, title: "affordable glasses" },
];

export default function EyeCare() {
  return (
    <section className="bg-blue-500 py-12">
      <div className="text-center py-12 text-white text-2xl">Eye care</div>
      {/* animated text */}
      <div className="text-neutral-100 flex flex-col items-center justify-between gap-2">
        {bigText.map((item) => (
          <h2
            className="text-7xl font-md uppercase hover:bg-white hover:text-blue-500 hover:rounded-lg transition-all "
            key={item.id}
          >
            {item.title}
          </h2>
        ))}
      </div>
    </section>
  );
}
