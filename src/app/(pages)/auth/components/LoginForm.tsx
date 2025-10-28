import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, Phone, ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';

type AuthView = 'main' | 'phone' | 'email';

const translations = {
  en: {
    auth: {
      welcome: "Welcome Back",
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
    },
    errors: {
      googleSignInFailed: "Failed to sign in with Google",
      phoneVerificationFailed: "Failed to verify phone number",
      invalidCredentials: "Invalid email or password",
      loginFailed: "Login failed. Please try again",
    },
  },
};

export default function GamingLoginForm() {
  const [lang] = useState('en');
  const [currentView, setCurrentView] = useState<AuthView>('main');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const handlePhoneLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setVerificationCode('123456');
    setIsLoading(false);
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const slideIn = {
    hidden: { x: 20, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { x: -20, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-amber-500/5 via-transparent to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-yellow-600/5 via-transparent to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-md p-8 mx-4"
      >
        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-yellow-600/10 to-amber-500/20 rounded-2xl blur-xl" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-black/95 backdrop-blur-xl border border-amber-500/20 rounded-2xl shadow-2xl shadow-amber-500/10 overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              {currentView !== 'main' && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentView('main')}
                  className="p-2 hover:bg-amber-500/10 rounded-lg transition-colors border border-amber-500/20"
                >
                  <ArrowLeft className="w-5 h-5 text-amber-400" />
                </motion.button>
              )}
              <div className={currentView === 'main' ? 'text-center flex-1' : 'flex-1'}>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                  {translations[lang].auth[currentView === 'main' ? 'welcome' : currentView === 'phone' ? 'phoneLogin' : 'emailLogin']}
                </h2>
                {currentView === 'main' && (
                  <p className="text-gray-400 text-sm mt-2">Enter the arena</p>
                )}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {currentView === 'main' && (
                <motion.div
                  variants={slideIn}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="space-y-4"
                >
                  {/* Google Button */}
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGoogleLogin}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-400 hover:to-yellow-500 shadow-lg shadow-amber-500/20 border border-amber-400/30"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>{translations[lang].auth.continueWithGoogle}</span>
                  </motion.button>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
                    <span className="text-gray-500 text-xs font-medium">OR</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
                  </div>

                  {/* Phone Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentView('phone')}
                    className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all border-2 border-amber-500/30 bg-zinc-800/50 backdrop-blur-sm text-gray-200 hover:bg-zinc-800 hover:border-amber-500/50 shadow-lg"
                  >
                    <Phone className="w-5 h-5 text-amber-400" />
                    <span>{translations[lang].auth.continueWithPhone}</span>
                  </motion.button>

                  {/* Email Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentView('email')}
                    className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all border-2 border-amber-500/30 bg-zinc-800/50 backdrop-blur-sm text-gray-200 hover:bg-zinc-800 hover:border-amber-500/50 shadow-lg"
                  >
                    <Mail className="w-5 h-5 text-amber-400" />
                    <span>{translations[lang].auth.continueWithEmail}</span>
                  </motion.button>
                </motion.div>
              )}

              {currentView === 'phone' && (
                <motion.form
                  onSubmit={handlePhoneLogin}
                  variants={slideIn}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="space-y-4"
                >
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="w-5 h-5 text-amber-400/50" />
                    </div>
                    <input
                      type="tel"
                      className="block w-full pl-10 pr-4 py-3 text-sm rounded-lg bg-zinc-800/50 border-2 border-zinc-700 backdrop-blur-sm focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 focus:outline-none placeholder-gray-500 text-gray-200 transition-all"
                      placeholder={translations[lang].auth.phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  {verificationCode && (
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="w-5 h-5 text-amber-400/50" />
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-4 py-3 text-sm rounded-lg bg-zinc-800/50 border-2 border-zinc-700 backdrop-blur-sm focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 focus:outline-none placeholder-gray-500 text-gray-200 transition-all"
                        placeholder={translations[lang].auth.verificationCodePlaceholder}
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        required
                      />
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-400 hover:to-yellow-500 shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                    ) : (
                      <>
                        <LogIn className="w-5 h-5" />
                        <span>
                          {verificationCode ? translations[lang].auth.verify : translations[lang].auth.sendCode}
                        </span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}

              {currentView === 'email' && (
                <motion.form
                  onSubmit={handleEmailLogin}
                  variants={slideIn}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="space-y-4"
                >
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-amber-400/50" />
                    </div>
                    <input
                      type="email"
                      className="block w-full pl-10 pr-4 py-3 text-sm rounded-lg bg-zinc-800/50 border-2 border-zinc-700 backdrop-blur-sm focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 focus:outline-none placeholder-gray-500 text-gray-200 transition-all"
                      placeholder={translations[lang].auth.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-amber-400/50" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="block w-full pl-10 pr-12 py-3 text-sm rounded-lg bg-zinc-800/50 border-2 border-zinc-700 backdrop-blur-sm focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 focus:outline-none placeholder-gray-500 text-gray-200 transition-all"
                      placeholder={translations[lang].auth.passwordPlaceholder}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all bg-gradient-to-r from-amber-500 to-yellow-600 text-black hover:from-amber-400 hover:to-yellow-500 shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                    ) : (
                      <>
                        <LogIn className="w-5 h-5" />
                        <span>{translations[lang].auth.login}</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30"
              >
                <p className="text-sm text-red-400 text-center">{error}</p>
              </motion.div>
            )}

            {/* Footer text */}
            {currentView === 'main' && (
              <div className="mt-8 text-center">
                <p className="text-xs text-gray-500">
                  By continuing, you agree to our{' '}
                  <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                    Terms of Service
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}