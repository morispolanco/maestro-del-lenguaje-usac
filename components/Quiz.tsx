
import React, { useState, useEffect, useCallback } from 'react';
import { generateQuiz } from '../services/geminiService';
import type { QuizQuestion, QuizOption } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';
import { LoaderIcon, CheckCircleIcon, XCircleIcon } from './ui/Icons';

interface QuizProps {
  topic: string;
  onClose: () => void;
}

type QuizStatus = 'idle' | 'loading' | 'playing' | 'results' | 'error';

const Quiz: React.FC<QuizProps> = ({ topic, onClose }) => {
  const [status, setStatus] = useState<QuizStatus>('idle');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleStartQuiz = useCallback(async () => {
    setStatus('loading');
    setError(null);
    try {
      const generatedQuestions = await generateQuiz(topic);
      if (generatedQuestions && generatedQuestions.length > 0) {
        setQuestions(generatedQuestions);
        setStatus('playing');
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setScore(0);
        setIsAnswered(false);
        setSelectedOption(null);
      } else {
        throw new Error("No se recibieron preguntas.");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Un error desconocido ocurrió.");
      setStatus('error');
    }
  }, [topic]);
  
  const handleAnswerSelect = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
  };
  
  const handleCheckAnswer = () => {
    if(selectedOption === null) return;
    
    setIsAnswered(true);
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.options[selectedOption].isCorrect) {
      setScore(s => s + 1);
    }
    setUserAnswers(prev => [...prev, selectedOption]);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setStatus('results');
    }
  };

  const getOptionClasses = (optionIndex: number, option: QuizOption) => {
    let classes = 'border-2 p-3 rounded-lg text-left w-full transition-all duration-300';
    if (!isAnswered) {
        return `${classes} ${selectedOption === optionIndex ? 'bg-indigo-100 border-indigo-500' : 'bg-white border-slate-300 hover:border-indigo-400'}`;
    }
    if (option.isCorrect) {
        return `${classes} bg-emerald-100 border-emerald-500 text-emerald-800 font-semibold`;
    }
    if (selectedOption === optionIndex && !option.isCorrect) {
        return `${classes} bg-red-100 border-red-500 text-red-800`;
    }
    return `${classes} bg-slate-50 border-slate-200 text-slate-500`;
  };

  if (status === 'idle') {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Quiz sobre "{topic}"</h2>
          <p className="text-slate-600 mb-6">¿Listo para poner a prueba tus conocimientos? El quiz será generado por IA.</p>
          <div className="flex space-x-4">
            <Button onClick={handleStartQuiz} size="lg">¡Empezar Quiz!</Button>
            <Button onClick={onClose} variant="secondary" size="lg">Cerrar</Button>
          </div>
      </div>
    );
  }

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
        <LoaderIcon className="h-12 w-12 text-indigo-600 mb-4" />
        <p className="text-slate-600 text-lg">Generando tu quiz personalizado...</p>
      </div>
    );
  }

  if (status === 'error') {
     return (
        <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-lg shadow-lg">
            <XCircleIcon className="h-12 w-12 text-red-500 mb-4"/>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">¡Oh no!</h2>
            <p className="text-slate-600 mb-6">{error}</p>
            <div className="flex space-x-4">
                <Button onClick={handleStartQuiz}>Intentar de Nuevo</Button>
                <Button onClick={onClose} variant="secondary">Cerrar</Button>
            </div>
        </div>
     );
  }

  if (status === 'results') {
    const percentage = Math.round((score / questions.length) * 100);
    return (
        <Card className="w-full max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Resultados del Quiz</h2>
            <div className="text-center mb-8">
                <p className="text-lg text-slate-600">Completaste el quiz sobre "{topic}"</p>
                <p className="text-5xl font-bold text-indigo-600 my-4">{percentage}%</p>
                <p className="text-slate-700">Tu puntuación: <strong>{score} de {questions.length}</strong> respuestas correctas.</p>
            </div>

            <div className="space-y-6">
                {questions.map((q, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-slate-50">
                        <p className="font-semibold text-slate-800 mb-2">{index + 1}. {q.questionText}</p>
                        <div className="flex items-center space-x-2">
                           {q.options[userAnswers[index]].isCorrect ? 
                            <CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0" /> : 
                            <XCircleIcon className="h-5 w-5 text-red-500 flex-shrink-0" />
                           }
                           <p>Tu respuesta: {q.options[userAnswers[index]].text}</p>
                        </div>
                        {!q.options[userAnswers[index]].isCorrect && (
                          <div className="flex items-center space-x-2 mt-1">
                             <CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                             <p>Correcta: {q.options.find(o => o.isCorrect)?.text}</p>
                          </div>
                        )}
                        <p className="mt-2 text-sm text-slate-600 bg-slate-200 p-2 rounded-md"><strong>Explicación:</strong> {q.explanation}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-center space-x-4">
                <Button onClick={handleStartQuiz}>Repetir Quiz</Button>
                <Button onClick={onClose} variant="secondary">Volver al Módulo</Button>
            </div>
        </Card>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <div className="mb-4">
        <p className="text-sm text-slate-500">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
        <h2 className="text-2xl font-bold text-slate-800 mt-1">{currentQuestion.questionText}</h2>
      </div>

      <div className="space-y-3 my-6">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={isAnswered}
            className={getOptionClasses(index, option)}
          >
            <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
            {option.text}
          </button>
        ))}
      </div>
      
      {isAnswered && (
          <div className={`p-4 rounded-md mb-4 ${currentQuestion.options[selectedOption!].isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'}`}>
              <h3 className="font-bold mb-1">{currentQuestion.options[selectedOption!].isCorrect ? '¡Correcto!' : 'Incorrecto'}</h3>
              <p className="text-sm">{currentQuestion.explanation}</p>
          </div>
      )}

      <div className="flex justify-end">
          {isAnswered ? (
             <Button onClick={handleNextQuestion}>
                {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
             </Button>
          ) : (
            <Button onClick={handleCheckAnswer} disabled={selectedOption === null}>
              Comprobar Respuesta
            </Button>
          )}
      </div>
    </Card>
  );
};

export default Quiz;
