import Link from "next/link";

import { MoonScene } from "@/components/moon-scene";
import type { SceneKind } from "@/components/moon-scene";

const scenes: Array<{ href: string; kind: SceneKind }> = [
  { href: "/lunar-eclipse", kind: "lunar-eclipse" },
  { href: "/solar-eclipse", kind: "solar-eclipse" },
  { href: "/new-moon", kind: "new-moon" },
  { href: "/full-moon", kind: "full-moon" },
];

export default function HomePage() {
  return (
    <main className="home-grid">
      {scenes.map((scene) => (
        <Link
          key={scene.kind}
          href={scene.href}
          className="quadrant-link"
          aria-label={`View ${scene.kind.replace("-", " ")}`}
        >
          <MoonScene kind={scene.kind} preview />
        </Link>
      ))}
    </main>
  );
}
