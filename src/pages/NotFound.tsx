import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <img src="/images/ikebana.png" alt="" className="mx-auto mb-8 h-32 w-32 rounded-full object-cover opacity-60" />
          <h1 className="mb-4 font-serif text-3xl font-medium text-foreground md:text-4xl">404</h1>
          <p className="mb-2 font-serif text-lg text-muted-foreground">ページが見つかりませんでした。</p>
          <p className="mb-8 text-sm text-muted-foreground">お探しのページは移動または削除された可能性があります。</p>
          <Link to="/" className="text-sm text-primary transition-colors hover:text-foreground">
            ホームに戻る →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
