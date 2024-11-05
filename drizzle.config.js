/* eslint-disable import/no-anonymous-default-export */
/** @type { import("drizzle-kit").Config } */
export default {
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://PrepAi_owner:Q9LcmhFCEzO1@ep-young-boat-a1ze3oku.ap-southeast-1.aws.neon.tech/PrepAi?sslmode=require',
  },
};
