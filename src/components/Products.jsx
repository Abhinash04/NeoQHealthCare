import { useState } from "react";
import product0 from "../assets/Product0.png";
import product1 from "../assets/Product1.png";
import product2 from "../assets/Product2.png";
import upArrow from "../assets/UpArrow.png";
import downArrow from "../assets/DownArrow.png";

const ProductCard = ({ title, subtitle, image, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="flip-card">
        <div
          className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          {/* Front Side */}
          <div className="flip-card-front">
            <div className="p-0 h-full flex flex-col">
              {/*Title & Subtitle */}
              <div className="flex justify-between items-start px-5 pt-5 pb-4">
                <div className="w-[60%] text-left">
                  <h3 className="text-2xl lg:text-[32px] font-bold font-montserrat leading-tight lg:leading-[40px] text-[#00145B] mb-2 whitespace-nowrap">
                    {title}
                  </h3>
                  <p className="text-base font-medium leading-5 text-gray-600 whitespace-nowrap">
                    {subtitle}
                  </p>
                </div>
                <div
                  className="w-14 h-14 flex items-center justify-cent
                er"
                >
                  <img
                    src={upArrow}
                    alt="Flip card"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 relative w-full flex items-end justify-center overflow-hidden">
                <img
                  src={image}
                  alt={`${title} device`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="flip-card-back relative overflow-hidden">
            <div className="p-6 lg:p-7 h-full flex flex-col justify-between relative z-10">
              <div className="text-left">
                <h3 className="text-2xl lg:text-[28px] font-bold font-montserrat leading-tight text-[#00145B] mb-2">
                  {title}
                </h3>
                <p className="text-base font-medium leading-[20px] text-[#666666] mb-4">
                  {subtitle}
                </p>
                <p className="text-sm lg:text-base font-normal leading-5 lg:leading-[22px] text-[#333333]">
                  {description}
                </p>
              </div>
              <div className="relative w-full h-full">
                <img
                  src={downArrow}
                  alt="Flip back"
                  className="w-8 h-8 object-contain opacity-60 absolute bottom-0 left-0"
                />
              </div>
            </div>

            {/* Blueish blurry drop shadow from bottom right */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/50 blur-[60px] rounded-full z-0 translate-x-6 translate-y-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const Products = () => {
  const productsData = [
    {
      title: "NeoTrak",
      subtitle: "Wearable Neonatal Monitor",
      image: product0,
      description:
        "NeoTrak is a non-invasive, skin-friendly patch designed to continuously monitor vital parameters in preterm and low birth weight infants. It tracks respiration, Skin Bilirubin, Hydration, Body and ambient Temperature, and more, with real-time alerts via a connected dashboard. Ideal for hospitals and home care, it reduces manual monitoring and enables timely intervention.",
    },
    {
      title: "BiliFast",
      subtitle: "Rapid Jaundice Detection Kit",
      image: product1,
      description:
        "BiliFast is a rapid, non-invasive jaundice detection kit designed for quick and accurate assessment of bilirubin levels in newborns. Using advanced photometric technology, it provides instant results without the need for blood samples, making it ideal for routine screening in hospitals, clinics, and community health centers.",
    },
    {
      title: "BiliFast Pro",
      subtitle: "Handheld TcB Monitor",
      image: product2,
      description:
        "BiliFast Pro is an enhanced version of our jaundice detection system, featuring improved accuracy, cloud connectivity, and comprehensive reporting capabilities. Perfect for healthcare facilities requiring detailed documentation and remote monitoring of neonatal jaundice cases.",
    },
  ];

  return (
    <>
      <div id="products"></div>
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-48">
        <div className="w-full max-w-[1120px] mx-auto">
          <h2 id="heading" className="mb-8 max-w-[347px]">
            Our Products
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            {productsData.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                subtitle={product.subtitle}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
