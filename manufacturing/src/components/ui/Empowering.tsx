import { Button } from "./button";
import styles from "./Empowering.module.css";
export default function Empowering() {
  const integrations = [
    {
      name: "Integration 1",
      icon: "https://img.icons8.com/fluency/48/processor.png",
    },
    {
      name: " 2",
      icon: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-machine-history-flaticons-flat-flat-icons.png",
    },
    {
      name: "3",
      icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/50/external-machine-politics-flaticons-lineal-color-flat-icons.png",
    },
    {
      name: "Integration 4",
      icon: "https://img.icons8.com/bubbles/50/gears.png",
    },
    {
      name: "5",
      icon: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/50/external-machine-factory-flaticons-lineal-color-flat-icons.png",
    },
    { name: "6", icon: "https://shorturl.at/VAvLh" },
    { name: "Integration 7", icon: "https://tinyurl.com/3bw9nur6" },
    { name: "Integration 8", icon: "https://tinyurl.com/bdevvytt" },
  ];

  const orbitStyles = `
  @keyframes spin1 {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes spin2 {
    from { transform: rotate(120deg); }
    to { transform: rotate(480deg); }
  }
  @keyframes spin3 {
    from { transform: rotate(240deg); }
    to { transform: rotate(600deg); }
  }
`;

  return (
    <>
      {/* <style jsx>{orbitStyles}</style> */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Empowering Top Companies with Seamless Integrations
            </h1>
            <p className="text-gray-500 md:text-xl">
              Experience seamless connections with our innovative solutions,
              designed to effortlessly integrate with your existing systems,
              enhance productivity, and drive your business towards greater
              success.
            </p>
            <Button
              size="lg"
              className="bg-[#E8FFDF] text-black hover:bg-[#D8EFD0]"
            >
              Work With Us
            </Button>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-[#E8FFDF] rounded-3xl">
              <div className="absolute inset-0 flex items-center justify-center">
                {[1, 2, 3].map((orbit) => (
                  <div
                    key={orbit}
                    className={`absolute rounded-full border border-gray-200 ${
                      orbit === 1
                        ? "w-48 h-48"
                        : orbit === 2
                        ? "w-72 h-72"
                        : "w-96 h-96"
                    } ${styles[`orbit${orbit}`]}`}
                    // style={{
                    //   animation: `spin${orbit} ${20 + orbit * 5}s linear infinite`,
                    // }}
                  >
                    {integrations
                      .slice((orbit - 1) * 3, orbit * 3)
                      .map((integration, index) => (
                        <div
                          key={index}
                          className="absolute -mt-4 -ml-4"
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: `rotate(${index * 120}deg) translateX(${
                              orbit === 1
                                ? "6rem"
                                : orbit === 2
                                ? "9rem"
                                : "12rem"
                            })`,
                          }}
                        >
                          <div className="bg-white p-2 rounded-lg shadow-sm">
                            <img
                              src={integration.icon}
                              alt={integration.name}
                              width={32}
                              height={32}
                              className="w-8 h-8"
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
