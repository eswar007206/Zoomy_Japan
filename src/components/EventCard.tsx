import { MapPin, Calendar, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description?: string;
  capacity?: number;
  enrolled?: number;
  image?: string;
}

const EventCard = ({ title, date, location, description, capacity, enrolled, image }: EventCardProps) => {
  const [joined, setJoined] = useState(false);
  const currentEnrolled = enrolled ?? 0;
  const displayEnrolled = joined ? currentEnrolled + 1 : currentEnrolled;
  const isFull = capacity ? displayEnrolled >= capacity : false;

  const handleJoin = () => {
    if (joined) {
      setJoined(false);
      toast("参加をキャンセルしました", { description: `「${title}」の参加をキャンセルしました。` });
    } else if (!isFull) {
      setJoined(true);
      toast("イベントに参加しました", { description: `「${title}」に参加登録しました。当日お会いしましょう！` });
    }
  };

  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card transition-colors duration-200 hover:bg-accent">
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        </div>
      )}
      <div className="p-5 sm:p-6">
        <h3 className="mb-3 font-serif text-base font-medium text-card-foreground sm:text-lg">{title}</h3>
        {description && (
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2" style={{ lineHeight: "1.7" }}>{description}</p>
        )}
        <div className="mb-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{location}</span>
          </div>
          {capacity && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-3.5 w-3.5 flex-shrink-0" />
              <span>{displayEnrolled}/{capacity}人</span>
              {!isFull && (
                <span className="text-xs text-primary">残り{capacity - displayEnrolled}席</span>
              )}
              {isFull && !joined && (
                <span className="text-xs text-destructive">満席</span>
              )}
            </div>
          )}
        </div>
        <div className="border-t border-border pt-4">
          <button
            onClick={handleJoin}
            disabled={isFull && !joined}
            className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
              joined
                ? "bg-accent text-primary"
                : isFull
                ? "cursor-not-allowed text-muted-foreground/50"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {joined ? "参加予定 ✓" : isFull ? "満席です" : "参加する →"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
