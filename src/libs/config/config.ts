export const config = () => ({
  env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10),
  jwt: {
    secret: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRE,
    refresh: process.env.JWT_EXPIRE_RERESH,
  },
  database: {
    name: 'default',
    type: 'mysql',
    database: process.env.DATABASE_DB,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    synchronize: JSON.parse(process.env.DB_SYNC),
    entities: ['dist/entities/*.js'],
    logging: JSON.parse(process.env.DB_LOG),
    dropSchema: JSON.parse(process.env.DB_DROP),
  },
  winston: {
    dailyFormat: {
      filename: 'sms-service-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    },
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT, 10),
  },
});
