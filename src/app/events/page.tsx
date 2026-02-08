"use client";

import { useState } from "react";
import Link from "next/link";
import { events, regionalClubs } from "@/data/eventsData";

const months = [
  "All", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const categories = [
  { id: "all", label: "All Events" },
  { id: "show", label: "Car Shows" },
  { id: "drive", label: "Drives" },
  { id: "social", label: "Social" },
  { id: "tech", label: "Tech Sessions" },
  { id: "national", label: "National / Major" },
];

const categoryIcons: Record<string, string> = {
  show: "🏆",
  drive: "🛣️",
  social: "☕",
  tech: "🔧",
  national: "⭐",
};

const stateColors: Record<string, string> = {
  LA: "bg-brg text-cream",
  MS: "bg-blue-700 text-white",
  AL: "bg-red-700 text-white",
  FL: "bg-orange-600 text-white",
  TX: "bg-amber-700 text-white",
  AR: "bg-purple-700 text-white",
  MO: "bg-teal-700 text-white",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateRange(start: string, end?: string): string {
  if (!end) return formatDate(start);
  const startDate = new Date(start + "T12:00:00");
  const endDate = new Date(end + "T12:00:00");
  const startStr = startDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const endStr = endDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return `${startStr} – ${endStr}`;
}

function getMonthFromDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", { month: "short" });
}

export default function EventsPage() {
  const [activeMonth, setActiveMonth] = useState("All");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = events.filter((e) => {
    const monthMatch = activeMonth === "All" || getMonthFromDate(e.dateStart) === activeMonth;
    const catMatch = activeCategory === "all" || e.category === activeCategory;
    return monthMatch && catMatch;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brg mb-3">Events Calendar</h1>
        <p className="text-leather italic text-lg">
          British car shows, drives, and gatherings within reach of New Orleans
        </p>
        <p className="text-sm text-leather mt-2">
          Covering the Gulf South — Louisiana, Mississippi, Alabama, Florida, Texas, and beyond
        </p>
        <div className="w-16 h-1 bg-leather mx-auto mt-4 rounded" />
      </div>

      {/* BMCNO Spotlight */}
      <div className="bg-gradient-to-r from-brg to-brg-light rounded-xl p-6 md:p-8 text-cream mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">Our Friends at BMCNO</h2>
            <p className="text-cream-dark text-sm leading-relaxed">
              The British Motoring Club New Orleans has been the heart of British car enthusiasm
              in the Gulf South since 1977. Their annual British Motoring Festival in Covington
              is the premier event in the region — and their monthly drives and socials are not to be missed.
            </p>
          </div>
          <a
            href="https://www.bmcno.org"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-cream text-brg font-bold rounded-lg hover:bg-cream-dark transition-colors whitespace-nowrap"
          >
            Visit BMCNO.org →
          </a>
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-4 mb-10">
        {/* Month Filter */}
        <div>
          <p className="text-sm font-semibold text-brg mb-2">Filter by Month:</p>
          <div className="flex flex-wrap gap-2">
            {months.map((m) => (
              <button
                key={m}
                onClick={() => setActiveMonth(m)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeMonth === m
                    ? "bg-brg text-cream"
                    : "bg-cream-dark text-brg hover:bg-brg hover:text-cream"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <p className="text-sm font-semibold text-brg mb-2">Filter by Type:</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === c.id
                    ? "bg-brg text-cream"
                    : "bg-cream-dark text-brg hover:bg-brg hover:text-cream"
                }`}
              >
                {c.id !== "all" && categoryIcons[c.id] + " "}{c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events List */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-cream-dark rounded-xl">
          <p className="text-leather italic">No events found for this filter. Try a different month or category.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border overflow-hidden ${
                event.highlight ? "border-brg border-l-4" : "border-cream-dark"
              }`}
            >
              <div className="p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Date Block */}
                  <div className="flex-shrink-0 text-center md:w-24">
                    <div className="bg-brg text-cream rounded-lg p-2 inline-block md:block">
                      <p className="text-xs uppercase font-semibold">
                        {new Date(event.dateStart + "T12:00:00").toLocaleDateString("en-US", { month: "short" })}
                      </p>
                      <p className="text-2xl font-bold leading-tight">
                        {new Date(event.dateStart + "T12:00:00").getDate()}
                      </p>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-brg">{event.name}</h3>
                      {event.highlight && (
                        <span className="text-xs bg-brg text-cream px-2 py-0.5 rounded-full font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-2 text-sm">
                      <span className="text-leather">
                        {formatDateRange(event.dateStart, event.dateEnd)}
                      </span>
                      <span className="text-leather">·</span>
                      <span className="text-foreground">{event.location}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${stateColors[event.state] || "bg-gray-200 text-gray-700"}`}>
                        {event.state}
                      </span>
                    </div>

                    <p className="text-foreground text-sm leading-relaxed mb-3">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="bg-cream-dark text-leather px-2 py-1 rounded-full font-medium">
                        {categoryIcons[event.category]} {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                      {event.distance && (
                        <span className="text-leather">
                          ~{event.distance} mi from New Orleans
                        </span>
                      )}
                      {event.organizerUrl ? (
                        <a
                          href={event.organizerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brg font-medium hover:text-brg-light transition-colors"
                        >
                          {event.organizer} →
                        </a>
                      ) : (
                        <span className="text-leather">{event.organizer}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Regional Clubs */}
      <section className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-brg mb-2">Regional British Car Clubs</h2>
          <p className="text-leather italic">Your neighbours in the British car community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regionalClubs.map((club) => (
            <div
              key={club.name}
              className={`bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow border ${
                club.featured ? "border-brg border-l-4" : "border-cream-dark"
              }`}
            >
              <h3 className="font-bold text-brg mb-1">{club.name}</h3>
              <p className="text-xs text-leather mb-2">{club.location}</p>
              <p className="text-sm text-foreground leading-relaxed mb-3">
                {club.description}
              </p>
              {club.url && (
                <a
                  href={club.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brg font-semibold hover:text-brg-light transition-colors"
                >
                  Visit website →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer / Contribute */}
      <div className="mt-12 bg-cream-dark rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-brg mb-2">Know of an Event?</h3>
        <p className="text-leather italic text-sm mb-2">
          This calendar focuses on British car events within roughly 500 miles of New Orleans.
          Dates and details may change — always check with the organiser before making travel plans.
        </p>
        <p className="text-leather text-sm">
          Got an event we should list? Let us know in the{" "}
          <Link href="/forum" className="text-brg font-semibold hover:text-brg-light">
            forum
          </Link>{" "}
          or drop us a line on the{" "}
          <Link href="/about" className="text-brg font-semibold hover:text-brg-light">
            about page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
