const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT!,
    imagekit: {
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
    databaseUrl: process.env.DATABASE_URL!,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_URL!,
      redisToken: process.env.UPSTASH_REDIS_TOKEN!,
      qstashUrl: process.env.QSTASH_URL!,
      qstashToken: process.env.QSTASH_TOKEN!,
      qstashWebhookUrl: process.env.QSTASH_WEBHOOK_URL!,
    },
    emailjs: {
      serviceId: process.env.EMAILJS_SERVICE_ID!,
      templateId: process.env.EMAILJS_TEMPLATE_ID!,
      userId: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    },
    resendToken: process.env.RESEND_TOKEN!,
  },
};

export default config;
