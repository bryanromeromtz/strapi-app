module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdlc632en0hmoogvdiq0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_sczn'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'RFLQgVvtfCwZW7zCybPU9s4UzZ1b6xdc'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
