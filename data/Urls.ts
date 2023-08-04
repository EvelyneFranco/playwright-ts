import dotenv from 'dotenv'
dotenv.config()

interface EnvVariables {
    URL: string;
    REGISTER_URL: string;
  }

export const URL: EnvVariables={
    URL:process.env.URL ?? 'https://default-url.com',
    REGISTER_URL:process.env.REGISTER_URL ?? 'https://default-url.com'
}