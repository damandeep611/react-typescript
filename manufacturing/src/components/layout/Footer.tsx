import { Linkedin, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1211] text-gray-400">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-white/10" />
              <span className="text-xl font-semibold text-white">Prodmast</span>
            </div>
            <p className="text-sm">
              Our solutions make production faster and cheaper. Contact us for
              more information.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Industries
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Precision Metalforming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Industrial Manufacturing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  High Tech & electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Aerospace
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Manufacturing Execution System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Enterprise Resource Planning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Quality Management System
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Supply Chain Planning
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t border-gray-800 pt-8 md:flex-row md:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <span className="text-sm">
              © 2024 Prodmast, All rights reserved
            </span>
            <nav className="flex space-x-4 text-sm">
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
