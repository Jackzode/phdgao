"use client";

import { useState } from "react";
import { QuizPlayer } from "./QuizPlayer";
import { ProgressBar } from "./ProgressBar";
import { Button } from "@/components/ui/button";

export function QuizSession({ questionIds }: { questionIds: number[] }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const goNext = () => {
    if (current < questionIds.length - 1) setCurrent((c) => c + 1);
  };

  const goPrev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  return (
    
    <div className="space-y-4">
      <ProgressBar current={current + 1} total={questionIds.length} />
      <QuizPlayer
        questionId={questionIds[current]}
        selectedOption={answers[questionIds[current]]}
        onAnswer={(opt) => handleAnswer(questionIds[current], opt)}
      />
      <div className="flex justify-between mt-4">
        <Button onClick={goPrev} disabled={current === 0}>上一题</Button>
        <Button onClick={goNext} disabled={current === questionIds.length - 1}>下一题</Button>
      </div>
    </div>
  );
}
