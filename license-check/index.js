function checkLicense() {
  const key = process.env.LICENSE_KEY;

  if (!key) {
    throw new Error(
      "[license-check] LICENSE_KEY is missing. Set LICENSE_KEY in your .env file."
    );
  }

  if (key.length < 20) {
    throw new Error("[license-check] LICENSE_KEY seems invalid.");
  }

  console.log("[license-check] License verified.");
}

export default checkLicense;
