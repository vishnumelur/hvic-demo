"use client";

import { useState, useMemo } from "react";
import { NEWS } from "@/lib/content";
import { DashHeader, Card, Badge, btnPrimary, iconBtn } from "@/components/dashboard/ui";
import {
  IconPlus,
  IconPencil,
  IconTrash,
  IconEye,
  IconSearch,
  IconNews,
} from "@/components/ui/Icons";

type Status = "Published" | "Draft";
type FilterStatus = "All" | Status;

interface Post {
  id: number;
  title: string;
  category: string;
  date: string;
  status: Status;
}

let _nextId = NEWS.length + 1;
function nextId() {
  return _nextId++;
}

const SEED_POSTS: Post[] = [
  ...NEWS.map((n, i) => ({
    id: i + 1,
    title: n.title,
    category: n.category,
    date: n.date,
    status: "Published" as Status,
  })),
  {
    id: nextId(),
    title: "Draft: Green Ammonia export corridor feasibility study",
    category: "Research",
    date: "12 Jun 2026",
    status: "Draft" as Status,
  },
  {
    id: nextId(),
    title: "Draft: Upcoming electrolyser workshop at IIT Palakkad",
    category: "Events",
    date: "18 Jun 2026",
    status: "Draft" as Status,
  },
];

const FILTER_CHIPS: FilterStatus[] = ["All", "Published", "Draft"];

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>(SEED_POSTS);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("All");

  const filtered = useMemo(() => {
    let list = posts;
    if (activeFilter !== "All") {
      list = list.filter((p) => p.status === activeFilter);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }
    return list;
  }, [posts, query, activeFilter]);

  function handleNewPost() {
    const newPost: Post = {
      id: nextId(),
      title: "Untitled announcement",
      category: "Mission",
      date: "Today",
      status: "Draft",
    };
    setPosts((prev) => [newPost, ...prev]);
  }

  function handleDelete(id: number) {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <>
      {/* Header */}
      <DashHeader
        title="News &amp; Notices"
        subtitle="Create, edit and publish announcements and circulars."
      >
        <button
          type="button"
          onClick={handleNewPost}
          className={btnPrimary()}
        >
          <IconPlus className="h-4 w-4" />
          New post
        </button>
      </DashHeader>

      {/* Toolbar */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative flex-1 sm:max-w-xs">
          <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="search"
            placeholder="Search posts&hellip;"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-line bg-card py-2.5 pl-9 pr-4 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Filter chips */}
        <div className="flex shrink-0 items-center gap-2">
          {FILTER_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setActiveFilter(chip)}
              className={
                activeFilter === chip
                  ? "rounded-xl bg-primary px-3.5 py-1.5 text-xs font-semibold text-white transition-colors"
                  : "rounded-xl border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-primary hover:text-primary"
              }
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Card with post list */}
      <Card>
        {/* Card header row */}
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-primary/15 bg-primary/10 text-primary">
              <IconNews className="h-4 w-4" />
            </span>
            <h3 className="font-display text-base font-bold text-ink">
              All posts
            </h3>
          </div>
          <span className="text-xs font-semibold text-muted">
            {filtered.length} {filtered.length === 1 ? "post" : "posts"}
          </span>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-card text-muted">
              <IconNews className="h-6 w-6" />
            </span>
            <p className="font-display text-base font-bold text-ink">
              No posts found
            </p>
            <p className="max-w-xs text-sm text-muted">
              {query
                ? "Try a different search term or clear the filter."
                : "No posts match the selected filter. Switch to &ldquo;All&rdquo; or create a new post."}
            </p>
          </div>
        )}

        {/* Post rows */}
        {filtered.length > 0 && (
          <ul className="divide-y divide-line">
            {filtered.map((post) => (
              <li
                key={post.id}
                className="flex flex-col gap-3 px-6 py-4 transition-colors hover:bg-card/60 sm:flex-row sm:items-center sm:gap-4"
              >
                {/* Title */}
                <div className="min-w-0 flex-1">
                  <p className="font-display font-bold text-ink leading-snug line-clamp-1">
                    {post.title}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    <Badge tone="blue">{post.category}</Badge>
                    <span className="text-xs text-muted">{post.date}</span>
                  </div>
                </div>

                {/* Status badge */}
                <div className="shrink-0">
                  <Badge tone={post.status === "Published" ? "green" : "amber"}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {post.status}
                  </Badge>
                </div>

                {/* Action buttons */}
                <div className="flex shrink-0 items-center gap-1.5">
                  <button
                    type="button"
                    title="Preview"
                    aria-label={`Preview ${post.title}`}
                    className={iconBtn()}
                  >
                    <IconEye className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    title="Edit"
                    aria-label={`Edit ${post.title}`}
                    className={iconBtn()}
                  >
                    <IconPencil className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    title="Delete"
                    aria-label={`Delete ${post.title}`}
                    onClick={() => handleDelete(post.id)}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-white text-muted transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                  >
                    <IconTrash className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}
