import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import CircleCard from "@/components/CircleCard";
import EventCard from "@/components/EventCard";
import FadeIn from "@/components/FadeIn";
import { mockPosts, mockCircles, mockEvents, mockColumns, mockTestimonials, stats } from "@/data/mockData";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SectionHeader = ({ title, subtitle, linkTo, linkLabel }: { title: string; subtitle?: string; linkTo: string; linkLabel: string }) => (
  <div className="mb-10">
    <div className="flex items-end justify-between">
      <div>
        <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <Link to={linkTo} className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary sm:flex">
        {linkLabel} <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  </div>
);

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="flex items-center bg-background-secondary py-12 sm:py-0" style={{ minHeight: "65vh" }}>
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="max-w-[600px]">
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  大人の女性のためのコミュニティ
                </p>
                <h1 className="font-serif text-3xl font-medium leading-relaxed text-foreground md:text-4xl lg:text-[2.75rem]">
                  穏やかに、つながる。<br />
                  自分らしく、過ごす。
                </h1>
                <p className="mt-6 text-base text-muted-foreground md:text-lg" style={{ lineHeight: "1.9" }}>
                  OTONA CIRCLE は、30〜50代の女性のための<br className="hidden sm:block" />
                  穏やかなコミュニティです。<br />
                  趣味、暮らし、学びを、同じ想いの仲間と。
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    OTONA CIRCLE について <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/community"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    コミュニティを見る <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-4 lg:mt-0">
                <img
                  src="/images/hero-cafe.png"
                  alt="穏やかなカフェの風景"
                  className="w-full rounded-lg opacity-90 max-h-[280px] object-cover sm:max-h-[360px] lg:max-h-none"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-card py-8 sm:py-10">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl font-medium text-foreground md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="h-px w-12 bg-border"></div>
              </div>
              <p className="font-serif text-lg font-medium text-foreground sm:text-xl md:text-2xl" style={{ lineHeight: "1.8" }}>
                急がなくていい。<br />
                たくさん発信する必要もない。<br />
                ただ、心地よい場所で、<br />
                自分のペースで過ごす。
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-px w-12 bg-border"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-background-secondary py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <p className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">注目の記事</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link to="/community/1" className="group block">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/images/garden.png"
                    alt={mockPosts[0].title}
                    className="w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="max-w-lg">
                  <span className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {mockPosts[0].category}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-medium text-foreground sm:text-2xl md:text-3xl" style={{ lineHeight: "1.5" }}>
                    {mockPosts[0].title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base" style={{ lineHeight: "1.8" }}>
                    {mockPosts[0].preview}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">{mockPosts[0].date} ・ {mockPosts[0].author}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary sm:mt-6">
                    続きを読む <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Community Posts */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionHeader title="コミュニティ" subtitle="暮らし、趣味、学びについて、ゆっくり語り合う場所です。" linkTo="/community" linkLabel="すべて見る" />
          </FadeIn>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockPosts.slice(1, 4).map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.1}>
                <PostCard {...post} />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-8 text-center sm:hidden">
              <Link to="/community" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                すべての記事を見る →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Full width image divider */}
      <FadeIn>
        <div className="overflow-hidden h-[200px] sm:h-[260px] md:h-[320px]">
          <img
            src="/images/tatami-room.png"
            alt="静かな和室"
            className="h-full w-full object-cover opacity-80"
            loading="lazy"
            decoding="async"
          />
        </div>
      </FadeIn>

      {/* Circles */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionHeader title="サークル" subtitle="同じ興味を持つ仲間と、ゆるやかにつながる。" linkTo="/circles" linkLabel="すべて見る" />
          </FadeIn>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockCircles.slice(0, 3).map((circle, i) => (
              <FadeIn key={circle.name} delay={i * 0.1}>
                <CircleCard {...circle} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background-secondary py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="mb-10 text-center md:mb-12">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">メンバーの声</p>
            </div>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {mockTestimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
                  <p className="mb-6 font-serif text-sm text-foreground italic sm:text-base" style={{ lineHeight: "1.9" }}>
                    「{t.text}」
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.age} ・ {t.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionHeader title="イベント" subtitle="季節のイベントや集まりのご案内です。" linkTo="/events" linkLabel="すべて見る" />
          </FadeIn>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockEvents.slice(0, 3).map((event, i) => (
              <FadeIn key={event.title} delay={i * 0.1}>
                <EventCard {...event} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Column */}
      <section className="bg-background-secondary py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <SectionHeader title="コラム" subtitle="暮らしと心を整えるための、読みもの。" linkTo="/column" linkLabel="すべて見る" />
          </FadeIn>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockColumns.slice(0, 3).map((col, i) => (
              <FadeIn key={col.title} delay={i * 0.1}>
                <Link to={`/column/${col.id}`} className="group block">
                  <article className="overflow-hidden rounded-lg border border-border bg-card transition-colors duration-200 hover:bg-accent">
                    {col.image && (
                      <div className="aspect-[16/10] overflow-hidden">
                        <img src={col.image} alt={col.title} className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90" loading="lazy" decoding="async" />
                      </div>
                    )}
                    <div className="p-5 sm:p-6">
                      <span className="text-xs text-muted-foreground">{col.date}</span>
                      <h3 className="mt-2 mb-2 font-serif text-base font-medium text-card-foreground sm:text-lg">{col.title}</h3>
                      <p className="mb-3 text-sm text-muted-foreground line-clamp-2" style={{ lineHeight: "1.7" }}>{col.preview}</p>
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">
                        続きを読む <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-serif text-xl font-medium text-foreground sm:text-2xl md:text-3xl" style={{ lineHeight: "1.6" }}>
                あなたのペースで、<br />
                はじめてみませんか。
              </h2>
              <p className="mt-4 text-sm text-muted-foreground sm:mt-6 sm:text-base" style={{ lineHeight: "1.8" }}>
                OTONA CIRCLE は、いつでも、どなたでも歓迎します。<br className="hidden sm:block" />
                まずは覗いてみるだけでも大丈夫です。
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  OTONA CIRCLE について →
                </Link>
                <span className="hidden text-muted-foreground sm:block">・</span>
                <Link
                  to="/login"
                  className="text-sm text-primary transition-colors hover:text-foreground"
                >
                  無料で始める →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
