"use client";

import { Cake, PartyPopper, ShoppingCart, CalendarDays } from "lucide-react";
import HighlightCard from "./HighlightCard";

export default function SpecialtiesSection() {
  return (
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
  );
}
