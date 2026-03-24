import "dotenv/config";

const getEnv = (key, required = true) => {
  const value = process.env[key];
  if (!value && required) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const ENV = {
  PORT: getEnv("PORT"),
  MONGO_URI: getEnv("MONGO_URI"),
  JWT_SECRET: getEnv("JWT_SECRET"),
  NODE_ENV: getEnv("NODE_ENV"),
  CLIENT_URL: getEnv("CLIENT_URL"),
  RESEND_API_KEY: getEnv("RESEND_API_KEY"),
  EMAIL_FROM: getEnv("EMAIL_FROM"),
  EMAIL_FROM_NAME: getEnv("EMAIL_FROM_NAME"),
  CLOUDINARY_CLOUD_NAME: getEnv("CLOUDINARY_CLOUD_NAME"),
  CLOUDINARY_API_KEY: getEnv("CLOUDINARY_API_KEY"),
  CLOUDINARY_API_SECRET: getEnv("CLOUDINARY_API_SECRET"),
  ARCJET_KEY: getEnv("ARCJET_KEY"),
  ARCJET_ENV: getEnv("ARCJET_ENV"),
};