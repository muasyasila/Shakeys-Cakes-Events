// app/page.tsx
import { Cake, PartyPopper, ShoppingCart, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('/images/cake-bg.jpg')] bg-cover bg-center opacity-20" />

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-rose-800 relative z-10 mb-6">
          SHAKEYS CAKES & EVENTS
        </h1>

        <p className="text-xl md:text-2xl text-rose-700 mb-8 relative z-10 max-w-2xl mx-auto">
          Sweet Moments, Lasting Memories
        </p>

        <div className="relative z-10 flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/shakeyscakesandevents"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-700 hover:text-primary text-4xl transition-all duration-300 ease-in-out transform hover:scale-125"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://web.facebook.com/shakeyscakes/?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-700 hover:text-primary text-4xl transition-all duration-300 ease-in-out transform hover:scale-125"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@shakeyscakesandevents"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-700 hover:text-primary text-4xl transition-all duration-300 ease-in-out transform hover:scale-125"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>

        <div className="relative z-10 flex gap-4">
          <Button className="bg-rose-600 hover:bg-rose-700 text-white">
            <ShoppingCart className="mr-2" /> Order Now
          </Button>
          <Button variant="outline" className="text-rose-700 border-rose-700">
            <CalendarDays className="mr-2" /> Book Event
          </Button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
          OUR SPECIALTIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <HighlightCard
            icon={<Cake className="w-10 h-10 mx-auto" />}
            title="100+ Flavors"
            description="Custom cakes for every taste"
          />
          <HighlightCard
            icon={<PartyPopper className="w-10 h-10 mx-auto" />}
            title="Events"
            description="Weddings, birthdays & more"
          />
          <HighlightCard
            icon={<ShoppingCart className="w-10 h-10 mx-auto" />}
            title="Fast Delivery"
            description="Across the city"
          />
          <HighlightCard
            icon={<CalendarDays className="w-10 h-10 mx-auto" />}
            title="Book in Advance"
            description="Plan your special day"
          />
        </div>
      </section>
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
          <p className="text-gray-600 mt-2">
            Stay updated with our latest stories
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="/blog1.png"
              alt="Blog 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">
                Sweet Secrets of a Perfect Cake
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                By Jane Doe · Apr 12, 2025
              </p>
              <p className="text-gray-700 mb-4">
                Discover the top tips that every baker should know to make the
                fluffiest cakes...
              </p>
              <button className="text-pink-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="/blog1.png"
              alt="Blog 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">
                Garden Wedding Setup Inspiration
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                By Rodah · Mar 29, 2025
              </p>
              <p className="text-gray-700 mb-4">
                Get inspired by our most elegant outdoor setups for your dream
                wedding ceremony...
              </p>
              <button className="text-pink-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="/blog1.png"
              alt="Blog 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">
                Behind the Scenes at Shakeys
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                By Team Shakeys · Feb 18, 2025
              </p>
              <p className="text-gray-700 mb-4">
                Take a peek into our creative process — from design to
                decoration and delivery...
              </p>
              <button className="text-pink-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function HighlightCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-rose-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-rose-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
