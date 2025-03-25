"use client";

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const percent = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="mb-1 text-sm text-muted-foreground">
        第 {current} / {total} 题
      </div>
      <div className="h-2 w-full bg-gray-200 rounded">
        <div
          className="h-2 bg-blue-500 rounded transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
