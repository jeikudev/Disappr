"use client";

import { Button } from "@/components/core/button";
import { client } from "@/lib/client";
import { convertCase } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";

const ANIMALS = ["cat", "dog", "fox", "lion", "tiger", "bear"];

export const generateName = () => {
  const animalName = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  const randomId = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `${animalName}-${randomId}`;
};

export default function Home() {
  const [anonymousName, setAnonymousName] = useState("");
  const [copied, setCopied] = useState(false);

  const createRoom = useMutation({
    mutationFn: async () => {
      const response = await client.room.create.post();
    },
  });

  useEffect(() => {
    setAnonymousName(generateName());
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(anonymousName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGetStarted = () => {
    createRoom.mutate();
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 md:p-8 space-y-4 md:space-y-6">
      <div className="w-full max-w-2xl mx-auto space-y-4 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-pretty font-mono">
            Dis
            <span className="text-muted-foreground">appr</span>
          </h1>
          <p className="text-sm md:text-sm text-muted-foreground leading-relaxed text-pretty">
            self-destructing rooms for truly private conversations.
            <span className="md:block">
              Your messages <strong>{`"disappr"`}</strong> by design.
            </span>
          </p>
        </div>
      </div>

      <div className="w-full max-w-md space-y-2">
        <div className="bg-card border border-border rounded-lg p-6 space-y-3">
          <p className="text-sm text-muted-foreground">
            Your anonymous identity
          </p>
          <div className="flex items-center justify-between gap-3">
            <code className="text-lg font-mono font-semibold text-foreground flex-1 truncate">
              {convertCase(anonymousName, "kebab")}
            </code>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-muted rounded transition-colors"
              title={copied ? "Copied!" : "Copy to clipboard"}
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
          {copied && (
            <p className="text-xs text-primary animate-pulse">
              Copied to clipboard
            </p>
          )}
        </div>

        <Button
          onClick={handleGetStarted}
          size="lg"
          className="w-full font-semibold font-mono"
        >
          Create a Room
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        No signup required. Rooms exist only while you're connected.
      </p>
    </main>
  );
}
