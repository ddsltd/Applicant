module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  cron: {
    enabled: false,
  },
  admin: {
    path: env('FRONTEND_URL','/dashboard'), // Note: The administration will be accessible from the root of the domain (ex: http//yourfrontend.com/)
    serveAdminPanel: env('SERVER_PANEL',true), // http://yourbackend.com will not serve any static admin files
    build: {
      backend: env('BACKEND_URL','http://localhost:1440'),
    },
  },

});

