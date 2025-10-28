"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LogIn, Phone, ArrowLeft, Mail } from "lucide-react";
import { useLanguageStore } from "@/app/zustand/uselangStore";


import { AuthTranslations } from "@/types/translations";

export const translations: AuthTranslations = {
  en: {
    auth: {
      welcome: "Begin Your Journey",
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
      sideTitle: "Strategic Gaming",
      sideSubtitle: "Experience the Next Level",
      gamingBadge: "Strategic Gaming Experience",
    },
    errors: {
      googleSignInFailed: "Failed to sign in with Google",
      phoneVerificationFailed: "Failed to verify phone number",
      invalidCredentials: "Invalid email or password",
      loginFailed: "Login failed. Please try again",
    },
  },
  fa: {
    auth: {
      welcome: "آغاز سفر",
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
      sideTitle: "بازی استراتژیک",
      sideSubtitle: "تجربه سطح بعدی",
      gamingBadge: "تجربه بازی استراتژیک",
    },
    errors: {
      googleSignInFailed: "ورود با گوگل ناموفق بود",
      phoneVerificationFailed: "تایید شماره تلفن ناموفق بود",
      invalidCredentials: "ایمیل یا رمز عبور نامعتبر است",
      loginFailed: "ورود ناموفق بود. لطفا دوباره تلاش کنید",
    },
  },
};
