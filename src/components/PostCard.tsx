import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { postImages } from "@/data/images";

interface PostCardProps {
  id: string;
  title: string;
  preview: string;
  category: string;
  date: string;
  author?: string;
}

const PostCard = ({ id, title, preview, category, date, author }: PostCardProps) => {
  const image = postImages[id];

  return (
    <Link to={`/community/${id}`} className="group block">
      <article className="overflow-hidden rounded-lg border border-border bg-card transition-colors duration-200 hover:bg-accent">
        {image && (
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        <div className="p-5 sm:p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {category}
            </span>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <h3 className="mb-2 font-serif text-base font-medium leading-relaxed text-card-foreground sm:text-lg">
            {title}
          </h3>
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2" style={{ lineHeight: "1.7" }}>
            {preview}
          </p>
          {author && (
            <p className="mb-3 text-xs text-muted-foreground">by {author}</p>
          )}
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">
            続きを読む <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
