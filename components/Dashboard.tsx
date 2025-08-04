
import React, { useState } from 'react';
import type { Module } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';
import Quiz from './Quiz';
import { CheckCircleIcon } from './ui/Icons';

interface DashboardProps {
  module: Module | undefined;
}

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
    <div className="w-full bg-slate-200 rounded-full h-4">
        <div 
            className="bg-indigo-600 h-4 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
        ></div>
    </div>
);

const Dashboard: React.FC<DashboardProps> = ({ module }) => {
  const [isQuizActive, setIsQuizActive] = useState(false);

  if (!module) {
    return (
      <div className="flex-grow p-8 flex items-center justify-center">
        <Card>
          <h2 className="text-2xl font-bold text-slate-800">Módulo no encontrado</h2>
          <p className="text-slate-600 mt-2">Por favor, selecciona un módulo del menú de la izquierda.</p>
        </Card>
      </div>
    );
  }
  
  const handleStartQuiz = () => setIsQuizActive(true);
  const handleCloseQuiz = () => setIsQuizActive(false);

  if (isQuizActive) {
      return (
        <main className="flex-grow p-8 flex items-center justify-center bg-slate-100">
            <Quiz topic={module.quizTopic} onClose={handleCloseQuiz} />
        </main>
      );
  }

  return (
    <main className="flex-grow p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center space-x-4 mb-2">
            <div className="bg-indigo-100 p-3 rounded-full">
              <module.icon className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-800">{module.title}</h2>
              <p className="text-slate-500 text-lg">{module.description}</p>
            </div>
          </div>
        </header>

        {module.id === 'intro' && (
            <Card className="mb-8 bg-indigo-50 border-indigo-200 border">
                 <h3 className="text-xl font-semibold text-slate-800 mb-4">Tu Progreso General</h3>
                 <div className="space-y-3">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-slate-700">Módulos Completados</span>
                            <span className="text-sm font-medium text-slate-700">1 de {8}</span>
                        </div>
                        <ProgressBar progress={(1/8) * 100} />
                    </div>
                 </div>
            </Card>
        )}

        <div className="space-y-6">
          {module.lessons.length > 0 ? (
            module.lessons.map((lesson, index) => (
              <Card key={lesson.id}>
                <h3 className="text-2xl font-semibold text-slate-800 mb-3 border-b pb-2">
                  <span className="text-indigo-600">Lección {index + 1}:</span> {lesson.title}
                </h3>
                <div className="prose prose-slate max-w-none text-slate-600">{lesson.content}</div>
              </Card>
            ))
          ) : (
             <Card>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">¡Próximamente!</h3>
                <p className="text-slate-600">El contenido de este módulo está siendo preparado por nuestros expertos. ¡Vuelve pronto!</p>
             </Card>
          )}
        </div>
        
        <div className="mt-8">
          <Card className="bg-slate-800 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">¡Pon a prueba tu conocimiento!</h3>
                <p className="text-slate-300 mt-1">Realiza el quiz interactivo para este módulo.</p>
              </div>
              <Button onClick={handleStartQuiz} size="lg" variant="primary">
                Iniciar Quiz de {module.title}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
