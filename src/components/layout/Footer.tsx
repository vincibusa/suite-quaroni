import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg 
                className="h-8 w-8 text-primary" 
                fill="none" 
                viewBox="0 0 48 48" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  clipRule="evenodd" 
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" 
                  fill="currentColor" 
                  fillRule="evenodd"
                />
              </svg>
              <h3 className="text-xl font-bold">Suite Quaroni</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Experience the charm of Palermo in our elegant B&B. Luxury accommodations in the heart of Sicily with personalized service and authentic Sicilian hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/discover" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Discover Palermo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5">location_on</span>
                <div>
                  <p className="text-gray-300 text-sm">Via Roma, 123</p>
                  <p className="text-gray-300 text-sm">90133 Palermo, Italy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                <a 
                  href="mailto:info@suitequaroni.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  info@suitequaroni.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">phone</span>
                <a 
                  href="tel:+39021234567" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +39 02 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Suite Quaroni. All Rights Reserved. Designed with ♥ in Palermo.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.478 10-10S15.522 0 10 0zm5 8h-2v6h-2V8H9V6h2V5a2 2 0 012-2h2v2h-2v1h2v2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="TripAdvisor"
            >
              <span className="material-symbols-outlined">travel_explore</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}