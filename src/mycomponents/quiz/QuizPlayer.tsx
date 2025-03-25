"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Option = { label: string; en: string; zh: string };

type QuestionData = {
  id: number;
  question_en: string;
  question_zh: string;
  options: Option[];
  answer: string;
  explanation_en: string;
  explanation_zh: string;
  is_favorited: boolean;
};

export function QuizPlayer({
  questionId,
  selectedOption,
  onAnswer,
}: {
  questionId: number;
  selectedOption?: string;
  onAnswer: (opt: string) => void;
}) {
  const [question, setQuestion] = useState<QuestionData | null>(null);
  const [language, setLanguage] = useState<"en" | "both">("both");
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    fetch(`/api/quiz/${questionId}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data);
        setIsFavorited(data.is_favorited);
      });
  }, [questionId]);

  const toggleFavorite = async () => {
    await fetch(`/api/quiz/${questionId}/favorite`, { method: "POST" });
    setIsFavorited((v) => !v);
  };

  if (!question) return <div>Loading...</div>;

  const isCorrect = selectedOption && selectedOption === question.answer;

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-base">
          {language === "both"
            ? `${question.question_en} / ${question.question_zh}`
            : question.question_en}
        </CardTitle>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => setLanguage((l) => (l === "en" ? "both" : "en"))}>
            {language === "both" ? "仅英文" : "中英"}
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleFavorite}>
            {isFavorited ? "⭐ 已收藏" : "☆ 收藏"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {question.options.map((opt) => {
          const isSelected = selectedOption === opt.label;
          const isRight = opt.label === question.answer;
          return (
            <div
              key={opt.label}
              onClick={() => !selectedOption && onAnswer(opt.label)}
              className={cn(
                "border rounded-md p-3 cursor-pointer transition",
                isSelected && "ring-2 ring-primary",
                selectedOption &&
                  (isSelected && isRight && "bg-green-100") ||
                  (isSelected && !isRight && "bg-red-100") ||
                  (!isSelected && isRight && "bg-green-50")
              )}
            >
              <strong>{opt.label}.</strong>{" "}
              {language === "both" ? `${opt.en} / ${opt.zh}` : opt.en}
            </div>
          );
        })}
        {selectedOption && (
          <div className="mt-4 text-sm text-muted-foreground">
            ✅ 正确答案：{question.answer}
            <br />
            📘 解析：{language === "both"
              ? `${question.explanation_en} / ${question.explanation_zh}`
              : question.explanation_en}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
