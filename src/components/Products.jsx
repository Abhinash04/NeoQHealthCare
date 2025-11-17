import NeoTrack from "../assets/NeoTrack.png";

const Products = () => {
  return (
    <>
      <div id="products"></div>
      <section className="w-full px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-48">
        <div className="w-full max-w-[1120px] mx-auto">
          <h2 id="heading" className="max-w-[347px]">
            Our Products{" "}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex items-center justify-center order-1 lg:order-1">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl transform scale-90"></div>

                <div className="relative z-10 p-8 sm:p-12">
                  <img
                    src={NeoTrack}
                    alt="NeoTrak Device"
                    className="w-full h-auto transform hover:scale-150 transition-transform duration-300 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 order-2 lg:order-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                <span className="text-cyan-700 text-sm font-medium">
                  Early Product Render
                </span>
              </div>

              {/* Title with Gradient */}
              <h2 className="text-5xl sm:text-6xl font-bold text-[#00145b]">
                NeoTrak
              </h2>

              {/* Tagline */}
              <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                World's First Wearable Neonatal Sepsis Screening Device
              </p>

              {/* Description with highlighted text */}
              <p className="text-gray-600 text-lg leading-relaxed">
                NeoTrak monitors for{" "}
                <span className="text-cyan-600 font-semibold">
                  Neonatal Sepsis
                </span>
                , <span className="text-cyan-600 font-semibold">Jaundice</span>,
                and other life-threatening conditions in at-risk newborns inside{" "}
                <span className="font-medium text-gray-800">
                  NICUs/SNCUs/NBSUs
                </span>
                .
              </p>

              {/* Key Features Pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                  Sepsis Screening
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Jaundice Monitoring
                </span>
                <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                  NICU Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

// import { useState } from "react";
// import product0 from "../assets/Product0.png";
// import product1 from "../assets/Product1.png";
// import product2 from "../assets/Product2.png";
// import upArrow from "../assets/UpArrow.png";
// import downArrow from "../assets/DownArrow.png";

// const ProductCard = ({ title, subtitle, image, description }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <>
//       <div className="flip-card shadow-lg rounded-xl transition-shadow duration-300 max-[500px]:w-[400px] max-[500px]:mx-auto max-[380px]:w-[345px] max-[350px]:w-[308px] max-[330px]:w-[290px]">
//         <div
//           className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}
//           onClick={handleFlip}
//         >
//           {/* Front Side */}
//           <div className="flip-card-front">
//             <div className="p-0 h-full flex flex-col">
//               {/*Title & Subtitle */}
//               <div className="flex justify-between items-start px-5 pt-5 pb-4">
//                 <div className="w-[60%] text-left">
//                   <h3 className="text-2xl lg:text-[32px] font-bold font-montserrat leading-tight lg:leading-[40px] text-black mb-0 max-[500px]:text-3xl max-[500px]:leading-7 whitespace-nowrap">
//                     {title}
//                   </h3>
//                   <p className="text-base font-medium font-azeret leading-5 text-gray-600 max-[500px]:text-xl max-[400px]:text-lg max-[350px]:text-base whitespace-nowrap">
//                     {subtitle}
//                   </p>
//                 </div>
//                 <div className="w-14 h-14 flex items-center justify-center">
//                   <img
//                     src={upArrow}
//                     alt="Flip card"
//                     className="w-16 h-16 object-contain max-[500px]:w-12 max-[500px]:h-12"
//                   />
//                 </div>
//               </div>

//               <div className="flex-1 relative w-full flex items-end justify-center overflow-hidden">
//                 <img
//                   src={image}
//                   alt={`${title} device`}
//                   className="w-full h-auto object-cover max-[500px]:w-full max-[500px]:object-contain"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Back Side */}
//           <div className="flip-card-back relative overflow-hidden">
//             <div className="p-5 lg:p-5 h-full flex flex-col justify-between relative z-10 max-[500px]:p-4">
//               <div className="text-left">
//                 <h3 className="text-2xl lg:text-[32px] font-bold font-montserrat leading-tight lg:leading-[40px] text-black mb-0 max-[500px]:text-3xl max-[500px]:leading-6 whitespace-nowrap">
//                     {title}
//                   </h3>
//                   <p className="text-base font-medium font-azeret leading-5 text-gray-600 mb-4 max-[500px]:text-xl max-[400px]:text-lg whitespace-nowrap">
//                     {subtitle}
//                   </p>
//                 {/* <p className="text-sm lg:text-base font-light font-azeret leading-5 flex-grow lg:leading-[22px] text-gray-600 max-[500px]:text-base max-[500px]:leading-4">
//                   {description}
//                 </p> */}
//                 <p className="text-base font-light font-azeret leading-relaxed text-gray-600 flex-grow">{description}</p>
//               </div>

//               <div className="relative w-full h-full z-20">
//                 <img
//                   src={downArrow}
//                   alt="Flip back"
//                   className="w-8 h-8 object-contain absolute bottom-0 left-0 max-[500px]:w-6 max-[500px]:h-6"
//                 />
//               </div>
//             </div>

//             {/* Blueish blurry drop shadow */}
//             <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#13B2F3] blur-[80px] opacity-[40%] rounded-full z-0 translate-x-6 translate-y-6 max-[500px]:w-24 max-[500px]:h-24"></div>
//             <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#5380E6] blur-[80px] opacity-[40%] rounded-full z-0 translate-x-6 translate-y-6 max-[500px]:w-24 max-[500px]:h-24"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const Products = () => {
//   const productsData = [
//     {
//       title: "NeoTrak",
//       subtitle: "Wearable Neonatal Monitor",
//       image: product0,
//       description:
//         "NeoTrak is a non-invasive, skin-friendly patch designed to continuously monitor vital parameters in preterm and low birth weight infants. It tracks respiration, Skin Bilirubin, Hydration, Body and ambient Temperature, and more, with real-time alerts via a connected dashboard. Ideal for hospitals and home care, it reduces manual monitoring and enables timely intervention.",
//     },
//     {
//       title: "BiliFast",
//       subtitle: "Rapid Jaundice Detection Kit",
//       image: product1,
//       description:
//         "BiliFast: A disposable, rapid diagnostic kit utilizing screen-printed carbon electrode strips for quick and accurate detection of neonatal jaundice.",
//     },
//     {
//       title: "BiliFast Pro",
//       subtitle: "Handheld TcB Monitor",
//       image: product2,
//       description:
//         "BiliFast Pro: An advanced, non-invasive transcutaneous bilirubin monitor that automatically compensates for skin tone variations.",
//     },
//   ];

//   return (
//     <>
//       <div id="products"></div>
//       <section className="w-full px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-48">
//         <div className="w-full max-w-[1120px] mx-auto">
//           <h2 id="heading" className="max-w-[347px]">
//             Our Products
//           </h2>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-[500px]:gap-6">
//             {productsData.map((product, index) => (
//               <ProductCard
//                 key={index}
//                 title={product.title}
//                 subtitle={product.subtitle}
//                 image={product.image}
//                 description={product.description}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Products;
