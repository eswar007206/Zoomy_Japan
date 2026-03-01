import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12 sm:py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          <div className="sm:col-span-2 md:col-span-1">
            <img src="/logo.png" alt="OTONA CIRCLE" className="h-10 w-auto opacity-70" />
            <p className="mt-4 text-xs text-muted-foreground" style={{ lineHeight: "1.7" }}>
              30〜50代の女性のための<br />穏やかなコミュニティ
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">コミュニティ</p>
            <nav className="flex flex-col gap-3">
              <Link to="/community" className="text-sm text-muted-foreground transition-colors hover:text-primary">記事一覧</Link>
              <Link to="/circles" className="text-sm text-muted-foreground transition-colors hover:text-primary">サークル</Link>
              <Link to="/events" className="text-sm text-muted-foreground transition-colors hover:text-primary">イベント</Link>
              <Link to="/column" className="text-sm text-muted-foreground transition-colors hover:text-primary">コラム</Link>
            </nav>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">ご案内</p>
            <nav className="flex flex-col gap-3">
              <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">OTONA CIRCLEについて</Link>
              <Link to="/login" className="text-sm text-muted-foreground transition-colors hover:text-primary">ログイン / 登録</Link>
              <Link to="/mypage" className="text-sm text-muted-foreground transition-colors hover:text-primary">マイページ</Link>
            </nav>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">お問い合わせ</p>
            <p className="text-sm text-muted-foreground" style={{ lineHeight: "1.7" }}>
              ご質問やご相談は<br />お気軽にお問い合わせください。
            </p>
            <a href="mailto:hello@otonacircle.jp" className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-primary">
              hello@otonacircle.jp
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center sm:mt-12 sm:pt-8">
          <p className="text-xs text-muted-foreground">© 2026 OTONA CIRCLE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
