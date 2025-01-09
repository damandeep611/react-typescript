import { useEffect } from "react";
import { gsap } from "gsap";

const CircleWithAnimation = () => {
  const circles = [
    {
      id: 1,
      title: "Pay in 4",
      description:
        "Use buy now, pay later on our site for a smooth, fast payment system",
    },
    {
      id: 2,
      title: "Select Your Method",
      description: "Please specify how you would like to pay for your points",
    },
    {
      id: 3,
      title: "Simple Checkout",
      description: "Increase the scale or ordering without unnecessary hassle",
    },
    {
      id: 4,
      title: "Safe Transactions",
      description: "Anti-fraud control protects you from unauthorized payments",
    },
  ];

  useEffect(() => {
    const circles = document.querySelectorAll("circle");

    circles.forEach((circle, index) => {
      const circumference = 4 * Math.PI * +circle.getAttribute("r")!;
      gsap.set(circle, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
      });

      // Animate each circle with a stagger
      gsap.to(circle, {
        strokeDashoffset: 0,
        duration: 2,
        delay: index * 0.5, // Staggered start for each circle
        ease: "power2.inOut",
      });
    });
  }, []);

  return (
    <div className="text-white py-12 flex items-center justify-center gap-8 flex-wrap">
      {circles.map((circle) => (
        <div key={circle.id} className="relative">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            className="circle-container"
          >
            {/* Circle outline */}
            <circle
              cx="150"
              cy="150"
              r="140"
              className="circle "
              stroke="white "
              strokeWidth="2"
              fill="none"
            />
          </svg>
          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-lg font-bold">{circle.title}</h3>
            <p className="text-xs">{circle.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CircleWithAnimation;
