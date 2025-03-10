import { Facebook, Instagram, Mail, Phone, Home, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D388A] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">FAQ's</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">SOCIAL MEDIA</h3>
          <div className="flex flex-col items-center space-y-4">
            <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
              <Facebook /> <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
              <Instagram /> <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT INFO</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <Home /> <span>HOBHUB Global Pvt Ltd</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone /> <span>+91 8010876948</span>
            </li>
            <li className="flex items-center space-x-2">
              <MessageCircle /> <span>+91 8010876948</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail /> <span>info@hobyhub.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
