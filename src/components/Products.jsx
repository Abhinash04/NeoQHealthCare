import { useState } from "react";
import product1 from "../assets/Product1.png"; // Ensure this path is correct
import product2 from "../assets/Product2.png"; // Ensure this path is correct
import upArrow from "../assets/UpArrow.png";   // Ensure this path is correct
import downArrow from "../assets/DownArrow.png"; // Ensure this path is correct

const ProductCard = ({ 
  title, 
  subtitle, 
  image, 
  description,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="flip-card">
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
          {/* Front Side */}
          <div className="flip-card-front">
            <div className="p-5 lg:p-6 h-full">
              <div className="flex justify-between items-start mb-6 lg:mb-7">
                <div className="w-[60%]">
                  <h3 className="text-2xl lg:text-[32px] font-bold leading-tight lg:leading-[40px] text-[#00145B] mb-2">
                    {title}
                  </h3>
                  <p className="text-base font-medium leading-5 text-gray-600">
                    {subtitle}
                  </p>
                </div>
                <div className="w-14 h-14 flex items-center justify-center">
                  <img
                    src={upArrow}
                    alt="Flip card"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="relative flex justify-center items-center h-[calc(100%-100px)]">
                <img
                  src={image}
                  alt={`${title} device`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            <div className="p-6 lg:p-7 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl lg:text-[28px] font-bold leading-tight text-[#00145B] mb-2">
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
                    className="w-8 h-8 object-contain opacity-60 absolute bottom-4 left-4"
                />
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 400px;
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 1rem;
          background-color: white;
          box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .flip-card {
            height: 350px;
          }
        }
        
        /* Hover effect for desktop */
        @media (min-width: 1024px) {
          .flip-card:hover .flip-card-inner:not(.flipped) {
            transform: translateY(-2px) scale(1.02);
          }
          
          .flip-card:hover .flip-card-inner.flipped {
            transform: translateY(-2px) scale(1.02) rotateY(180deg);
          }
        }
      `}</style>
    </>
  );
};

const Products = () => {
  const productsData = [
    {
      title: "NeoTrak",
      subtitle: "Wearable Neonatal Monitor",
      image: product1,
      description: "NeoTrak is a non-invasive, skin-friendly patch designed to continuously monitor vital parameters in preterm and low birth weight infants. It tracks respiration, Skin Bilirubin, Hydration, Body and ambient Temperature, and more, with real-time alerts via a connected dashboard. Ideal for hospitals and home care, it reduces manual monitoring and enables timely intervention."
    },
    {
      title: "BiliFast",
      subtitle: "Rapid Jaundice Detection Kit",
      image: product1, 
      description: "BiliFast is a rapid, non-invasive jaundice detection kit designed for quick and accurate assessment of bilirubin levels in newborns. Using advanced photometric technology, it provides instant results without the need for blood samples, making it ideal for routine screening in hospitals, clinics, and community health centers."
    },
    {
      title: "BiliFast Pro",
      subtitle: "Handheld Jaundice Monitor", 
      image: product2, 
      description: "BiliFast Pro is an enhanced version of our jaundice detection system, featuring improved accuracy, cloud connectivity, and comprehensive reporting capabilities. Perfect for healthcare facilities requiring detailed documentation and remote monitoring of neonatal jaundice cases."
    }
  ];

  return (
    <section
      id="products"
      className="w-full px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-48"
    >
      <div className="w-full max-w-[1122px] mx-auto">
        <h2 id="heading" className="mb-8">
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
  );
};

export default Products;