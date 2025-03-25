'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'; // shadcn 默认的类名合并工具
import { ZoomableImage } from '@/mycomponents/ZoomableImage';
import { LangSwitch } from '@/mycomponents/LangSwitch'
import { ArrowLeft, ArrowRight, ArrowLeftRight } from 'lucide-react'
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


type Question = {
  id: number;
  en_title: string;
  zh_title?: string;
  imageUrl?: string;
  options: { en: string; zh: string; value: string }[];
  answer: string;
  explanation: string; // 富文本
};

export default function PracticePage({ params }: { params: Promise<{ slug: string }> }) {

  const router = useRouter();
  const searchParams = useSearchParams();

  // 使用 React.use() 解包 params
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showZh, setShowZh] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    // 读取题号（?i=12）
    const index = parseInt(searchParams.get('i') || '0');
    setCurrentIndex(index);

    const fetchQuestions = async () => {
      const mockData: Question[] = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        en_title: ` What is the correct anscorrect anscorrect anscorrect anscorrect anscorrect anscorrect anscorrect answer for ${i + 1} ?`,
        zh_title: `${slug} 的正确答案是什正确答案是什正确答案是什正确答案是什正确答案是什正确答案是什正确答案是什正确答案是什么？`,
        imageUrl: i === 2 ? '/images/business.jpg' : undefined,
        options: [
          { en: 'OptOptionOptionOptionOptionOptionOptionion A', zh: '选正确答案是什正确答案是什正确答案是什正确答案是什项 A', value: 'A' },
          { en: 'OptOptionOptionOptionOptionOptionOptionOptionion B', zh: '选正确答案是什正确答案是什正确答案是什项 B', value: 'B' },
          { en: 'OptOptionOptionOptionOptionOptionion C', zh: '选正确答案是什正确答案是什正确答案是什正确答案是什项 C', value: 'C' },
          { en: 'OptionOptionOptionOptionOptionOption D', zh: '选正确答案是什正确答案是什正确答案是什项 D', value: 'D' },
        ],
        answer: ['A', 'B', 'C', 'D'][i % 4],
        explanation: `<p><strong>Explanation:</strong> This is why the correct answer is ${['A', 'B', 'C', 'D'][i % 4]
          }.</p>`,
      }));
      setQuestions(mockData);
      setLoading(false);
    };

    fetchQuestions();
  }, [slug]);

  const handleSelect = (value: string) => {
    if (selectedAnswer) return; // 已答题
    setSelectedAnswer(value);
  };


  const goTo = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= questions.length) return;
    setSelectedAnswer(null);
    setCurrentIndex(newIndex);
    const url = new URL(window.location.href);
    url.searchParams.set('i', String(newIndex));
    window.history.replaceState({}, '', url.toString());
  };

  if (loading) return <div className="p-6">加载中...</div>;
  if (!questions.length) return <div className="p-6">暂无题目</div>;



  const current = questions[currentIndex];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className=" inline-flex items-center gap-2 sm:text-lg md:text-2xl font-semibold text-primary hover:underline hover:text-blue-600 transition"
            >
              {slug}
              <ArrowLeftRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <LangSwitch checked={showZh} onChange={setShowZh} />
      </div>
      <div className="md:text-lg text-muted-foreground flex items-center gap-2">
        第 <Input
          type="number"
          value={currentIndex + 1}
          onChange={(e: any) => {
            const value = parseInt(e.target.value, 10);
            if (!isNaN(value) && value > 0 && value < questions.length) setCurrentIndex(value - 1); // 预览输入
          }}
          onKeyDown={(e: any) => {
            if (e.key === "Enter") goTo(currentIndex); // 按 Enter 跳转
          }}
          onBlur={() => goTo(currentIndex)} // 失去焦点时跳转
          min={0}
          max={questions.length}
          className="w-20  text-center"
          placeholder={String(currentIndex + 1)}
        /> 题 / 共 {questions.length} 题
      </div>
      <div className="space-y-4 border rounded-md p-4 bg-white shadow">

        <div className="md:text-xl font-medium">
          {current.en_title}
        </div>
        {showZh && current.zh_title && (
          <div className="text-base text-gray-500 md:text-xl">{current.zh_title}</div>
        )}

        {current.imageUrl && (
          <ZoomableImage src={current.imageUrl} alt="question image" />
        )}

        <ul className="grid gap-3 mt-10">
          {current.options.map((opt: any) => {
            const isSelected = selectedAnswer === opt.value;
            const isCorrect = current.answer === opt.value;
            const isWrong = isSelected && !isCorrect;

            return (
              <li
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={cn(
                  'cursor-pointer border p-3 rounded-md bg-white hover:bg-gray-100 transition ',
                  selectedAnswer &&
                  (isCorrect
                    ? 'border-green-500 text-green-700 border-4'
                    : isWrong
                      ? 'border-red-500 text-red-600 border-4'
                      : '')
                )}
              >
                <div className="md:text-lg">{opt.en}</div>
                {showZh && opt.zh && (
                  <div className="text-muted-foreground md:text-lg">{opt.zh}</div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex justify-between mt-6">
          <Button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-md border text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ArrowLeft className="w-4 h-4" />
            上一题
          </Button>

          <Button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === questions.length - 1}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-md border text-white disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            下一题
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        {selectedAnswer && (
          <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-md">
            <div
              className="prose prose-sm max-w-full"
              dangerouslySetInnerHTML={{ __html: current.explanation }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
