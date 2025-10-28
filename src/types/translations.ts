type Language = "en" | "fa";

export type AuthTranslations = {
  [key in Language]: {
    auth: {
      welcome: string;
      subtitle: string;
      phoneLogin: string;
      emailLogin: string;
      continueWithGoogle: string;
      continueWithPhone: string;
      continueWithEmail: string;
      phonePlaceholder: string;
      verificationCodePlaceholder: string;
      emailPlaceholder: string;
      passwordPlaceholder: string;
      verify: string;
      verifying: string;
      sendCode: string;
      login: string;
      loggingIn: string;
      forgotPassword: string;
      noAccount: string;
      signUp: string;
      or: string;
      rememberMe: string;
      sideTitle: string;
      sideSubtitle: string;
      gamingBadge: string;
    };
    errors: {
      googleSignInFailed: string;
      phoneVerificationFailed: string;
      invalidCredentials: string;
      loginFailed: string;
    };
  };
};
