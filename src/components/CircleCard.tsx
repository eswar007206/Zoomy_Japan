import { useState } from "react";
import { toast } from "sonner";

interface CircleCardProps {
  name: string;
  description: string;
  members: number;
  image?: string;
  schedule?: string;
  nextEvent?: string;
}

const CircleCard = ({ name, description, members, image, schedule, nextEvent }: CircleCardProps) => {
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    if (joined) {
      setJoined(false);
      toast("サークルを退会しました", { description: `「${name}」から退会しました。` });
    } else {
      setJoined(true);
      toast("サークルに参加しました", { description: `「${name}」に参加しました。ようこそ！` });
    }
  };

  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card transition-colors duration-200 hover:bg-accent">
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        </div>
      )}
      <div className="p-5 sm:p-6">
        <h3 className="mb-2 font-serif text-base font-medium text-card-foreground sm:text-lg">{name}</h3>
        <p className="mb-3 text-sm text-muted-foreground" style={{ lineHeight: "1.7" }}>{description}</p>
        {schedule && (
          <p className="mb-2 text-xs text-muted-foreground">📅 {schedule}</p>
        )}
        {nextEvent && (
          <p className="mb-3 text-xs text-primary">次回：{nextEvent}</p>
        )}
        <div className="flex items-center justify-between border-t border-border pt-4 mt-4">
          <span className="text-xs text-muted-foreground">{joined ? members + 1 : members}人のメンバー</span>
          <button
            onClick={handleJoin}
            className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
              joined
                ? "bg-accent text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {joined ? "参加中 ✓" : "参加する →"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default CircleCard;
