import Image from 'next/image';

export default function Hero() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-500 to-cyan-500 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to <span className="text-teal-400">Theorix</span>
            </h1>
            <p className="text-lg mb-8">
              Your gateway to exploring the world of science and mathematics. Access free research papers, theoretical books, and curated videos to expand your knowledge.
            </p>
            <div className="flex space-x-4">
              <a
                href="#explore"
                className="bg-teal-400 text-white px-6 py-3 rounded-lg font-medium shadow hover:scale-105 transition duration-300"
              >
                Explore Now
              </a>
              <a
                href="#about"
                className="bg-white text-black px-6 py-3 rounded-lg font-medium shadow hover:scale-105 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              src="/hero-image.png" // Replace with an appropriate image path
              alt="Theorix Hero"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy-500 mb-8">
            Explore Our Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-teal-500">
                Research Papers & Documents
              </h3>
              <p className="text-gray-700">
                Dive into our curated collection of open-access research papers and documents on various scientific and mathematical topics.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-teal-500">
                Theoretical Books
              </h3>
              <p className="text-gray-700">
                Access theoretical books that lay the foundation for your journey into the depths of science and math.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-teal-500">
                Theoretical Videos
              </h3>
              <p className="text-gray-700">
                Watch videos from leading educators and experts, freely available online, to enhance your understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-navy-500 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 Theorix. All rights reserved. | <a href="#" className="text-teal-400 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </section>
    </main>
  );
}
