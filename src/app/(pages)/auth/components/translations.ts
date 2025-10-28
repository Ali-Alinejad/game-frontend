"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LogIn, Phone, ArrowLeft, Mail } from "lucide-react";
import { useLanguageStore } from "@/app/zustand/uselangStore";

export const translations = {
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
  fa: {
    auth: {
      welcome: "خوش آمدید",
      phoneLogin: "ورود با تلفن همراه",
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
    },
    errors: {
      googleSignInFailed: "ورود با گوگل ناموفق بود",
      phoneVerificationFailed: "تایید شماره تلفن ناموفق بود",
      invalidCredentials: "ایمیل یا رمز عبور نامعتبر است",
      loginFailed: "ورود ناموفق بود. لطفا دوباره تلاش کنید",
    },
  },
};
