import Layout from "@/components/Layout";
import { mockPosts } from "@/data/mockData";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { postImages } from "@/data/images";
import PostCard from "@/components/PostCard";
import { toast } from "sonner";

const CommunityDetail = () => {
  const { id } = useParams();
  const postIndex = mockPosts.findIndex((p) => p.id === id);
  const post = postIndex !== -1 ? mockPosts[postIndex] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-16 text-center sm:py-20">
          <img src="/images/ikebana.png" alt="" className="mx-auto mb-8 h-28 w-28 rounded-full object-cover opacity-60 sm:h-32 sm:w-32" />
          <p className="font-serif text-lg text-muted-foreground">記事が見つかりませんでした。</p>
          <p className="mt-2 text-sm text-muted-foreground">お探しの記事は移動または削除された可能性があります。</p>
          <Link to="/community" className="mt-6 inline-block text-sm text-primary hover:text-foreground">
            コミュニティに戻る →
          </Link>
        </div>
      </Layout>
    );
  }

  const image = id ? postImages[id] : undefined;
  const relatedPosts = mockPosts.filter((p) => p.id !== id && p.category === post.category).slice(0, 2);
  const nextPost = postIndex < mockPosts.length - 1 ? mockPosts[postIndex + 1] : null;
  const prevPost = postIndex > 0 ? mockPosts[postIndex - 1] : null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast("リンクをコピーしました", { description: "記事のURLがクリップボードにコピーされました。" });
    }
  };

  return (
    <Layout>
      {/* Hero image */}
      {image && (
        <FadeIn>
          <div className="overflow-hidden h-[240px] sm:h-[300px] md:h-[360px]">
            <img src={image} alt={post.title} className="h-full w-full object-cover opacity-85" loading="lazy" decoding="async" />
          </div>
        </FadeIn>
      )}

      <article className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-6" style={{ maxWidth: "680px" }}>
          <FadeIn>
            <Link to="/community" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary sm:mb-8">
              <ArrowLeft className="h-4 w-4" />
              コミュニティに戻る
            </Link>

            <div className="mb-4 flex items-center gap-3 sm:mb-6">
              <span className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-muted-foreground">{post.category}</span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>

            <h1 className="mb-3 font-serif text-xl font-medium text-foreground sm:mb-4 sm:text-2xl md:text-3xl" style={{ lineHeight: "1.6" }}>
              {post.title}
            </h1>

            <p className="mb-8 text-sm text-muted-foreground sm:mb-10">著者：{post.author}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-5 sm:space-y-6">
              {post.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm text-foreground sm:text-base" style={{ lineHeight: "2" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* Share / actions */}
          <FadeIn delay={0.2}>
            <div className="mt-10 border-t border-border pt-6 sm:mt-12 sm:pt-8">
              <p className="text-sm text-muted-foreground">
                この記事が心に残ったら、お友達にもシェアしてください。
              </p>
              <button
                onClick={handleShare}
                className="mt-3 rounded-md border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                記事をシェアする
              </button>
            </div>
          </FadeIn>

          {/* Prev/Next navigation */}
          <FadeIn delay={0.25}>
            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {prevPost && (
                <Link to={`/community/${prevPost.id}`} className="group rounded-lg border border-border p-4 transition-colors hover:bg-accent sm:p-5">
                  <p className="mb-1 text-xs text-muted-foreground">← 前の記事</p>
                  <p className="font-serif text-sm font-medium text-card-foreground group-hover:text-primary">{prevPost.title}</p>
                </Link>
              )}
              {nextPost && (
                <Link to={`/community/${nextPost.id}`} className="group rounded-lg border border-border p-4 text-right transition-colors hover:bg-accent sm:col-start-2 sm:p-5">
                  <p className="mb-1 text-xs text-muted-foreground">次の記事 →</p>
                  <p className="font-serif text-sm font-medium text-card-foreground group-hover:text-primary">{nextPost.title}</p>
                </Link>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="container mx-auto mt-12 px-6 sm:mt-16">
            <FadeIn>
              <div className="mb-6 flex justify-center">
                <div className="h-px w-12 bg-border"></div>
              </div>
              <h2 className="mb-6 text-center font-serif text-lg font-medium text-foreground sm:mb-8 sm:text-xl">関連する記事</h2>
            </FadeIn>
            <div className="grid gap-5 sm:gap-6 sm:grid-cols-2" style={{ maxWidth: "800px", margin: "0 auto" }}>
              {relatedPosts.map((rp, i) => (
                <FadeIn key={rp.id} delay={i * 0.1}>
                  <PostCard {...rp} />
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default CommunityDetail;
