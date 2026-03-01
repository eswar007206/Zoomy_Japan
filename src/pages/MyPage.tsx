import Layout from "@/components/Layout";
import { mockPosts, mockCircles, mockEvents } from "@/data/mockData";
import { User, Settings, BookOpen, Users, Calendar } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PostCard from "@/components/PostCard";
import { toast } from "sonner";

const tabs = [
  { id: "posts", label: "投稿した記事", icon: BookOpen },
  { id: "circles", label: "参加中のサークル", icon: Users },
  { id: "events", label: "参加予定のイベント", icon: Calendar },
];

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const navigate = useNavigate();

  const handleWriteArticle = () => {
    toast("記事エディタを準備中...", { description: "まもなく記事の作成を開始できます。" });
  };

  const handleSettings = () => {
    toast("設定", { description: "設定ページは現在準備中です。" });
  };

  return (
    <Layout>
      {/* Profile header */}
      <section className="bg-background-secondary py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-6" style={{ maxWidth: "800px" }}>
          <FadeIn>
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:gap-6 sm:text-left">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent sm:h-24 sm:w-24">
                <User className="h-10 w-10 text-muted-foreground sm:h-12 sm:w-12" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="font-serif text-xl font-medium text-foreground sm:text-2xl">佐藤 美咲</h1>
                <p className="mt-1 text-sm text-muted-foreground">東京都在住 ・ 2025年1月から参加</p>
                <p className="mt-3 text-sm text-muted-foreground" style={{ lineHeight: "1.7" }}>
                  読書と散歩が好きです。最近は陶器にも興味を持ち始めました。
                  穏やかに、自分のペースで楽しんでいます。
                </p>
              </div>
              <button
                onClick={handleSettings}
                className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                <Settings className="h-4 w-4" />
                設定
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card py-6">
        <div className="container mx-auto px-6" style={{ maxWidth: "800px" }}>
          <FadeIn>
            <div className="flex justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <p className="font-serif text-xl font-medium text-foreground">2</p>
                <p className="text-xs text-muted-foreground">投稿</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-xl font-medium text-foreground">3</p>
                <p className="text-xs text-muted-foreground">サークル</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-xl font-medium text-foreground">2</p>
                <p className="text-xs text-muted-foreground">イベント</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-6" style={{ maxWidth: "800px" }}>
          <FadeIn>
            <div className="mb-8 flex gap-1 overflow-x-auto border-b border-border -mx-6 px-6 sm:mx-0 sm:px-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-3 py-3 text-sm transition-colors sm:px-4 ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Tab content */}
          {activeTab === "posts" && (
            <div>
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                {mockPosts.slice(0, 2).map((post, i) => (
                  <FadeIn key={post.id} delay={i * 0.08}>
                    <PostCard {...post} />
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={0.2}>
                <div className="mt-10 rounded-lg border border-border bg-background-secondary p-6 text-center sm:p-8">
                  <p className="font-serif text-base text-foreground">新しい記事を書きませんか？</p>
                  <p className="mt-2 text-sm text-muted-foreground">あなたの経験や想いを、ここで共有してください。</p>
                  <button
                    onClick={handleWriteArticle}
                    className="mt-4 rounded-md px-4 py-2 text-sm text-primary transition-colors hover:bg-accent"
                  >
                    記事を書く →
                  </button>
                </div>
              </FadeIn>
            </div>
          )}

          {activeTab === "circles" && (
            <div className="space-y-4">
              {mockCircles.slice(0, 3).map((circle, i) => (
                <FadeIn key={circle.name} delay={i * 0.08}>
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors duration-200 hover:bg-accent sm:p-5">
                    {circle.image && (
                      <img src={circle.image} alt={circle.name} className="h-14 w-14 rounded-lg object-cover sm:h-16 sm:w-16" loading="lazy" decoding="async" />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base font-medium text-card-foreground">{circle.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{circle.members}人のメンバー ・ {circle.schedule}</p>
                      {circle.nextEvent && (
                        <p className="mt-1 text-xs text-primary">次回：{circle.nextEvent}</p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
              <FadeIn delay={0.3}>
                <div className="pt-4 text-center">
                  <Link to="/circles" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    他のサークルを探す →
                  </Link>
                </div>
              </FadeIn>
            </div>
          )}

          {activeTab === "events" && (
            <div className="space-y-4">
              {mockEvents.slice(0, 2).map((event, i) => (
                <FadeIn key={event.title} delay={i * 0.08}>
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors duration-200 hover:bg-accent sm:p-5">
                    {event.image && (
                      <img src={event.image} alt={event.title} className="h-14 w-14 rounded-lg object-cover sm:h-16 sm:w-16" loading="lazy" decoding="async" />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-base font-medium text-card-foreground">{event.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{event.date}</p>
                      <p className="text-xs text-muted-foreground">{event.location}</p>
                    </div>
                    <span className="flex-shrink-0 text-xs text-primary">参加予定</span>
                  </div>
                </FadeIn>
              ))}
              <FadeIn delay={0.2}>
                <div className="pt-4 text-center">
                  <Link to="/events" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    他のイベントを探す →
                  </Link>
                </div>
              </FadeIn>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MyPage;
