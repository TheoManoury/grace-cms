module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9ec2e80b689f6840b8bbe432a24e0b2b'),
  },
});
