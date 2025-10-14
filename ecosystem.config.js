const env = process.env.START_MODE;

module.exports = {
  apps: [{
    name: 'cutmagic-backend',
    instance_var: 'INSTANCE_ID',
    script: (env === 'dev') ? 'npm run start:dev' : 'npm run build && npm run start:prod',
    watch: false,
    wait_ready: true,
    // out_file: path.resolve(__dirname, 'logs/web.out.log'), //?
    // error_file: path.resolve(__dirname, 'logs/web.error.log'), //?
    env: { NODE_ENV: env }
  }]
}
