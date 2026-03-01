import Layout from "@/components/Layout";
import CircleCard from "@/components/CircleCard";
import { mockCircles } from "@/data/mockData";
import FadeIn from "@/components/FadeIn";
import { toast } from "sonner";

const CircleList = () => {
  const handleStartCircle = () => {
    toast("サークル作成を準備中...", { description: "まもなくサークルの作成を開始できます。" });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-background-secondary py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Circles</p>
            <h1 className="mb-3 font-serif text-2xl font-medium text-foreground sm:text-3xl md:text-4xl">サークル</h1>
            <p className="max-w-lg text-sm text-muted-foreground sm:text-base" style={{ lineHeight: "1.8" }}>
              同じ興味を持つ仲間と、ゆるやかにつながるサークルです。<br className="hidden sm:block" />
              参加も退会も自由。自分のペースで楽しんでください。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Image strip */}
      <FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <div className="aspect-[16/10] sm:aspect-square overflow-hidden">
            <img src="/images/reading.png" alt="" className="h-full w-full object-cover opacity-80" loading="lazy" decoding="async" />
          </div>
          <div className="aspect-[16/10] sm:aspect-square overflow-hidden">
            <img src="/images/ceramics.png" alt="" className="h-full w-full object-cover opacity-80" loading="lazy" decoding="async" />
          </div>
          <div className="aspect-[16/10] sm:aspect-square overflow-hidden hidden sm:block">
            <img src="/images/calligraphy.png" alt="" className="h-full w-full object-cover opacity-80" loading="lazy" decoding="async" />
          </div>
          <div className="aspect-[16/10] sm:aspect-square overflow-hidden hidden sm:block">
            <img src="/images/hands-flowers.png" alt="" className="h-full w-full object-cover opacity-80" loading="lazy" decoding="async" />
          </div>
        </div>
      </FadeIn>

      {/* Circles grid */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-6">
          <FadeIn>
            <p className="mb-6 text-sm text-muted-foreground sm:mb-8">現在 {mockCircles.length} のサークルが活動中です</p>
          </FadeIn>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockCircles.map((circle, i) => (
              <FadeIn key={circle.name} delay={i * 0.06}>
                <CircleCard {...circle} />
              </FadeIn>
            ))}
          </div>

          {/* Start a circle CTA */}
          <FadeIn>
            <div className="mt-12 rounded-lg border border-border bg-background-secondary p-6 text-center sm:mt-16 sm:p-8 md:p-12">
              <p className="font-serif text-base text-foreground sm:text-lg">新しいサークルを作りませんか？</p>
              <p className="mt-2 text-sm text-muted-foreground" style={{ lineHeight: "1.7" }}>
                あなたの「好き」を共有する場所を、ここに。<br className="hidden sm:block" />
                少人数からでも、いつでも始められます。
              </p>
              <button
                onClick={handleStartCircle}
                className="mt-5 rounded-md px-4 py-2 text-sm text-primary transition-colors hover:bg-accent sm:mt-6"
              >
                サークルを始める →
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default CircleList;
