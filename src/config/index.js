import path from 'path';
import dotenv from 'dotenv';
import appPackage from "../../package.json";

dotenv.config();
const config = {
    PORT: process.env.PORT,
    ENVIRONMENT: process.env.NODE_ENV,
    APP_NAME: appPackage.name,
    APP_VERSION: appPackage.version
}

export default config;