import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { mockPosts } from "@/data/mockData";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";
import { toast } from "sonner";

const categories = ["すべて", "ライフスタイル", "読書", "暮らし", "アート", "旅", "エッセイ"];

const CommunityList = () => {
  const [active, setActive] = useState("すべて");

  const filtered = active === "すべて" ? mockPosts : mockPosts.filter((p) => p.category === active);

  const handleWrite = () => {
    toast("記事エディタを準備中...", { description: "まもなく記事の作成を開始できます。" });
  };

  return (
    <Layout>
      {/* Header with image */}
      <section className="relative bg-background-secondary py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Community</p>
            <h1 className="mb-3 font-serif text-2xl font-medium text-foreground sm:text-3xl md:text-4xl">コミュニティ</h1>
            <p className="max-w-lg text-sm text-muted-foreground sm:text-base" style={{ lineHeight: "1.8" }}>
              暮らし、趣味、学びについて、ゆっくり語り合う場所です。<br className="hidden sm:block" />
              読むだけでも、少しだけ書いてみるのも、あなたの自由です。
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-6">
          {/* Category filter */}
          <FadeIn>
            <div className="mb-8 sm:mb-10 -mx-6 px-6 overflow-x-auto sm:mx-0 sm:px-0 sm:overflow-visible">
              <div className="flex gap-2 sm:gap-3 sm:flex-wrap pb-2 sm:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`flex-shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors duration-200 sm:px-4 sm:py-2 ${
                      active === cat
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-card text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {filtered.length > 0 ? (
            <>
              {/* Featured first post */}
              {active === "すべて" && (
                <FadeIn>
                  <div className="mb-8 sm:mb-10">
                    <PostCard {...filtered[0]} />
                  </div>
                </FadeIn>
              )}
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {(active === "すべて" ? filtered.slice(1) : filtered).map((post, i) => (
                  <FadeIn key={post.id} delay={i * 0.06}>
                    <PostCard {...post} />
                  </FadeIn>
                ))}
              </div>
            </>
          ) : (
            <FadeIn>
              <div className="py-16 text-center sm:py-20">
                <img src="/images/ikebana.png" alt="" className="mx-auto mb-8 h-28 w-28 rounded-full object-cover opacity-60 sm:h-32 sm:w-32" />
                <p className="font-serif text-lg text-muted-foreground">まだ投稿がありません。</p>
                <p className="mt-2 text-sm text-muted-foreground">この場所は、少しずつ育っていきます。</p>
              </div>
            </FadeIn>
          )}

          {/* Bottom CTA */}
          <FadeIn>
            <div className="mt-12 rounded-lg border border-border bg-background-secondary p-6 text-center sm:mt-16 sm:p-8 md:p-12">
              <p className="font-serif text-base text-foreground sm:text-lg">あなたの声も、聞かせてください。</p>
              <p className="mt-2 text-sm text-muted-foreground">完璧な文章でなくても大丈夫。感じたことを、そのまま。</p>
              <button
                onClick={handleWrite}
                className="mt-5 rounded-md px-4 py-2 text-sm text-primary transition-colors hover:bg-accent sm:mt-6"
              >
                記事を書く →
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default CommunityList;
