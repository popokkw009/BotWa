module.exports = {
  apps : [{
    name: "yudhacopas",
    script: "./yudhacopas.js",
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
