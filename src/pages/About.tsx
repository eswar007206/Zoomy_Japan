import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero image */}
      <FadeIn>
        <div className="overflow-hidden h-[240px] sm:h-[300px] md:h-[360px]">
          <img src="/images/tatami-room.png" alt="静かな和室" className="h-full w-full object-cover opacity-80" loading="lazy" decoding="async" />
        </div>
      </FadeIn>

      <article className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-6" style={{ maxWidth: "680px" }}>
          {/* Concept */}
          <FadeIn>
            <section className="mb-16 sm:mb-20">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">About</p>
              <h1 className="mb-6 font-serif text-2xl font-medium text-foreground sm:mb-8 sm:text-3xl md:text-4xl" style={{ lineHeight: "1.5" }}>
                OTONA CIRCLE について
              </h1>
              <p className="text-sm text-foreground sm:text-base" style={{ lineHeight: "2" }}>
                OTONA CIRCLE は、30代から50代の女性のために生まれた、穏やかなコミュニティです。
                忙しい日常の中で、自分の時間を大切にしたい。同じ想いを持つ誰かと、ゆるやかにつながりたい。
                そんな気持ちに寄り添う場所でありたいと考えています。
              </p>
            </section>
          </FadeIn>

          {/* Quote */}
          <FadeIn delay={0.05}>
            <div className="mb-16 sm:mb-20">
              <div className="flex justify-center">
                <div className="h-px w-12 bg-border"></div>
              </div>
              <p className="my-8 text-center font-serif text-lg text-foreground italic sm:my-10 sm:text-xl" style={{ lineHeight: "1.9" }}>
                「急がなくていい。<br />比べなくていい。<br />ただ、ここにいるだけで十分。」
              </p>
              <div className="flex justify-center">
                <div className="h-px w-12 bg-border"></div>
              </div>
            </div>
          </FadeIn>

          {/* Philosophy */}
          <FadeIn delay={0.1}>
            <section className="mb-16 sm:mb-20">
              <h2 className="mb-5 font-serif text-xl font-medium text-foreground sm:mb-6 sm:text-2xl">私たちの考え方</h2>
              <div className="space-y-5 sm:space-y-6">
                <p className="text-sm text-foreground sm:text-base" style={{ lineHeight: "2" }}>
                  ここは、急がなくていい場所です。
                  たくさん発信する必要もなく、「いいね」の数を気にすることもありません。
                </p>
                <p className="text-sm text-foreground sm:text-base" style={{ lineHeight: "2" }}>
                  読むだけでもいい。少しだけ書いてみるのもいい。
                  サークルに参加してみるのもいいし、イベントに足を運んでみるのもいい。
                </p>
                <p className="text-sm text-foreground sm:text-base" style={{ lineHeight: "2" }}>
                  自分のペースで、自分らしく。
                  それが、OTONA CIRCLE の大切にしていることです。
                </p>
              </div>
            </section>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={0.12}>
            <div className="mb-16 overflow-hidden rounded-lg sm:mb-20">
              <img src="/images/hands-flowers.png" alt="花を生ける手" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </FadeIn>

          {/* Values */}
          <FadeIn delay={0.15}>
            <section className="mb-16 sm:mb-20">
              <h2 className="mb-6 font-serif text-xl font-medium text-foreground sm:mb-8 sm:text-2xl">大切にしていること</h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { title: "穏やかさ", text: "すべてのコミュニケーションが、穏やかで心地よいものであること。攻撃的な言葉や、マウンティングのない空間を守ります。" },
                  { title: "自分のペース", text: "積極的に参加しなくても、見ているだけでも大丈夫。あなたのペースを、誰も急かしません。" },
                  { title: "多様な「好き」", text: "読書、手仕事、アート、散歩、ヨガ。何でもいい。あなたの「好き」を、ここでは自由に楽しんでください。" },
                  { title: "つながりの質", text: "フォロワー数や「いいね」ではなく、一つ一つの出会いと会話を大切にします。" },
                ].map((value, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-5 sm:p-6">
                    <h3 className="mb-2 font-serif text-sm font-medium text-foreground sm:text-base">{value.title}</h3>
                    <p className="text-sm text-muted-foreground" style={{ lineHeight: "1.8" }}>{value.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Who is this for */}
          <FadeIn delay={0.2}>
            <section className="mb-16 sm:mb-20">
              <h2 className="mb-5 font-serif text-xl font-medium text-foreground sm:mb-6 sm:text-2xl">こんな方のために</h2>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "新しい趣味を見つけたい方",
                  "同じ世代の仲間とつながりたい方",
                  "SNSの喧騒から離れて、静かな場所を求めている方",
                  "日々の暮らしを丁寧に楽しみたい方",
                  "自分のペースを大切にしたい方",
                  "子育てが一段落して、自分の時間を見つけたい方",
                ].map((item, i) => (
                  <p key={i} className="flex items-start gap-3 text-sm text-foreground sm:text-base" style={{ lineHeight: "1.8" }}>
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary opacity-50"></span>
                    {item}
                  </p>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* Image */}
          <FadeIn delay={0.22}>
            <div className="mb-16 overflow-hidden rounded-lg sm:mb-20">
              <img src="/images/garden.png" alt="静かな庭園" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </FadeIn>

          {/* Safety */}
          <FadeIn delay={0.25}>
            <section className="mb-16 rounded-lg border border-border bg-background-secondary p-6 sm:mb-20 sm:p-8 md:p-10">
              <h2 className="mb-5 font-serif text-xl font-medium text-foreground sm:mb-6 sm:text-2xl">安心して過ごせる場所</h2>
              <div className="space-y-5 sm:space-y-6">
                <p className="text-sm text-foreground sm:text-base" style={{ lineHeight: "2" }}>
                  OTONA CIRCLE では、すべての方が安心して参加できる環境づくりを大切にしています。
                </p>
                <p className="text-sm text-foreground sm:text-base" style={{ lineHeight: "2" }}>
                  営業・勧誘行為は一切禁止しています。
                  個人情報は厳重に管理し、メンバー同士のやりとりも穏やかなものであるよう、
                  コミュニティガイドラインを設けています。
                </p>
                <p className="text-sm text-foreground sm:text-base" style={{ lineHeight: "2" }}>
                  何か気になることがあれば、いつでもお気軽にご相談ください。
                  あなたが安心して過ごせることが、私たちにとって一番大切なことです。
                </p>
              </div>
            </section>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.3}>
            <div className="text-center">
              <h2 className="font-serif text-lg font-medium text-foreground sm:text-xl" style={{ lineHeight: "1.6" }}>
                あなたのペースで、<br />はじめてみませんか。
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">まずは覗いてみるだけでも大丈夫です。</p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link to="/community" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  コミュニティを見る →
                </Link>
                <span className="hidden text-muted-foreground sm:block">・</span>
                <Link to="/login" className="text-sm text-primary transition-colors hover:text-foreground">
                  無料で始める →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </article>
    </Layout>
  );
};

export default About;
