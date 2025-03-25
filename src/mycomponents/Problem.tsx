"use client"

import {useState} from "react";
import '@ant-design/v5-patch-for-react-19';
import {Switch, Watermark, Breadcrumb, Image} from "antd"
import {StarFilled, StarOutlined} from "@ant-design/icons";



const questions = [
    {
        id: 1,
        text: "An A36 structural steel, 8\" wide by 1/2\" thick plate is used as a tension member. The plate is attached by a weld to a gusset plate. What is most nearly the LRFD design yield strength?",
        chineseText: "一块 A36 结构钢板，宽 8 英寸，厚 1/2 英寸，被用作受拉构件。该钢板通过焊接固定到节点板上。LRFD 设计屈服强度最接近多少？",
        image: "/images/hero.png",
        options: [
            {id: 0, text: "180.0 kips", chineseText: "180.0 千磅"},
            {id: 1, text: "129.6 kips", chineseText: "129.6 千磅"},
            {id: 2, text: "142.1 kips", chineseText: "142.1 千磅"},
            {id: 3, text: "126.2 kips", chineseText: "126.2 千磅"}
        ],
        correctAnswer: 1,
        explanation: `
      <h3>Solution:</h3>
      <p>The yielding strength for a tension member can be calculated by:</p>
      <pre>𝜙Pn = 𝜙 Fy Ag</pre>
      <pre>𝜙Pn = (0.9)(36 ksi)(8 in × 1/2 in) = 129.6 kips</pre>
      <img src="/images/hero.png" alt="Formula Calculation" class="mt-4 rounded-lg shadow-md"/>
    `
    },
    {
        id: 2,
        text: "An A36 structural steel, 8\" wide by 1/2\" thick plate is used as a tension member. The plate is attached by a weld to a gusset plate. What is most nearly the LRFD design yield strength?",
        chineseText: "一块 A36 结构钢板，宽 8 英寸，厚 1/2 英寸，被用作受拉构件。该钢板通过焊接固定到节点板上。LRFD 设计屈服强度最接近多少？",
        image: "/images/hero.png",
        options: [
            {id: 0, text: "180.0 kips", chineseText: "180.0 千磅"},
            {id: 1, text: "129.6 kips", chineseText: "129.6 千磅"},
            {id: 2, text: "142.1 kips", chineseText: "142.1 千磅"},
            {id: 3, text: "126.2 kips", chineseText: "126.2 千磅"}
        ],
        correctAnswer: 2,
        explanation: `
      <h3>Solution:</h3>
      <p>The yielding strength for a tension member can be calculated by:</p>
      <pre>𝜙Pn = 𝜙 Fy Ag</pre>
      <pre>𝜙Pn = (0.9)(36 ksi)(8 in × 1/2 in) = 129.6 kips</pre>
      <img src="/images/hero.png" alt="Formula Calculation" class="mt-4 rounded-lg shadow-md"/>
    `
    }
];


export default function QuestionComponent() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(-1);
    const [submitted, setSubmitted] = useState(false);
    const [showChinese, setShowChinese] = useState(false); // 全局开关，影响所有题目
    const [isFavorited, setIsFavorited] = useState(false);


    const question = questions[currentQuestionIndex];

    const handleSubmit = () => {
        if (selectedOption >= 0) {
            setSubmitted(true);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            resetQuestion();
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            resetQuestion();
        }
    };

    const resetQuestion = () => {
        setSelectedOption(-1);
        setSubmitted(false);
    };

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="relative w-[80%] mx-auto p-6 bg-white shadow-lg rounded-lg select-none">

            <Breadcrumb
                separator={<span className="sm:text-xl md:text-2xl">/</span>}
                items={[
                    {
                        title: <span className="sm:text-xl md:text-2xl">题库练习</span>,

                    },
                    {
                        title: <span className="sm:text-xl md:text-2xl">建筑技术</span>,

                    },
                    {
                        title: <span className=" sm:text-xl md:text-2xl">考点1:地基</span>,

                    },
                ]}
            />
            <br/>
            <Watermark content="tel:5965123695" font={{fontSize: 40}}>

                {/* 题目头部 */}
                <div className="flex justify-between items-center pr-4">
                    <h2 className="md:text-2xl font-semibold">Question {currentQuestionIndex + 1}</h2>

                    <div className="flex gap-8 items-center">
                        <button
                            onClick={toggleFavorite}
                        >

                            {isFavorited ? (
                                <StarFilled className="md:text-3xl"/>
                            ) : (
                                <StarOutlined className=" md:text-3xl"/>
                            )}
                        </button>

                        <div className="text-2xl">
                            <Switch checkedChildren="中文" unCheckedChildren="英文"
                                    onChange={() => setShowChinese(!showChinese)} checked={showChinese}

                            />
                        </div>

                    </div>
                </div>

                {/* 题目内容 */}
                <p className="mt-4 text-xl md:text-2xl">
                    {question.text}
                    {showChinese && <span className="block text-gray-600 mt-2">{question.chineseText}</span>}
                </p>

                {/* 显示图片（如果有） */}
                {question.image && (
                    <div className="mt-4 flex justify-center">
                        <Image
                            width={400}
                            src={question.image}
                            alt="Question Illustration"
                        />
                    </div>
                )}

                {/* 选项 */}
                <div className="mt-4">
                    {question.options.map((option) => (
                        <button
                            key={option.id}
                            className={`block w-full text-left text-lg md:text-xl px-4 py-2 border rounded-md my-2 
                                ${selectedOption == option.id && 'bg-gray-100 text-blue-600 font-bold'}
                                ${submitted
                                    ? option.id === question.correctAnswer
                                        ? "bg-green-500 text-white border-green-700"
                                        : option.id === selectedOption
                                            ? "bg-red-500 text-white border-red-700"
                                            : "bg-gray-100"
                                    : " hover:bg-gray-200"
                            }`}
                            onClick={() => !submitted && setSelectedOption(option.id)}
                        >
                            {option.text}
                            {showChinese && <span className="block">{option.chineseText}</span>}
                        </button>
                    ))}
                </div>

                {/* 按钮 */}
                <div className="flex justify-between mt-4">
                    <button
                        className="px-4 py-2 bg-green-600 text-white md:text-xl rounded-md disabled:bg-gray-300 hover:cursor-pointer disabled:hover:cursor-not-allowed"
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                    >
                        上一题
                    </button>

                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md md:text-xl hover:bg-blue-600 hover:cursor-pointer"
                        onClick={handleSubmit}
                    >
                        解答
                    </button>

                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded-md md:text-xl disabled:bg-gray-300 hover:cursor-pointer disabled:hover:cursor-not-allowed"
                        onClick={handleNext}
                        disabled={currentQuestionIndex === questions.length - 1}
                    >
                        下一题
                    </button>
                </div>

                {/* 答案解析（富文本） */}
                {submitted && (
                    <div className="mt-6 p-4 bg-gray-100 border-l-4 border-green-500">
                        <h1 className="font-semibold text-2xl">Explanation:</h1>
                        <div className="text-sm md:text-xl text-gray-700"
                             dangerouslySetInnerHTML={{__html: question.explanation}}></div>
                    </div>
                )}
            </Watermark>
        </div>
    );
}











