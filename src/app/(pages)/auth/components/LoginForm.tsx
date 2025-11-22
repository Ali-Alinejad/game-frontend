'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, Phone, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/shared/optimizeImage/page';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';

type AuthView = 'main' | 'phone' | 'email';

const translations = {
  en: {
    auth: {
      welcome: "Welcome to GameFord",
      subtitle: "Enter the Gaming Arena",
      phoneLogin: "Phone Login",
      emailLogin: "Email Login",
      continueWithGoogle: "Continue with Google",
      continueWithPhone: "Continue with Phone",
      continueWithEmail: "Continue with Email",
      phonePlaceholder: "Enter your phone number",
      verificationCodePlaceholder: "Enter verification code",
      emailPlaceholder: "Enter your email",
      passwordPlaceholder: "Enter your password",
      verify: "Verify Code",
      verifying: "Verifying...",
      sendCode: "Send Code",
      login: "Login",
      loggingIn: "Logging in...",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      signUp: "Sign Up",
      or: "OR",
      rememberMe: "Remember me",
      gamingBadge: "Strategic Gaming Experience"
    }
  },
  fa: {
    auth: {
      welcome: "به گیم‌فورد خوش آمدید",
      subtitle: "ورود به عرصه بازی",
      phoneLogin: "ورود با شماره تلفن",
      emailLogin: "ورود با ایمیل",
      continueWithGoogle: "ادامه با گوگل",
      continueWithPhone: "ادامه با تلفن همراه",
      continueWithEmail: "ادامه با ایمیل",
      phonePlaceholder: "شماره تلفن خود را وارد کنید",
      verificationCodePlaceholder: "کد تایید را وارد کنید",
      emailPlaceholder: "ایمیل خود را وارد کنید",
      passwordPlaceholder: "رمز عبور خود را وارد کنید",
      verify: "تایید کد",
      verifying: "در حال تایید...",
      sendCode: "ارسال کد",
      login: "ورود",
      loggingIn: "در حال ورود...",
      forgotPassword: "فراموشی رمز عبور؟",
      noAccount: "حساب کاربری ندارید؟",
      signUp: "ثبت نام",
      or: "یا",
      rememberMe: "مرا به خاطر بسپار",
      gamingBadge: "تجربه بازی استراتژیک"
    }
  }
};

interface AuthInputProps {
  id?: string;
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  endIcon?: React.ReactNode;
}

const AuthInput = ({ id, icon, type, placeholder, value, onChange, error, required = false, endIcon }: AuthInputProps) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">{placeholder}</label>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-500">
        {icon}
      </div>
      <input
        id={id}
        type={type}
        className={`block w-full pl-12 ${endIcon ? 'pr-12' : 'pr-4'} py-3 text-sm rounded-xl transition-all focus:ring-2 focus:outline-none bg-stone-900 border ${error ? 'border-red-600 focus:border-red-500 focus:ring-red-500/20' : 'border-stone-800 focus:border-yellow-500 focus:ring-yellow-500/20'
          } text-stone-100 placeholder-stone-500 shadow-sm`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {endIcon && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {endIcon}
        </div>
      )}
      {error && (
        <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-red-400" id={`${id}-error`}>
          {error}
        </motion.p>
      )}
    </div>
  );
};

const AuthButton = ({ onClick, icon, children, variant = 'primary', disabled = false, type = 'button' }: any) => {
  const variants: Record<string, string> = {
    primary: 'bg-gradient-to-r from-yellow-500/95 to-yellow-600/95 text-stone-900 font-semibold shadow-[0_8px_30px_-10px_rgba(235,179,0,0.45)] hover:scale-[1.01] focus:scale-[0.995] ',
    outline: 'border-2 border-stone-800 bg-stone-900/60 text-stone-200 hover:border-yellow-500/50 hover:scale-[1.01]',
    google: 'border-2 border-stone-800 bg-stone-900/60 text-stone-200 hover:border-yellow-500/30 hover:scale-[1.01]',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`flex items-center justify-center gap-3 w-full px-4 py-3 rounded-xl text-sm transition-all ${variants[variant]} ${disabled ? 'opacity-60 cursor-not-allowed' : ''
        }`}
      aria-busy={disabled}
    >
      {disabled ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <>
          {icon}
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
};

export default function GameFordLogin() {

  const [mounted, setMounted] = useState(false);
  const [currentView, setCurrentView] = useState<AuthView>('main');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lang] = useState<'en' | 'fa'>('en');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  const t = translations[lang].auth;
  const isRTL = lang === 'fa';



  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handlePhoneLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const handleEmailLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const slideIn = {
    hidden: { x: isRTL ? -20 : 20, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: isRTL ? 20 : -20, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-stone-950 via-[#242321] to-stone-950">
      <div className="w-full max-w-6xl mx-auto p-6 ">
        <div className="relative flex shadow-2xl min-h-[680px] rounded-3xl overflow-hidden bg-gradient-to-br from-stone-950/70 to-stone-900/80 border border-stone-800">

          {/* Left - Form */}
          <motion.div
            initial={{ x: isRTL ? 60 : -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center md:w-1/2 p-10 lg:p-12 bg-gradient-to-br from-[#11100F]  via-stone-900/90 to-[#0c0b0b]  backdrop-blur-sm"
          >
            <div className="max-w-md mx-auto w-full h-[90%]">
              <div className="inline-flex items-center justify-center  rounded-2xl  ">
                <div className={`w-30 h-30 scale-100 relative group `}>
                  <OptimizedImage
                    src="/logoes/logoGold.png"
                    alt="Logo"
                    fill
                    className="object-contain group-hover:drop-shadow-[0_0_12px_rgb(216, 143, 0)] transition-all duration-300"
                    style={{ filter: "brightness(1.5)" }}
                    priority
                  />
                </div>
              </div>
              {/* Top Row - logo and back button */}

              <h2 className="text-3xl text-center font-extrabold mb-12 text-yellow-400">
                {t[currentView === 'main' ? 'welcome' : currentView === 'phone' ? 'phoneLogin' : 'emailLogin']}
              </h2>
              {currentView === 'main' && <p className="text-sm text-stone-400 mb-6">{t.subtitle}</p>}

              <AnimatePresence mode="wait">
                {currentView === 'main' && (
                  <motion.div variants={slideIn as any} initial="hidden" animate="show" exit="exit" className="space-y-4">
                    <AuthButton variant="google" onClick={handleGoogleLogin} disabled={isLoading} icon={<svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#4285F4" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#34A853" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>}
                    >
                      {t.continueWithGoogle}
                    </AuthButton>

                    <div className="flex items-center gap-4 my-6">
                      <div className="flex-1 h-px bg-stone-800" />
                      <span className="text-xs font-medium text-stone-500">{t.or}</span>
                      <div className="flex-1 h-px bg-stone-800" />
                    </div>

                    <AuthButton variant="outline" onClick={() => setCurrentView('phone')} icon={<Phone className="w-5 h-5 text-stone-200" />}>
                      {t.continueWithPhone}
                    </AuthButton>

                    <AuthButton variant="outline" onClick={() => setCurrentView('email')} icon={<Mail className="w-5 h-5 text-stone-200" />}>
                      {t.continueWithEmail}
                    </AuthButton>

                    <p className="text-center text-sm mt-4 text-stone-400">
                      {t.noAccount}{' '}
                      <a href="#" className="font-medium text-yellow-400 hover:text-yellow-300 hover:underline">
                        {t.signUp}
                      </a>
                    </p>
                  </motion.div>
                )}

                {currentView === 'phone' && (
                  <motion.form onSubmit={handlePhoneLogin} variants={slideIn as any} initial="hidden" animate="show" exit="exit" className="space-y-4" aria-label="phone-login-form">
                    <AuthInput
                      id="phone"
                      icon={<Phone className="w-5 h-5" />}
                      type="tel"
                      placeholder={t.phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />

                    {verificationCode && (
                      <AuthInput
                        id="code"
                        icon={<Lock className="w-5 h-5" />}
                        type="text"
                        placeholder={t.verificationCodePlaceholder}
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                      />
                    )}

                    <AuthButton type="submit" disabled={isLoading} icon={<Phone className="w-5 h-5" />}>
                      {isLoading ? t.verifying : t.sendCode}
                    </AuthButton>
                  </motion.form>
                )}

                {currentView === 'email' && (
                  <motion.form onSubmit={handleEmailLogin} variants={slideIn as any} initial="hidden" animate="show" exit="exit" className="space-y-4" aria-label="email-login-form">
                    <AuthInput
                      id="email"
                      icon={<Mail className="w-5 h-5" />}
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <AuthInput
                      id="password"
                      icon={<Lock className="w-5 h-5" />}
                      type={showPassword ? 'text' : 'password'}
                      placeholder={t.passwordPlaceholder}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      endIcon={
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-stone-400 hover:text-stone-200 transition-colors"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      }
                    />

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-stone-700 text-yellow-500 focus:ring-yellow-500/20 bg-stone-800 focus:ring-offset-0"
                        />
                        <span className="text-stone-400">{t.rememberMe}</span>
                      </label>
                      <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline">
                        {t.forgotPassword}
                      </a>
                    </div>

                    <AuthButton type="submit" disabled={isLoading} icon={<Lock className="w-5 h-5" />}>
                      {isLoading ? t.loggingIn : t.login}
                    </AuthButton>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
            <div className="flex items-center justify-center ">


              {currentView !== 'main' && (
                <button
                  onClick={() => setCurrentView('main')}
                  aria-label="back"
                  className="p-2 rounded-full transition-colors hover:bg-stone-800 text-stone-300 hover:text-yellow-400"
                >
                  <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>


            <div className="flex justify-center -mt-1">
              <LanguageSwitcher />
            </div>
          </motion.div>

          {/* Right Side - Image & overlay */}
          <motion.div
            initial={{ x: isRTL ? -60 : 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block md:w-1/2 relative"
          >
            <div className="absolute inset-0">
              <OptimizedImage src="/images/template/login-BG.png" alt="Gaming" fill className="object-center" critical priority />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-stone-800/50 via-stone-900/40 to-stone-900/80" />

            <div className={`absolute bottom-12 left-12 right-12 text-white`}>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>


              </motion.div>
            </div>





          </motion.div>

        </div>
      </div>
    </div>
  );
}
