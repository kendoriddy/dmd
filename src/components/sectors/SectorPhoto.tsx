"use client";

import Image from "next/image";

type Variant =
  | "agriculture"
  | "energy"
  | "trade"
  | "automobile"
  | "oilgas"
  | "consultancy";

const photos: Record<Variant, { src: string; alt: string; position?: string }> =
  {
    agriculture: {
      src: "/visuals/agriculture_irrigation.jpg",
      alt: "Agricultural irrigation and field work",
      position: "object-[50%_60%]",
    },
    energy: {
      src: "/visuals/solar_and_windturbins.jpeg",
      alt: "Renewable energy with solar and wind turbines",
    },
    trade: {
      src: "/visuals/cargos_in_port.jpeg",
      alt: "Cargo shipment and port logistics",
    },
    automobile: {
      src: "/visuals/fleet_of_cars.jpeg",
      alt: "Fleet vehicles and industrial equipment",
    },
    oilgas: {
      src: "/visuals/oil_offshore_forcados.webp",
      alt: "Offshore oil and gas operations",
    },
    consultancy: {
      src: "/visuals/meeting_serious_people.jpeg",
      alt: "Strategic consultancy and executive meeting",
    },
  };

export function SectorPhoto({
  variant,
  className = "",
}: Readonly<{ variant: Variant; className?: string }>) {
  const { src, alt, position } = photos[variant];

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${position ?? ""}`}
        sizes="(min-width: 768px) 280px, 100vw"
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-tr from-black/10 via-transparent to-black/5" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_0_1px_rgba(15,23,42,0.08),0_20px_70px_rgba(2,6,23,0.08)]" />
    </div>
  );
}
