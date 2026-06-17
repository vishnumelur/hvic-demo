"use client";

import { useState } from "react";
import { GALLERY } from "@/lib/content";
import { DashHeader, Badge, btnPrimary, iconBtn } from "@/components/dashboard/ui";
import { IconPlus, IconImage, IconTrash } from "@/components/ui/Icons";

type MediaItem = {
  id: number;
  title: string;
  type: "photo" | "video";
  image: string;
};

let _nextId = GALLERY.length + 1;

const seed: MediaItem[] = GALLERY.map((g, i) => ({
  id: i + 1,
  title: g.title,
  type: g.type as "photo" | "video",
  image: g.image,
}));

export default function MediaGalleryPage() {
  const [items, setItems] = useState<MediaItem[]>(seed);

  function addItem() {
    const base = GALLERY[0];
    const newItem: MediaItem = {
      id: _nextId++,
      title: "New upload",
      type: base.type as "photo" | "video",
      image: base.image,
    };
    setItems((prev) => [newItem, ...prev]);
  }

  function removeItem(id: number) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <DashHeader
        title="Media Gallery"
        subtitle="Upload and organise photos and videos for the public site."
      >
        <button onClick={addItem} className={btnPrimary()}>
          <IconPlus className="h-4 w-4" /> Upload media
        </button>
      </DashHeader>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {/* Upload dropzone tile */}
        <button
          onClick={addItem}
          className="flex aspect-[4/3] cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-line bg-card text-center transition-colors hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Upload new media file"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-muted">
            <IconImage className="h-6 w-6" />
          </span>
          <span className="max-w-[140px] text-sm font-medium text-muted leading-snug">
            Drag files or click to upload
          </span>
        </button>

        {/* Media tiles */}
        {items.map((item) => (
          <MediaTile key={item.id} item={item} onRemove={() => removeItem(item.id)} />
        ))}
      </div>
    </>
  );
}

function MediaTile({
  item,
  onRemove,
}: {
  item: MediaItem;
  onRemove: () => void;
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-line bg-white premium-shadow">
      {/* Image area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Type badge — top left */}
        <div className="absolute left-2.5 top-2.5">
          <Badge tone={item.type === "photo" ? "blue" : "green"}>
            {item.type === "photo" ? "Photo" : "Video"}
          </Badge>
        </div>

        {/* Delete button — top right, visible on hover */}
        <div className="absolute right-2.5 top-2.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <button
            onClick={onRemove}
            aria-label={`Remove ${item.title}`}
            className="grid h-8 w-8 place-items-center rounded-full border border-white/30 bg-white/80 text-ink backdrop-blur-sm transition-colors hover:bg-red-50 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <IconTrash className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 py-2.5">
        <p className="truncate text-sm font-semibold text-ink" title={item.title}>
          {item.title}
        </p>
        <p className="mt-0.5 text-xs text-muted">
          {item.type === "photo" ? "JPG" : "MP4"} &middot; 1.2 MB
        </p>
      </div>
    </div>
  );
}
