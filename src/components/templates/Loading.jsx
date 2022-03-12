import { useEffect, useRef } from "react";

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
        <h1 className="title-font text-3xl mb-4 font-medium text-gray-900 eight-bits">
          Cargando
        </h1>
      </div>
    </div>
  );
};

export default Loading;
