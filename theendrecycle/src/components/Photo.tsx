import Image from "next/image";
import { photos, src, type PhotoKey } from "@/data/images";

interface Props {
  k: PhotoKey;
  alt: string;
  className?: string;
  sizes?: string;
  width?: number;
  priority?: boolean;
  credit?: boolean;
}

/** รูปแบบ fill + บรรทัดเครดิตเล็กๆ มุมล่าง (ตามเงื่อนไข CC BY / CC BY-SA) */
export default function Photo({ k, alt, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", width = 1000, priority, credit = true }: Props) {
  const p = photos[k];
  return (
    <figure className={`relative overflow-hidden bg-sky-100 ${className}`}>
      <Image src={src(p, width)} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      {credit && (
        <figcaption className="absolute bottom-0 right-0 max-w-full truncate rounded-tl-md bg-black/45 px-1.5 py-0.5 text-[10px] leading-tight text-white/90">
          <a href={p.sourceUrl} target="_blank" rel="noopener nofollow" className="hover:underline">
            {p.author}
          </a>{" "}
          ·{" "}
          <a href={p.licenseUrl} target="_blank" rel="noopener nofollow license" className="hover:underline">
            {p.license}
          </a>
        </figcaption>
      )}
    </figure>
  );
}
