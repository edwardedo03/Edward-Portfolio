import { useEffect, useRef, useState } from "react";

function OnReveal({
  children,
  className = "",
  direction = "up",
  duration = 1000,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getDirection = () => {
    switch (direction) {
      case "up":
        return "translate-y-10";
      case "right":
        return "-translate-x-10";
      case "left":
        return "translate-x-10";
      case "down":
        return "-translate-y-10";
      default:
        return "translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out duration-${duration} ${isVisible ? `opacity-100 translate-x-0 translate-y-0` : `opacity-0 ${getDirection()}`} ${className}`}
    >
      {children}
    </div>
  );
}

export default OnReveal;
