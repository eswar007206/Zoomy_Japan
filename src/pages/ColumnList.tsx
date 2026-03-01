import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { mockColumns } from "@/data/mockData";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ColumnList = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-background-secondary py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">Column</p>
            <h1 className="mb-3 font-serif text-2xl font-medium text-foreground sm:text-3xl md:text-4xl">コラム</h1>
            <p className="max-w-lg text-sm text-muted-foreground sm:text-base" style={{ lineHeight: "1.8" }}>
              暮らしと心を整えるための、読みもの。<br className="hidden sm:block" />
              編集部が、ゆっくり丁寧にお届けします。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured column */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-6">
          <FadeIn>
            <Link to={`/column/${mockColumns[0].id}`} className="group block">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={mockColumns[0].image}
                    alt={mockColumns[0].title}
                    className="w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="max-w-lg">
                  <span className="text-xs text-muted-foreground">{mockColumns[0].date}</span>
                  <h2 className="mt-3 font-serif text-xl font-medium text-foreground sm:text-2xl md:text-3xl" style={{ lineHeight: "1.5" }}>
                    {mockColumns[0].title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base" style={{ lineHeight: "1.8" }}>
                    {mockColumns[0].preview}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary sm:mt-6">
                    続きを読む <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* All columns */}
      <section className="bg-background-secondary py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="mb-6 font-serif text-xl font-medium text-foreground sm:mb-8">すべてのコラム</h2>
          </FadeIn>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockColumns.slice(1).map((col, i) => (
              <FadeIn key={col.id} delay={i * 0.06}>
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
    </Layout>
  );
};

export default ColumnList;
