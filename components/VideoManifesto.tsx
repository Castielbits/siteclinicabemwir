import { Play } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { videoSection } from "@/data/siteContent";

export default function VideoManifesto() {
  return (
    <section className="section-dark section-full overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr] lg:items-center">

          {/* Left — text */}
          <div>
            <ScrollReveal>
              <p className="eyebrow eyebrow-line light text-white/50">
                {videoSection.eyebrow}
              </p>
              <h2 className="heading-serif mt-8 text-3xl text-white sm:text-4xl lg:text-[2.6rem]">
                {videoSection.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                {videoSection.description}
              </p>
            </ScrollReveal>
          </div>

          {/* Right — video frame */}
          <ScrollReveal delay={2}>
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/8 bg-white/4">
              {/* Organic glow blobs inside the frame */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-butter/12 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-sage/10 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-blush/8 blur-2xl" />
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 hover:bg-white/15 cursor-pointer">
                  <Play size={28} fill="currentColor" className="ml-1" />
                </div>
                <span className="eyebrow text-white/35" style={{ fontSize: "0.6rem" }}>
                  {videoSection.status}
                </span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-5 right-5 flex gap-1.5" aria-hidden="true">
                <div className="h-2 w-2 rounded-full bg-butter/40" />
                <div className="h-2 w-2 rounded-full bg-blush/40" />
                <div className="h-2 w-2 rounded-full bg-sage/40" />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
