/* eslint-disable react/prop-types */
// src/layouts/PublicLayout.js

import Navigation from "../components/ui/navigation";
import Sidebar from "../components/ui/sidebar";

const PublicLayout = ({ children }) => {
  return (
    <div className="bg-charcoalBlue min-h-screen w-full relative overflow-hidden shadow-bg bg-blue-500">
      <Sidebar />

      {/* Main Content */}
      <div className="w-full h-full relative">
        {/* Navigation */}
        <Navigation />

        <div className="w-full h-full flex justify-center items-center mt-32 relative z-20">
          <div className="container pt-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
