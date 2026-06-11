import { cn } from "@/lib/utils";

export type SceneKind =
  | "lunar-eclipse"
  | "solar-eclipse"
  | "new-moon"
  | "full-moon";

const stars = Array.from({ length: 48 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 96}%`,
  delay: `${-((index * 0.43) % 5)}s`,
  size: `${index % 7 === 0 ? 2 : 1}px`,
}));

const sceneLabels: Record<SceneKind, string> = {
  "lunar-eclipse": "Lunar Eclipse",
  "solar-eclipse": "Solar Eclipse",
  "new-moon": "New Moon",
  "full-moon": "Full Moon",
};

export function MoonScene({
  kind,
  preview = false,
}: {
  kind: SceneKind;
  preview?: boolean;
}) {
  const SceneElement = preview ? "section" : "main";

  return (
    <SceneElement
      className={cn("scene", `scene--${kind}`, preview && "scene--preview")}
      aria-label={kind.replace("-", " ")}
    >
      <div className="stars" aria-hidden="true">
        {stars.map((star, index) => (
          <i
            key={index}
            style={
              {
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />

      {kind === "solar-eclipse" && (
        <div className="solar-rays" aria-hidden="true" />
      )}

      <div className="moon-wrap" aria-hidden="true">
        <div className="moon">
          <div className="craters">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="moon-shadow" />
        </div>
      </div>

      {preview && <span className="moon-label">{sceneLabels[kind]}</span>}

      <div className="horizon" aria-hidden="true" />
    </SceneElement>
  );
}
