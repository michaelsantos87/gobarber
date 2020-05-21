export default {
  jwt: {
    secret: process.env.APP_SECRET || 'fault',
    expiresIn: '5d',
  },
};
