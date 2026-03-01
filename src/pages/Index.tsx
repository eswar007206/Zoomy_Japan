import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Users, Home, BookOpen, MessageCircle, Heart, Star } from "lucide-react";

// ---- shared button styles ----
const BtnTeal = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-1 rounded-sm px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
    style={{ backgroundColor: "#5a9e9e" }}
  >
    {label} ▶
  </Link>
);

const BtnPink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-1 rounded-sm px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80"
    style={{ backgroundColor: "#d4927a" }}
  >
    {label} ▶
  </Link>
);

const BtnOutlineTeal = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-1 rounded-sm border px-5 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
    style={{ borderColor: "#5a9e9e", color: "#5a9e9e" }}
  >
    {label} ▶
  </Link>
);

const DetailBtn = ({ to }: { to: string }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-1 text-xs px-4 py-1.5 rounded-sm text-white transition-opacity hover:opacity-80"
    style={{ backgroundColor: "#5a9e9e" }}
  >
    詳しく見る ▶
  </Link>
);

// ---- value card (this place cares about) ----
const ValueCard = ({
  icon,
  title,
  btnLabel,
  btnTo,
  btnStyle,
}: {
  icon: React.ReactNode;
  title: string;
  btnLabel: string;
  btnTo: string;
  btnStyle: "teal" | "pink" | "outline";
}) => (
  <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-6 py-8 text-center shadow-sm">
    <div className="mb-4 flex items-center justify-center rounded-full bg-gray-100 p-4" style={{ width: 64, height: 64 }}>
      {icon}
    </div>
    <p className="mb-6 text-sm font-medium text-gray-700 leading-relaxed">{title}</p>
    {btnStyle === "teal" && <BtnTeal to={btnTo} label={btnLabel} />}
    {btnStyle === "pink" && <BtnPink to={btnTo} label={btnLabel} />}
    {btnStyle === "outline" && <BtnOutlineTeal to={btnTo} label={btnLabel} />}
  </div>
);

// ---- circle / community card ----
const CircleCard = ({
  image,
  title,
  description,
  btnLabel,
  btnTo,
  small,
}: {
  image: string;
  title: string;
  description: string;
  btnLabel: string;
  btnTo: string;
  small?: boolean;
}) => (
  <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
    <div className="relative h-24 bg-gray-100 flex items-center justify-center">
      <img src={image} alt={title} className="h-full w-full object-cover opacity-70" />
    </div>
    <div className="flex flex-col flex-1 p-4">
      <p className="text-sm font-semibold text-gray-800 mb-1">{title}</p>
      <p className="text-xs text-gray-500 mb-4 leading-relaxed line-clamp-2">{description}</p>
      <div className="mt-auto">
        {btnLabel === "参加する" ? (
          <BtnTeal to={btnTo} label={btnLabel} />
        ) : (
          <DetailBtn to={btnTo} />
        )}
      </div>
    </div>
  </div>
);

// ---- event gather card ----
const GatherCard = ({
  image,
  title,
  description,
  btnTo,
}: {
  image: string;
  title: string;
  description: string;
  btnTo: string;
}) => (
  <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
    <div className="h-28 bg-gray-100 overflow-hidden">
      <img src={image} alt={title} className="h-full w-full object-cover opacity-80" />
    </div>
    <div className="flex flex-col flex-1 p-4">
      <p className="text-sm font-semibold text-gray-800 mb-1">{title}</p>
      <p className="text-xs text-gray-500 mb-4 leading-relaxed line-clamp-2">{description}</p>
      <div className="mt-auto">
        <DetailBtn to={btnTo} />
      </div>
    </div>
  </div>
);

// ---- support card ----
const SupportCard = ({
  title,
  description,
  btnLabel,
  btnTo,
  btnStyle,
}: {
  title: string;
  description: string;
  btnLabel: string;
  btnTo: string;
  btnStyle: "teal" | "pink" | "detail";
}) => (
  <div className="flex flex-col rounded-lg border border-gray-200 bg-white px-6 py-6 shadow-sm">
    <p className="text-sm font-semibold text-gray-800 mb-2">{title}</p>
    <p className="text-xs text-gray-500 mb-5 leading-relaxed">{description}</p>
    <div className="mt-auto">
      {btnStyle === "teal" && <BtnTeal to={btnTo} label={btnLabel} />}
      {btnStyle === "pink" && <BtnPink to={btnTo} label={btnLabel} />}
      {btnStyle === "detail" && <DetailBtn to={btnTo} />}
    </div>
  </div>
);

const Index = () => {
  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#f5ede4", minHeight: "480px" }}
      >
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 items-center min-h-[480px] gap-8">

            {/* Left text */}
            <div className="flex flex-col justify-center py-12 lg:py-16">
              <h1
                className="font-serif font-bold leading-snug text-gray-800"
                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.4 }}
              >
                ひとりでもいい。<br />
                でも、ひとりじゃ<br />
                なくてもいい。
              </h1>
              <p className="mt-4 text-sm font-medium text-gray-600">
                30代以上の孤独がつながる居場所
              </p>
              <p className="mt-3 text-xs text-gray-500 leading-relaxed max-w-xs">
                ここは、急いで繋係を作る場所ではありません。<br />
                仲間を探し、周囲が増いいたつたら仲間"になてる、<br />
                そんな番様を大切にしています。
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <BtnTeal to="/community" label="中をのぞく" />
                <BtnOutlineTeal to="/about" label="はじめての方へ" />
              </div>
            </div>

            {/* Right — cloud/blob-shaped image */}
            <div className="hidden lg:flex items-center justify-center py-10">
              <div
                className="overflow-hidden"
                style={{
                  width: "420px",
                  height: "420px",
                  borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
                }}
              >
                <img
                  src="/images/hero-cafe.png"
                  alt="穏やかな居場所"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>

            {/* Mobile-only image */}
            <div className="lg:hidden mb-8 flex justify-center">
              <div
                className="overflow-hidden"
                style={{
                  width: "280px",
                  height: "280px",
                  borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.10)",
                }}
              >
                <img
                  src="/images/hero-cafe.png"
                  alt="穏やかな居場所"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== この場所が大切にしていること ===== */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-center text-lg font-semibold text-gray-800 mb-10">
            この場所が大切にしていること
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <ValueCard
              icon={<Users className="h-7 w-7 text-gray-400" />}
              title="穏稳に誰かとつながりなく"
              btnLabel="参加する"
              btnTo="/community"
              btnStyle="teal"
            />
            <ValueCard
              icon={<Home className="h-7 w-7 text-gray-400" />}
              title="30代以上の番象を大切にする"
              btnLabel="続きする"
              btnTo="/about"
              btnStyle="pink"
            />
            <ValueCard
              icon={<BookOpen className="h-7 w-7 text-gray-400" />}
              title="出合いを目的にしない"
              btnLabel="確まする"
              btnTo="/circles"
              btnStyle="teal"
            />
          </div>
        </div>
      </section>

      {/* ===== 同じ関心で、ゆるくつながる ===== */}
      <section className="py-14" style={{ backgroundColor: "#faf7f4" }}>
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-8">同じ関心で、ゆるくつながる</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <CircleCard
              image="/images/reading.png"
              title="詩令に話し合う（40代）"
              description="年令に限示に渡る40代のサークルする。"
              btnLabel="参加する"
              btnTo="/circles"
            />
            <CircleCard
              image="/images/ceramics.png"
              title="50代の躊躇躊躇"
              description="50代良心で始絡を見どこーケウル"
              btnLabel="参加する"
              btnTo="/circles"
            />
            <CircleCard
              image="/images/hands-flowers.png"
              title="恙恙の話をする場"
              description="拆络恙络について話きうるコミュニティ"
              btnLabel="詳しく見る"
              btnTo="/community"
            />
            <CircleCard
              image="/images/garden.png"
              title="同伴訪宿の語らい"
              description="同见面止こえるして語とお場です"
              btnLabel="詳しく見る"
              btnTo="/community"
            />
          </div>
          <p className="mt-4 text-xs text-gray-400">※出し合い目的ではありません</p>
        </div>
      </section>

      {/* ===== 仲良くなった人と、日常に集まる ===== */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-8">仲良くなった人と、日常に集まる</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <GatherCard
              image="/images/hero-cafe.png"
              title="オンライン懇談会"
              description="近隣に発様をなるオンライン定案"
              btnTo="/events"
            />
            <GatherCard
              image="/images/tatami-room.png"
              title="夕人数のお茶梱会"
              description="不役に兼まこ茶言する"
              btnTo="/events"
            />
            <GatherCard
              image="/images/calligraphy.png"
              title="蝴蝶の集まり"
              description="近誌の編熱な仇つ人が集まります"
              btnTo="/events"
            />
          </div>
        </div>
      </section>

      {/* ===== ひとりで抱えなくていい函 ===== */}
      <section className="py-14" style={{ backgroundColor: "#faf7f4" }}>
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-8">ひとりで抱えなくていい函</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <SupportCard
              title="人と庭腐を取りたい宛"
              description="柳間に積かに振りりのケークルです"
              btnLabel="参加する"
              btnTo="/circles"
              btnStyle="teal"
            />
            <SupportCard
              title="楳泉が不変になるとき"
              description="稲間に発えよて親す会"
              btnLabel="詳しく見る"
              btnTo="/community"
              btnStyle="detail"
            />
            <SupportCard
              title="仲朋ってなんだろう"
              description="次誌の懲悠な仇つ人が集まります"
              btnLabel="詳しく見る"
              btnTo="/community"
              btnStyle="detail"
            />
          </div>
        </div>
      </section>

      {/* ===== 安心のための効果 ===== */}
      <section className="py-14 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-10">安心のための効果</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-6 py-8 text-center shadow-sm">
              <div className="mb-4 flex items-center justify-center rounded-full bg-gray-100 p-4" style={{ width: 64, height: 64 }}>
                <MessageCircle className="h-7 w-7 text-gray-400" />
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-2">安心して話せる</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                共同の価値観を持つメンバーだけが集まる場所です。
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-6 py-8 text-center shadow-sm">
              <div className="mb-4 flex items-center justify-center rounded-full bg-gray-100 p-4" style={{ width: 64, height: 64 }}>
                <Heart className="h-7 w-7 text-gray-400" />
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-2">自分らしくいられる</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                比べなくていい。ただ、自分のペースで。
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-6 py-8 text-center shadow-sm">
              <div className="mb-4 flex items-center justify-center rounded-full bg-gray-100 p-4" style={{ width: 64, height: 64 }}>
                <Star className="h-7 w-7 text-gray-400" />
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-2">穏やかなコミュニティ</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                30代以上の女性のための、穏やかな場所です。
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
