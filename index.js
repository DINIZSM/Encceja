
import { useState } from "react";
import { Button } from "@/components/ui/button";

const lessons = [
  {
    title: "Números Naturais",
    content: "Os números naturais são os números inteiros não-negativos: 0, 1, 2, 3...",
    question: "Qual desses é um número natural?",
    options: ["-2", "0", "-1,5", "Raiz quadrada de -1"],
    answer: "0",
  },
  {
    title: "Operações Básicas",
    content: "As quatro operações básicas da matemática são: adição, subtração, multiplicação e divisão.",
    question: "Qual é o resultado de 3 x 4?",
    options: ["7", "12", "9", "15"],
    answer: "12",
  },
  {
    title: "Porcentagem",
    content: "Porcentagem é uma forma de expressar uma proporção em relação a 100. Ex: 25% = 25/100.",
    question: "Quanto é 10% de 200?",
    options: ["10", "20", "30", "25"],
    answer: "20",
  },
];

export default function CursoEncceja() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const lesson = lessons[step];
  const progress = Math.round(((step + 1) / lessons.length) * 100);

  const handleAnswer = (option) => {
    setSelected(option);
    setIsCorrect(option === lesson.answer);
  };

  const nextLesson = () => {
    setSelected(null);
    setIsCorrect(null);
    setStep(step + 1);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Curso de Matemática para o ENCCEJA</h1>
      <p className="text-sm text-gray-600 mb-2">Autor: Rodrigo Diniz do Prado</p>

      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
      <p className="mb-4">{lesson.content}</p>
      <p className="mb-2 font-medium">{lesson.question}</p>

      <div className="space-y-2">
        {lesson.options.map((option) => (
          <Button
            key={option}
            variant={
              selected
                ? option === lesson.answer
                  ? "success"
                  : option === selected
                  ? "destructive"
                  : "outline"
                : "outline"
            }
            onClick={() => handleAnswer(option)}
            disabled={selected}
            className="w-full"
          >
            {option}
          </Button>
        ))}
      </div>

      {selected && (
        <div className="mt-4">
          {isCorrect ? (
            <p className="text-green-600 font-semibold">Resposta correta!</p>
          ) : (
            <p className="text-red-600 font-semibold">Resposta incorreta.</p>
          )}

          {step < lessons.length - 1 ? (
            <Button className="mt-4" onClick={nextLesson}>
              Próxima lição
            </Button>
          ) : (
            <p className="mt-4 text-blue-600 font-semibold">
              Parabéns! Você completou o curso.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
