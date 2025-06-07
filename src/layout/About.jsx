// import aboutImg from "../assets/about_img/image.png";
// import checkmark from "../assets/checkmark-circle-outline 1.png";

// const About = () => {
//   return (
//     <section className="bg-[var(--background-light-section)] md:h-[600px] h-[800px] flex items-center justify-center">
//       <div className="container mx-auto flex justify-center items-center h-full px-4 md:px-0">
//         <div className="flex flex-col gap-8 md:flex-row items-center">
//           {/* This is the About Content */}
//           <div className="max-w-3xl">
//             <h1 className="font-medium md:text-left text-4xl text-center mb-6">
//               Clean and fragrant soy wax
//             </h1>
//             <p className="font-medium text-[16px] text-[var(--primary-color)] mb-10">
//               Made for your home and for your wellness
//             </p>
//             {/* List */}
//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <img src={checkmark} alt="/" className="w-3 h-3" />
//                 <p>
//                   <span className="font-semibold">Eco-sustainable:</span>
//                   All recyclable materials, 0% CO2 emissions
//                 </p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <img src={checkmark} alt="/" className="w-3 h-3" />
//                 <p>
//                   <span className="font-semibold">Hyphoallergenic:</span>
//                   100% natural, human friendly ingredients
//                 </p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <img src={checkmark} alt="/" className="w-3 h-3" />
//                 <p>
//                   <span className="font-semibold">Handmade:</span>
//                   All candles are craftly made with love.
//                 </p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <img src={checkmark} alt="/" className="w-3 h-3" />
//                 <p>
//                   <span className="font-semibold">Long burning:</span>
//                   No more waste. Created for last long.
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* Image */}
//           <div>
//             <img src={aboutImg} alt="About Us" />
//           </div>
//           {/* next step I will do Button "load more" */}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default About;

import aboutImg from "../assets/about_img/image.png";
import checkmark from "../assets/checkmark-circle-outline 1.png";

const About = () => {
  return (
    <section className="bg-[var(--background-light-section)] py-12 md:py-0 md:h-[600px] flex items-center justify-center">
      <div className="container mx-auto flex justify-center items-center h-full px-4 md:px-0">
        <div className="grid grid-cols-1 md:flex md:flex-row items-center gap-8">
          {/* This is the About Content */}
          <div className=" max-w-3xl">
            <h1 className="font-medium md:text-left text-4xl text-center mb-6">
              Clean and fragrant soy wax
            </h1>

            <p className="font-medium text-[16px] text-[var(--primary-color)] mb-6 md:mb-10">
              Made for your home and for your wellness
            </p>

            {/* Image - Mobile Only (shown between title and list) */}
            <div className="md:hidden mb-6 flex justify-center">
              <img
                src={aboutImg}
                alt="About Us"
                className="max-w-xs shadow-lg rounded-md"
              />
            </div>

            {/* List */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={checkmark}
                  alt="/"
                  className="w-6 h-6 md:w-3 md:h-3"
                />
                <p>
                  <span className="font-semibold">Eco-sustainable:</span>
                  All recyclable materials, 0% CO2 emissions
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={checkmark}
                  alt="/"
                  className="w-6 h-6 md:w-3 md:h-3"
                />
                <p>
                  <span className="font-semibold">Hyphoallergenic:</span>
                  100% natural, human friendly ingredients
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={checkmark}
                  alt="/"
                  className="w-6 h-6 md:w-3 md:h-3"
                />
                <p>
                  <span className="font-semibold">Handmade:</span>
                  All candles are craftly made with love.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={checkmark}
                  alt="/"
                  className="w-6 h-6 md:w-3 md:h-3"
                />
                <p>
                  <span className="font-semibold">Long burning:</span>
                  No more waste. Created for last long.
                </p>
              </div>
            </div>
          </div>

          {/* Image - Desktop Only (shown on the side) */}
          <div className="hidden md:block">
            <img
              src={aboutImg}
              alt="About Us"
              className="shadow-lg rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
