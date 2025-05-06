// src/components/header.tsx
"use client"; // Only needed if using client-side features

export function BakeryHeader() {
  return (
    <header className="bg-primary text-white p-6">
      <h1 className="font-heading text-4xl">Shakeys Cakes</h1>
      <p className="text-primary-light">Artisanal Bakery Since 1995</p>
      <button className="bg-secondary hover:bg-accent text-white px-4 py-2 rounded mt-4">
        Order Now
      </button>
    </header>
  );
}
