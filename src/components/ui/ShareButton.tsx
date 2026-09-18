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
      className="px-8 py-4 bg-accent-blue/10 text-accent-blue font-mono text-[10px] tracking-widest uppercase hover:bg-accent-blue hover:text-white transition-colors border border-accent-blue/30"
    >
      Copy URL / Share
    </button>
  );
}
