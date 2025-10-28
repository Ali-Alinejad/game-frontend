'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/app/store/auth';
import { theme } from './theme';
import { translations } from './translations';
import { cn } from '@/lib/utils';
import { ArrowBigUpDashIcon, Eye, EyeOff, Facebook, Goal, Lock, LogIn, LogInIcon, Mail, MailCheck, Phone, Twitter, TwitterIcon } from 'lucide-react';

type AuthView = 'main' | 'phone' | 'email';

interface AuthInputProps {
    icon: React.ReactNode;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    className?: string;
    required?: boolean;
    endIcon?: React.ReactNode;
}

const AuthInput: React.FC<AuthInputProps> = ({
    icon,
    type,
    placeholder,
    value,
    onChange,
    error,
    required = false,
    endIcon,
}) => {
    const { isDark } = useAuthStore();
    return (
        <div className="relative">
            <div className={cn(
                "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                isDark ? "text-gray-500" : "text-gray-400"
            )}>
                {icon}
            </div>
            <input
                type={type}
                className={cn(
                    "block w-full pl-12",
                    endIcon ? "pr-12" : "pr-4",
                    "py-3 text-sm rounded-lg transition-all",
                    "focus:ring-2 focus:outline-none",
                    isDark ? (
                        error
                            ? "bg-gray-800 border-red-900 text-gray-100 placeholder-gray-500 focus:border-red-700 focus:ring-red-900/20"
                            : "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-500 focus:border-amber-500 focus:ring-amber-500/20"
                    ) : (
                        error
                            ? "bg-white border-red-400 text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20"
                            : "bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-amber-500 focus:ring-amber-500/20"
                    )
                )}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
            {endIcon && (
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    {endIcon}
                </div>
            )}
            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-red-500"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
};

// AuthButton Component
interface AuthButtonProps {
    onClick?: () => void;
    icon?: React.ReactNode;
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'google';
    disabled?: boolean;
    type?: 'button' | 'submit';
    className?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
    onClick,
    icon,
    children,
    variant = 'primary',
    disabled = false,
    type = 'button',
    className = '',
}) => {
    const variants = {
        primary: 'bg-black text-white hover:bg-gray-900',
        outline: 'border-2 border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50',
        google: 'border-2 border-gray-200 bg-white text-gray-700 hover:border-amber-500/30 hover:bg-amber-50/50',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.01 }}
            whileTap={{ scale: disabled ? 1 : 0.99 }}
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                } ${className}`}
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

// SocialButton Component
const SocialButton: React.FC<{ icon: React.ReactNode; onClick: () => void }> = ({ icon, onClick }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="flex items-center justify-center w-12 h-12 rounded-lg border-2 border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 transition-all"
        >
            {icon}
        </motion.button>
    );
};

export default function LoginForm() {
    const router = useRouter();
    const { language, theme: currentTheme } = useAuthStore();
    const [currentView, setCurrentView] = useState<AuthView>('main');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGoogleLogin = () => {
        setIsLoading(true);
        setError('');

        // Google OAuth URL
        const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
        const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual client ID
        const redirectUri = window.location.origin + '/auth/callback';
        const scope = 'email profile';
        const responseType = 'code';

        const params = new URLSearchParams({
            client_id: clientId,
            redirect_uri: redirectUri,
            response_type: responseType,
            scope: scope,
            access_type: 'offline',
            prompt: 'consent',
        });

        // Open Google login in the same window
        window.location.href = `${googleAuthUrl}?${params.toString()}`;
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

    const slideIn = {
        hidden: { x: 20, opacity: 0 },
        show: { x: 0, opacity: 1, transition: { duration: 0.4 } },
        exit: { x: -20, opacity: 0, transition: { duration: 0.2 } },
    };

    const isDark = currentTheme === 'dark';
    const colors = theme.colors;
    const t = translations[language].auth;

    return (
        <div className={cn(
            "min-h-screen flex",
            isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
                : 'bg-gradient-to-br from-amber-50 via-white to-amber-50'
        )}>
            <div className="flex w-full max-w-6xl mx-auto my-8 shadow-2xl rounded-3xl overflow-hidden">

                {/* Left Side - Form */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                        "w-full md:w-1/2 p-12 flex flex-col justify-center",
                        isDark ? 'bg-gray-900' : 'bg-white'
                    )}
                >
                    <div className="max-w-md mx-auto w-full">
                        {/* Logo/Title */}
                        <div className="text-center mb-8">
                            <h1 className={cn(
                                "text-sm font-light tracking-wider mb-4",
                                isDark ? 'text-gray-400' : 'text-gray-500'
                            )}>
                                Gaming Experience
                            </h1>

                            {currentView !== 'main' && (
                                <button
                                    onClick={() => setCurrentView('main')}
                                    className={cn(
                                        "mb-4 p-2 rounded-full transition-colors inline-flex",
                                        isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                                    )}
                                >
                                    <ArrowBigUpDashIcon className={cn(
                                        "w-5 h-5",
                                        isDark ? 'text-gray-400' : 'text-gray-600'
                                    )} />
                                </button>
                            )}

                            <h2 className={cn(
                                "text-3xl font-bold mb-2",
                                isDark ? 'text-white' : 'text-gray-900'
                            )}>
                                {t[currentView === 'main' ? 'welcome' : currentView === 'phone' ? 'phoneLogin' : 'emailLogin']}
                            </h2>
                            {currentView === 'main' && (
                                <p className={cn(
                                    "text-sm",
                                    isDark ? 'text-gray-400' : 'text-gray-500'
                                )}>
                                    {t.subtitle}
                                </p>
                            )}
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
                                    <AuthButton
                                        variant="google"
                                        onClick={handleGoogleLogin}
                                        disabled={isLoading}
                                        icon={<Goal className="w-5 h-5" />}
                                    >
                                        {t.continueWithGoogle}
                                    </AuthButton>

                                    {/* Divider */}
                                    <div className="flex items-center gap-4 my-6">
                                        <div className={cn(
                                            "flex-1 h-px",
                                            isDark ? 'bg-gray-800' : 'bg-gray-200'
                                        )} />
                                        <span className={cn(
                                            "text-xs font-medium",
                                            isDark ? 'text-gray-500' : 'text-gray-400'
                                        )}>
                                            {t.or}
                                        </span>
                                        <div className={cn(
                                            "flex-1 h-px",
                                            isDark ? 'bg-gray-800' : 'bg-gray-200'
                                        )} />
                                    </div>

                                    {/* Other Options */}
                                    <AuthButton
                                        variant="outline"
                                        onClick={() => setCurrentView('phone')}
                                        icon={<Phone className="w-5 h-5" />}
                                    >
                                        {t.continueWithPhone}
                                    </AuthButton>

                                    <AuthButton
                                        variant="outline"
                                        onClick={() => setCurrentView('email')}
                                        icon={<Mail className="w-5 h-5" />}
                                    >
                                        {t.continueWithEmail}
                                    </AuthButton>

                                    {/* Sign Up Link */}
                                    <p className={cn(
                                        "text-center text-sm mt-6",
                                        isDark ? 'text-gray-400' : 'text-gray-500'
                                    )}>
                                        {t.noAccount}{' '}
                                        <a href="#" className={cn(
                                            "font-medium hover:underline",
                                            isDark ? 'text-white' : 'text-gray-900'
                                        )}>
                                            {t.signUp}
                                        </a>
                                    </p>
                                </motion.div>
                            )}              {currentView === 'phone' && (
                                <motion.form
                                    onSubmit={handlePhoneLogin}
                                    variants={slideIn}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className="space-y-4"
                                >
                                    <AuthInput
                                        icon={<Phone className="w-5 h-5" />}
                                        type="tel"
                                        placeholder={t.phonePlaceholder}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />

                                    {verificationCode && (
                                        <AuthInput
                                            icon={<Lock className="w-5 h-5" />}
                                            type="text"
                                            placeholder={t.verificationCodePlaceholder}
                                            value={verificationCode}
                                            onChange={(e) => setVerificationCode(e.target.value)}
                                            required
                                        />
                                    )}

                                    <AuthButton
                                        type="submit"
                                        disabled={isLoading}
                                        icon={<LogIn className="w-5 h-5" />}
                                    >
                                        {isLoading ? t.verifying : t.sendCode}
                                    </AuthButton>
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
                                    <AuthInput
                                        icon={<MailCheck className="w-5 h-5" />}
                                        type="email"
                                        placeholder={t.emailPlaceholder}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />

                                    <AuthInput
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
                                                className={cn(
                                                    "transition-colors",
                                                    isDark ? "text-gray-500 hover:text-gray-400" : "text-gray-400 hover:text-gray-600"
                                                )}
                                            >
                                                {showPassword ?
                                                    <EyeOff className="w-5 h-5" /> :
                                                    <Eye className="w-5 h-5" />
                                                }
                                            </button>
                                        }
                                    />

                                    <div className="flex items-center justify-between text-sm">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className={cn(
                                                    "rounded focus:ring-offset-0",
                                                    isDark
                                                        ? "border-gray-700 text-amber-500 focus:ring-amber-500/20 bg-gray-800"
                                                        : "border-gray-300 text-amber-600 focus:ring-amber-500"
                                                )}
                                            />
                                            <span className={cn(
                                                isDark ? "text-gray-400" : "text-gray-600"
                                            )}>
                                                {t.rememberMe}
                                            </span>
                                        </label>
                                        <a href="#" className={cn(
                                            "hover:underline",
                                            isDark ? "text-amber-500" : "text-amber-600"
                                        )}>
                                            {t.forgotPassword}
                                        </a>
                                    </div>

                                    <AuthButton
                                        type="submit"
                                        disabled={isLoading}
                                        icon={<LogInIcon className="w-5 h-5" />}
                                    >
                                        {isLoading ? t.loggingIn : t.login}
                                    </AuthButton>
                                </motion.form>
                            )}
                        </AnimatePresence>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn(
                                    "mt-4 p-3 rounded-lg",
                                    isDark
                                        ? "bg-red-950/50 border-red-900/50"
                                        : "bg-red-50 border-red-200"
                                )}
                            >
                                <p className="text-sm text-red-600 text-center">{error}</p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:block md:w-1/2 relative overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                        alt="Mountain Lake"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-transparent to-black/50" />

                    {/* Overlay Content */}
                    <div className="absolute bottom-12 left-12 right-12 text-white">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <h3 className="text-4xl font-bold mb-4">Embrace the Outdoors</h3>
                            <p className="text-lg text-white/90 mb-6">Embrace the Journey</p>

                            {/* Dots Navigation */}
                            <div className="flex gap-2">
                                <button className="w-2 h-2 rounded-full bg-white" />
                                <button className="w-2 h-2 rounded-full bg-white/40" />
                                <button className="w-2 h-2 rounded-full bg-white/40" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Top Right Badge */}
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 text-white text-sm">
                        Strategic Gaming Experience
                    </div>
                </motion.div>
            </div>
        </div>
    );
}