// import { Outlet } from "react-router-dom";

// import Navbar from "../component/navbar/Navbar";
// import ScrollProgress from "../component/navigation/ScrollProgress";
// import ContactFooter from "../component/contact/ContactFooter";
// import PortfolioAI from "../component/ai/PortfolioAI";

// const Layout = () => {
//   return (
//     <div className="relative min-h-screen overflow-x-hidden bg-[#070B1F] text-white">
//       {/* Navigation */}
//       <Navbar />

//       {/* Scroll Progress */}

      
//       <ScrollProgress />

//       {/* Main Content */}
//       <main className="relative z-10">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <footer className="relative z-10">
//         <ContactFooter />
//       </footer>

//       {/* Floating AI Assistant */}
//       <div className="fixed bottom-8 right-8 z-[9999]">
//         <PortfolioAI />
//       </div>
//     </div>
//   );
// };

// export default Layout;



// import { Outlet } from "react-router-dom";

// import Navbar from "../component/navbar/Navbar";
// import ScrollProgress from "../component/navigation/ScrollProgress";
// // import ContactFooter from "../component/contact/ContactFooter";
// import PortfolioAI from "../component/ai/PortfolioAI";

// import ScrollToTop from "../component/common/ScrollToTop";

// const Layout = () => {
//   return (
//     <div className="relative min-h-screen overflow-x-hidden bg-[#070B1F] text-white">
//       {/* Navigation */}
//       <Navbar />

//       {/* Scroll Progress */}

      
//       <ScrollProgress />

//       {/* Main Content */}
//       <main className="relative z-10">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       {/* <footer className="relative z-10">
//         <ContactFooter />
//       </footer> */}

//       {/* Floating AI Assistant */}
//       {/* <div className="fixed bottom-8 right-8 z-[9999]">
//         <PortfolioAI />
//       </div> */}

//       <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-3">
//         <ScrollToTop />
//         <PortfolioAI />
//       </div>

//     </div>
//   );
// };

// export default Layout;







import { Outlet } from "react-router-dom";

import Navbar from "../component/navbar/Navbar";
import ScrollProgress from "../component/navigation/ScrollProgress";
// import ContactFooter from "../component/contact/ContactFooter";
import PortfolioAI from "../component/ai/PortfolioAI";

import ScrollToTop from "../component/common/ScrollToTop";

const Layout = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070B1F] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Scroll Progress */}

      
      <ScrollProgress />

      {/* Main Content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      {/* <footer className="relative z-10">
        <ContactFooter />
      </footer> */}

      {/* Floating AI Assistant */}
      {/* <div className="fixed bottom-8 right-8 z-[9999]">
        <PortfolioAI />
      </div> */}

      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-3">
        <ScrollToTop />
        <PortfolioAI />
      </div>

    </div>
  );
};

export default Layout;