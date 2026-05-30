import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}
