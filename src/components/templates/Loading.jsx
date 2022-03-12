import { useEffect, useRef } from "react";
import { H4 } from "../atoms/Text";

const Loading = () => {
  const lottie = useRef(null);

  useEffect(() => {
    window.bodymovin.loadAnimation({
      container: lottie.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./animation.json",
    });
  }, []);

  return (
    <div className="container mt-60 mx-auto flex flex-col justify-center items-center">
      <div className="w-4/6 max-w-xl">
        <div ref={lottie} />
      </div>

      <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <H4 styles="text-primary-200">
          Buscando Resultados
        </H4>
      </div>
    </div>
  );
};

export default Loading;
