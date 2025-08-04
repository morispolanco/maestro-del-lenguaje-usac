import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import { UserIcon, LockIcon } from './ui/Icons';

interface AuthProps {
  onLogin: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    
    // Simulate user database in localStorage
    const users = JSON.parse(localStorage.getItem('language_maestro_users') || '[]');
    const existingUser = users.find((user: any) => user.email === email);

    if (existingUser) {
      setError('Este correo electrónico ya está registrado.');
      return;
    }

    // Add new user
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('language_maestro_users', JSON.stringify(users));

    // Redirect to payment
    window.location.href = 'https://buy.stripe.com/28E6oH3DH6UIaBZ6PW3AY0Y';
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
        setError('Por favor, introduce tu correo y contraseña.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('language_maestro_users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('language_maestro_loggedin', 'true');
      onLogin();
    } else {
      setError('Correo electrónico o contraseña incorrectos.');
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setError('');
    setName('');
    setEmail('');
    setPassword('');
  };

  const InputField = ({ id, type, value, onChange, placeholder, Icon }: {id: string; type: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string; Icon: React.ElementType}) => (
    <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
            id={id}
            name={id}
            type={type}
            required
            value={value}
            onChange={onChange}
            className="block w-full rounded-md border-0 py-2.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
            autoComplete={type === 'password' ? 'current-password' : 'email'}
        />
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
            <span className="text-5xl">🎓</span>
            <h1 className="text-4xl font-bold text-slate-800 mt-2">Maestro del Lenguaje</h1>
            <p className="text-slate-500 mt-2">{isLoginView ? 'Inicia sesión para continuar tu aprendizaje.' : 'Crea una cuenta para empezar tu aventura.'}</p>
        </div>
        <Card className="shadow-2xl">
          <form className="space-y-6" onSubmit={isLoginView ? handleLogin : handleRegister}>
            <h2 className="text-2xl font-bold text-center text-slate-900">{isLoginView ? 'Iniciar Sesión' : 'Registro'}</h2>

            {!isLoginView && (
                <InputField id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre completo" Icon={UserIcon} />
            )}

            <InputField id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" Icon={UserIcon} />
            <InputField id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" Icon={LockIcon} />

            {error && <p className="text-sm text-red-600 text-center">{error}</p>}

            {isLoginView ? (
              <div>
                <Button type="submit" className="w-full">
                  Iniciar Sesión
                </Button>
              </div>
            ) : (
                <>
                <div className="text-center text-sm text-slate-500">
                    <p>Al registrarte, serás redirigido a nuestra página de pago seguro para completar tu suscripción de $19.</p>
                </div>
                <div>
                    <Button type="submit" className="w-full">
                        Registrarme y Pagar
                    </Button>
                </div>
                </>
            )}
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  {isLoginView ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
                </span>
              </div>
            </div>
            <div className="mt-6">
              <Button variant="secondary" onClick={toggleView} className="w-full">
                {isLoginView ? 'Crear una cuenta nueva' : 'Iniciar sesión'}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
