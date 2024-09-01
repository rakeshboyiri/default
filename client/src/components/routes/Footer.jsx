import React from 'react';

function Footer() {

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">e-PMSSS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About PMSSS</a></li>
              <li><a href="#" className="hover:underline">Eligibility</a></li>
              <li><a href="#" className="hover:underline">Login</a></li>
              <li><a href="#" className="hover:underline">SignUp</a></li>
              <li><a href="#" className="hover:underline">Status Bar</a></li>
              <li><a href="#" className="hover:underline">Dashboard</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Help Desk</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Announcements</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Login</a></li>
              <li><a href="#" className="hover:underline">SignUp</a></li>
              <li><a href="#" className="hover:underline">Announcements</a></li>
              <li><a href="#" className="hover:underline">Help Desk</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">&copy; 2024 e-PMSSS. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
