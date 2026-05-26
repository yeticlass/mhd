import Link from "next/link";
import SocialLinks from "../components/SocialLinks";
import ClickToCall from "../components/ClickToCall";
export default function ContactSection() {
  return (
    
    <section className="px-6 mb-35">
        
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-20">

        {/* LEFT GRID */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Reach Us
          </h2>

          <div className="space-y-6 text-gray-700">

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Address:
              </h3>

              <p>
                Imadol-10, <br />
                Kathmandu, Nepal
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Phone:
              </h3>

              <p>9863994561, 9749404181 </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Email:
              </h3>

              <p>miterihomedecor@gmail.com</p>
            </div>

          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Your Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-neutral-500 hover:bg-cyan-900 hover:cursor-pointer text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Submit
            </button>

          </form>
        </div>
       
        

      </div>   
      <div className="flex justify-start mt-7 mb-5 py-2 ml-5 lg:ml-90">
              <SocialLinks/>
              </div>
              <div>
        <ClickToCall/>
        </div>
    </section>
  
  );
}