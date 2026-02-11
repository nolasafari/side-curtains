"use client";

import { useState } from "react";
import Image from "next/image";
import { marques, galleryImages } from "@/data/galleryData";

export default function GalleryPage() {
  const [activeMarque, setActiveMarque] = useState("all");

  const filtered =
    activeMarque === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.marque === activeMarque);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brg mb-3">The Gallery</h1>
        <p className="text-leather italic text-lg">
          Beautiful machines, lovingly captured
        </p>
        <div className="w-16 h-1 bg-leather mx-auto mt-4 rounded" />
      </div>

      {/* Marque Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveMarque("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeMarque === "all"
              ? "bg-brg text-cream"
              : "bg-cream-dark text-brg hover:bg-brg hover:text-cream"
          }`}
        >
          All Marques
        </button>
        {marques.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveMarque(m.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeMarque === m.id
                ? "bg-brg text-cream"
                : "bg-cream-dark text-brg hover:bg-brg hover:text-cream"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* Marque Header (when filtered) */}
      {activeMarque !== "all" && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-brg">
            {marques.find((m) => m.id === activeMarque)?.name}
          </h2>
          <p className="text-leather italic">
            {marques.find((m) => m.id === activeMarque)?.tagline}
          </p>
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
          >
            {/* Image or Emoji Placeholder */}
            {image.imageUrl ? (
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={`${image.year || ""} ${image.model}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {image.imageCredit && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-2 py-1">
                    <p className="text-[10px] text-white/80">
                      {image.commonsUrl ? (
                        <a
                          href={image.commonsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white"
                        >
                          📷 {image.imageCredit} / Wikimedia Commons / {image.imageLicense}
                        </a>
                      ) : (
                        <>📷 {image.imageCredit} / {image.imageLicense}</>
                      )}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${image.color}22, ${image.color}44)`,
                }}
              >
                <div className="text-center">
                  <span className="text-6xl block mb-2 group-hover:scale-110 transition-transform duration-300">
                    {image.emoji}
                  </span>
                  <p className="text-xs text-brg-light font-medium opacity-50">
                    Photo coming soon
                  </p>
                </div>
              </div>
            )}
            {/* Card Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-brg">{image.model}</h3>
                {image.year && (
                  <span className="text-xs bg-cream-dark text-leather px-2 py-1 rounded-full">
                    {image.year}
                  </span>
                )}
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Submit your car CTA */}
      <div className="text-center mt-16 p-8 bg-cream-dark rounded-xl">
        <h3 className="text-xl font-bold text-brg mb-2">Got a British Roadster?</h3>
        <p className="text-leather italic mb-4">
          We&apos;d love to feature your car in the gallery. Share your photos in the{" "}
          <a href="/forum" className="text-brg font-semibold hover:text-brg-light">
            forum
          </a>{" "}
          and we&apos;ll add the best ones here.
        </p>
        <p className="text-sm text-leather">
          Bonus points for barn finds, mid-restoration shots, and &quot;it&apos;s finally running!&quot; moments.
        </p>
      </div>
    </div>
  );
}
