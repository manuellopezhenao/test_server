require('dotenv').config();

const configProd =  {
    PORT: process.env.PORT,
    DATA_BASE_NAME: process.env.DATA_BASE_NAME,
    USER: process.env.DATA_BASE_USER,
    PASSWORD: process.env.DATA_BASE_PASSWORD,
    DATA_BASE_URL: process.env.DATA_BASE_HOST,
}

const configDev =  {
    DATA_BASE_NAME: 'seleccion_test',
    USER: 'root',
    PASSWORD: '',
    DATA_BASE_URL: 'localhost',
    PORT: 3001,
}

const config = process.env.NODE_ENV === 'production' ? configProd : configDev;


export {config};