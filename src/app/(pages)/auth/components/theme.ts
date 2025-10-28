export const theme = {
  colors: {
    primary: {
      DEFAULT: "#FFD700", // Gold
      hover: "#FFC000",
      dark: "#B8860B",
      light: "#FFE55C",
    },
    secondary: {
      DEFAULT: "#1F2937", // Dark gray
      hover: "#374151",
      dark: "#111827",
      light: "#4B5563",
    },
    background: {
      light: "#FFFFFF",
      dark: "#111827",
      paper: {
        light: "#FFFFFF",
        dark: "#1F2937",
      },
    },
    text: {
      primary: {
        light: "#1F2937",
        dark: "#F9FAFB",
      },
      secondary: {
        light: "#4B5563",
        dark: "#D1D5DB",
      },
      muted: {
        light: "#6B7280",
        dark: "#9CA3AF",
      },
    },
    border: {
      DEFAULT: {
        light: "#E5E7EB",
        dark: "#374151",
      },
      focus: {
        light: "#FFD700",
        dark: "#B8860B",
      },
    },
    input: {
      background: {
        light: "#FFFFFF",
        dark: "#1F2937",
      },
      hover: {
        light: "#F9FAFB",
        dark: "#374151",
      },
      border: {
        light: "#D1D5DB",
        dark: "#374151",
      },
    },
  },
  gradients: {
    primary: "linear-gradient(135deg, #FFD700 0%, #B8860B 100%)",
    secondary: "linear-gradient(135deg, #1F2937 0%, #111827 100%)",
    background: {
      light:
        "linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(184, 134, 11, 0.1) 100%)",
      dark: "linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(17, 24, 39, 0.95) 100%)",
    },
  },
  shadows: {
    light:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    dark: "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)",
  },
  blur: {
    light: "blur(12px)",
    dark: "blur(20px)",
  },
};
