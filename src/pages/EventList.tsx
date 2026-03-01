import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import { mockEvents } from "@/data/mockData";
import FadeIn from "@/components/FadeIn";

const EventList = () => {
  const upcomingEvents = mockEvents.slice(0, 3);
  const futureEvents = mockEvents.slice(3);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-background-secondary py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Events</p>
            <h1 className="mb-3 font-serif text-2xl font-medium text-foreground sm:text-3xl md:text-4xl">イベント</h1>
            <p className="max-w-lg text-sm text-muted-foreground sm:text-base" style={{ lineHeight: "1.8" }}>
              季節のイベントや集まりのご案内です。<br className="hidden sm:block" />
              気になるイベントがあれば、お気軽にご参加ください。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="mb-6 font-serif text-xl font-medium text-foreground sm:mb-8">近日開催</h2>
          </FadeIn>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, i) => (
              <FadeIn key={event.title} delay={i * 0.08}>
                <EventCard {...event} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Divider image */}
      <FadeIn>
        <div className="overflow-hidden h-[180px] sm:h-[200px] md:h-[240px]">
          <img src="/images/street.png" alt="" className="h-full w-full object-cover opacity-70" loading="lazy" decoding="async" />
        </div>
      </FadeIn>

      {/* Future events */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="mb-6 font-serif text-xl font-medium text-foreground sm:mb-8">これからのイベント</h2>
          </FadeIn>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {futureEvents.map((event, i) => (
              <FadeIn key={event.title} delay={i * 0.08}>
                <EventCard {...event} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Past events note */}
      <section className="bg-background-secondary py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="mb-4 font-serif text-xl font-medium text-foreground">過去のイベント</h2>
              <p className="text-sm text-muted-foreground" style={{ lineHeight: "1.8" }}>
                これまでに50以上のイベントを開催してきました。<br className="hidden sm:block" />
                お茶会、読書会、陶器市ツアー、ウォーキング、ワークショップなど、<br className="hidden sm:block" />
                季節に合わせた様々な集まりを企画しています。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-6" style={{ maxWidth: "680px" }}>
          <FadeIn>
            <h2 className="mb-6 font-serif text-xl font-medium text-foreground sm:mb-8">よくあるご質問</h2>
          </FadeIn>
          {[
            { q: "初めてでも参加できますか？", a: "もちろんです。初めての方も大歓迎です。スタッフやメンバーがやさしくお迎えします。" },
            { q: "一人で参加しても大丈夫ですか？", a: "はい、ほとんどの方がお一人で参加されています。同じ興味を持つ方と自然につながれます。" },
            { q: "キャンセルはできますか？", a: "はい、イベント開催3日前まで無料でキャンセルいただけます。" },
            { q: "参加費はかかりますか？", a: "イベントによって異なります。無料のものもあれば、材料費等の実費をいただくものもあります。" },
          ].map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="mb-4 rounded-lg border border-border bg-card p-5 sm:mb-6 sm:p-6">
                <h3 className="mb-2 font-serif text-sm font-medium text-foreground sm:text-base">{faq.q}</h3>
                <p className="text-sm text-muted-foreground" style={{ lineHeight: "1.7" }}>{faq.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default EventList;
