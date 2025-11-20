function checkLicense() {
  const key = process.env.LICENSE_KEY;

  if (!key || key === "your-license-key-here") {
    return { valid: false, message: "LICENSE_KEY is missing" };
  }

  if (key.length === 77) {
    return { valid: true, message: "Welcome !" };
  }

  return { valid: false, message: "LICENSE_KEY seems invalid" };
}

export default checkLicense;
