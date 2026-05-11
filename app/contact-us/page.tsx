import Link from "next/link";

export default function ContactSection() {
  return (
    
    <section className="bg-gray-100 px-6">
        <div>
            <nav className="w-full flex items-center justify-between px-8 py-5 shadow-sm bg-white sticky top-0 z-50">
        <div className="flex">
            <Link href="/">
          <img src='/images/logo.jpg' alt="Miteri Logo"  className=" rounded-lg" width={100} height={100} />
          </Link>
          <div className="flex flex-col">

          <h1 className="text-2xl font-bold tracking-wide pl-5">
            Miteri Home Decor
          </h1>
          <p className="text-sm text-gray-500 pl-5">The name you trust</p>
        </div>
        </div>

        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-gray-500 cursor-pointer">Home</li>
          <li className="hover:text-gray-500 cursor-pointer">Services</li>
          <li className="hover:text-gray-500 cursor-pointer">Projects</li>
          <li className="hover:text-gray-500 cursor-pointer">Contact</li>
        </ul>
      </nav>
        </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-10">

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
                Sukedhara-4, <br />
                Kathmandu, Nepal
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Phone:
              </h3>

              <p>+977-9749404181</p>
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
    </section>
  );
}