/* eslint-disable react/prop-types */
// src/layouts/PublicLayout.js

import RateCarousel from "../components/ratedCarousel";
import Navigation from "../components/ui/navigation";
import Sidebar from "../components/ui/sidebar";

const PublicLayout = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-screen bg-dark">
      <div className="flex h-screen overflow-hidden -mt-2">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden pt-2 relative main">
          <RateCarousel />
          <Navigation />
          <main className=" flex-1 overflow-x-hidden overflow-y-auto  px-5 py-2 content">
            {children}{" "}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
