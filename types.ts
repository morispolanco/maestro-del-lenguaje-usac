
export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  questionText: string;
  options: QuizOption[];
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  lessons: Lesson[];
  quizTopic: string;
}
