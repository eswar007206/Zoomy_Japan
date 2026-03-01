import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("入力エラー", { description: "メールアドレスとパスワードを入力してください。" });
      return;
    }
    if (!isLogin && !name) {
      toast.error("入力エラー", { description: "お名前を入力してください。" });
      return;
    }
    if (isLogin) {
      toast.success("ログインしました", { description: "おかえりなさい！" });
    } else {
      toast.success("アカウントを作成しました", { description: "OTONA CIRCLE へようこそ！" });
    }
    navigate("/mypage");
  };

  return (
    <Layout>
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-6" style={{ maxWidth: "420px" }}>
          <FadeIn>
            <div className="mb-8 text-center">
              <img src="/logo.png" alt="OTONA CIRCLE" className="mx-auto mb-6 h-12 w-auto" />
              <h1 className="font-serif text-2xl font-medium text-foreground">
                {isLogin ? "おかえりなさい" : "はじめまして"}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                {isLogin ? "あなたのペースで、ゆっくり。" : "穏やかなコミュニティへようこそ。"}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                {!isLogin && (
                  <div>
                    <label className="mb-1.5 block text-sm text-foreground">お名前</label>
                    <input
                      type="text"
                      placeholder="山田 花子"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                )}
                <div>
                  <label className="mb-1.5 block text-sm text-foreground">メールアドレス</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm text-foreground">パスワード</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.98]"
                >
                  {isLogin ? "ログイン" : "無料で始める"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {isLogin ? "アカウントをお持ちでない方はこちら →" : "すでにアカウントをお持ちの方はこちら →"}
                </button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 text-center text-xs text-muted-foreground" style={{ lineHeight: "1.7" }}>
              ご登録いただいた情報は厳重に管理いたします。<br />
              OTONA CIRCLE は安心・安全なコミュニティを目指しています。
            </p>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
