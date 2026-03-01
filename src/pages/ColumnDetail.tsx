import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { mockColumns } from "@/data/mockData";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ColumnDetail = () => {
  const { id } = useParams();
  const colIndex = mockColumns.findIndex((c) => c.id === id);
  const col = colIndex !== -1 ? mockColumns[colIndex] : null;

  if (!col) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-16 text-center sm:py-20">
          <p className="font-serif text-lg text-muted-foreground">コラムが見つかりませんでした。</p>
          <Link to="/column" className="mt-4 inline-block text-sm text-primary hover:text-foreground">コラム一覧に戻る →</Link>
        </div>
      </Layout>
    );
  }

  const nextCol = colIndex < mockColumns.length - 1 ? mockColumns[colIndex + 1] : null;
  const prevCol = colIndex > 0 ? mockColumns[colIndex - 1] : null;

  return (
    <Layout>
      {col.image && (
        <FadeIn>
          <div className="overflow-hidden h-[240px] sm:h-[300px] md:h-[360px]">
            <img src={col.image} alt={col.title} className="h-full w-full object-cover opacity-85" loading="lazy" decoding="async" />
          </div>
        </FadeIn>
      )}

      <article className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-6" style={{ maxWidth: "680px" }}>
          <FadeIn>
            <Link to="/column" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary sm:mb-8">
              <ArrowLeft className="h-4 w-4" /> コラム一覧に戻る
            </Link>
            <p className="mb-2 text-xs text-muted-foreground">{col.date} ・ {col.author}</p>
            <h1 className="mb-8 font-serif text-xl font-medium text-foreground sm:mb-10 sm:text-2xl md:text-3xl" style={{ lineHeight: "1.6" }}>
              {col.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-5 sm:space-y-6">
              {col.content.split("\n\n").map((p, i) => (
                <p key={i} className="text-sm text-foreground sm:text-base" style={{ lineHeight: "2" }}>{p}</p>
              ))}
            </div>
          </FadeIn>

          {/* Prev/Next */}
          <FadeIn delay={0.2}>
            <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
              {prevCol && (
                <Link to={`/column/${prevCol.id}`} className="group rounded-lg border border-border p-4 transition-colors hover:bg-accent sm:p-5">
                  <p className="mb-1 text-xs text-muted-foreground">← 前のコラム</p>
                  <p className="font-serif text-sm font-medium text-card-foreground group-hover:text-primary">{prevCol.title}</p>
                </Link>
              )}
              {nextCol && (
                <Link to={`/column/${nextCol.id}`} className="group rounded-lg border border-border p-4 text-right transition-colors hover:bg-accent sm:col-start-2 sm:p-5">
                  <p className="mb-1 text-xs text-muted-foreground">次のコラム →</p>
                  <p className="font-serif text-sm font-medium text-card-foreground group-hover:text-primary">{nextCol.title}</p>
                </Link>
              )}
            </div>
          </FadeIn>
        </div>
      </article>
    </Layout>
  );
};

export default ColumnDetail;
