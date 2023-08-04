import dotenv from 'dotenv'
dotenv.config()

interface EnvVariables {
    USER: string;
    PASS: string;
    CLOSE_ACC: string;
  }

export const CREDENTIALS : EnvVariables={
    USER:process.env.USERNAME ?? '',
    PASS:process.env.PASSWORD ?? '',
    CLOSE_ACC:process.env.CLOSED_ACCOUNT ?? ''
}