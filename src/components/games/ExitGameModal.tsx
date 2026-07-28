"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

interface ExitGameModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ExitGameModal({ open, onConfirm, onCancel }: ExitGameModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onCancel();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 px-4 backdrop-blur-sm">
      <div
        ref={dialogRef}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="exit-modal-title"
        aria-describedby="exit-modal-desc"
        tabIndex={-1}
        className="w-full max-w-sm rounded-2xl bg-surface p-6 shadow-cardHover outline-none"
      >
        <h2 id="exit-modal-title" className="font-heading text-lg font-bold text-ink">
          Выйти из игры?
        </h2>
        <p id="exit-modal-desc" className="mt-2 text-sm leading-relaxed text-ink/60">
          Текущий прогресс не сохранится.
        </p>
        <div className="mt-6 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={onCancel}>
            Остаться
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            Выйти
          </Button>
        </div>
      </div>
    </div>
  );
}
