import Lottie from "lottie-react";
import neoqAnimation from "../assets/neoq.json";

const NeoQLoader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <Lottie animationData={neoqAnimation} loop={true} className="w-72 h-72" />
    </div>
  );
};

export default NeoQLoader;