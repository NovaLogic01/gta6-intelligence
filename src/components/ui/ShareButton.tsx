"use client";

import React from "react";

export function ShareButton({ title, description, url }: { title: string, description: string, url: string }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "GTA VI Intel: " + title,
        text: description,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert("URL Copied to clipboard");
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="px-6 py-3 bg-bg-secondary text-text-primary text-sm font-mono tracking-widest uppercase rounded hover:bg-bg-tertiary transition-colors border border-border-primary/50"
    >
      Share URL
    </button>
  );
}
