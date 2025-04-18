import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-pink-50 to-purple-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-transparent bg-clip-text mb-2">
            About V Mart
          </h1>
          <p className="text-gray-700 text-lg">
            Where quality meets affordability – your trusted everyday supermarket!
          </p>
        </div>

        {/* Description */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
          <p className="text-gray-800 text-md leading-relaxed">
            V Mart is dedicated to offering unbeatable deals on daily essentials – from groceries to personal care items. 
            With a mission to make your shopping easier and more budget-friendly, we hand-pick the best offers just for you.
            Our deals are updated regularly, so be sure to check in often!
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Address */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2 text-pink-800">
              <FaMapMarkerAlt /> Our Location
            </h2>
            <p className="text-gray-800">
              V Mart Supermarket<br />
              10-102, Main Road, Porumamilla,<br />
              Kadapa Dt, Andhrapradesh - 516193<br />
              India
            </p>
          </div>

          {/* Contact */}
          <div className="bg-purple-100 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2 text-purple-800">
              <FaPhoneAlt /> Contact Us
            </h2>
            <p className="text-gray-800">
            Phone/Message: <a href="" className="text-purple-600 underline">+91 9441156698</a><br />
              {/* Email: <a href="mailto:support@discountmart.in" className="text-purple-600 underline">support@discountmart.in</a> */}
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-yellow-100 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-3 text-yellow-800">
            <FaClock /> Opening Hours
          </h2>
          <ul className="text-gray-800">
            <li>Monday – Saturday: 6.30:00 AM – 10:00 PM</li>
            <li>Sunday: 7:00 AM – 9:00 PM</li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11941.24933500717!2d78.9902667!3d15.0021062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb497b835c16df3%3A0xd043cc2149c34127!2sV%20Mart!5e0!3m2!1sen!2sin!4v1678262769120!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
