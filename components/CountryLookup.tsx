"use client";

import { useEffect, useState } from "react";

async function getLocation(): Promise<string> {
  const res = await fetch("https://ipapi.co/json/");

  if (!res.ok) return "Unknown location";

  const data: { country_name: string } = await res.json();
  return data.country_name;
}

export default function CountryLookup() {
  const [location, setLocation] = useState("United States");

  useEffect(() => {
    getLocation().then((res) => setLocation(res));
  });

  return <span>{location}</span>;
}
