// import React from "react";
// import AI from "./brain.json";
// import Cybersecurity from "./OpenInnovation.json";
// import TracksAnimation from "./TracksAnimation";
// import Web3 from "./Blockchain.json";
// import "./css/tracks.css";
// import ARVR from "./IOT.json";
// //import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
// function Tracks() {
//   return (
//     <div
//       className="text-white w-full"
//       data-section-name={"s-two"}
//       id={"Tracks"}
//       style={{ minHeight: "100vh" }}
//     >
//       <div className="tracks">
//         <div className="w-full pt-16">
//           <h1 className="container text-3xl py-10 mx-auto px-10 text-center pt-16">
//             {" "}
//             Tracks
//           </h1>
//         </div>
//         <div className=" track grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
//           <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
//             <div className="px-6">
//               <TracksAnimation animationData={AI} />
//               <div className="pt-6 text-center">
//                 <h1 className="text-gray-100 text-xl leading-normal mt-0 mb-2">
//                   AI & ML
//                 </h1>
//               </div>
//             </div>
//           </div>
//           <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
//             <div className="px-6">
//               <TracksAnimation animationData={Web3} />
//               <div className="pt-6 text-center">
//                 <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">
//                   Iot
//                 </h1>
//               </div>
//             </div>
//           </div>
//           <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
//             <div className="px-6">
//               <TracksAnimation animationData={ARVR} />
//               <div className="pt-6 text-center">
//                 <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">
//                   Cyber Security
//                 </h1>
//               </div>
//             </div>
//           </div>
//           <div className="flex w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
//             <div className="px-6">
//               <TracksAnimation animationData={Cybersecurity} />
//               <div className="pt-6 text-center">
//                 <h1 className="text-gray-100 text-xl   leading-normal mt-0 mb-2">
//                   Open innovation
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Tracks;
import React from "react";
import AI from "./brain.json";
import Cybersecurity from "./OpenInnovation.json";
import TracksAnimation from "./TracksAnimation";
import Web3 from "./Blockchain.json";
import ARVR from "./IOT.json";
import "./css/tracks.css"; // Importing external CSS

const Tracks = () => {
  return (
    <div className="tracks-container" data-section-name="s-two" id="Tracks">
      <div className="tracks">
        <div className="tracks-header">
          <h1 className="tracks-title">Tracks</h1>
        </div>
        <div className="tracks-grid">
          {/* AI & ML */}
          <div className="track-card track-bg-1">
            <TracksAnimation animationData={AI} />
            <h1 className="track-name">AI & ML</h1>
          </div>

          {/* IoT */}
          <div className="track-card track-bg-2">
            <TracksAnimation animationData={Web3} />
            <h1 className="track-name">IoT</h1>
          </div>

          {/* Cyber Security */}
          <div className="track-card track-bg-3">
            <TracksAnimation animationData={ARVR} />
            <h1 className="track-name">Cyber Security</h1>
          </div>

          {/* Open Innovation */}
          <div className="track-card track-bg-4">
            <TracksAnimation animationData={Cybersecurity} />
            <h1 className="track-name">Open Innovation</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;

