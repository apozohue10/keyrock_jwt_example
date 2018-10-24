var config = {}

// config.idmURL = 'http://172.0.75.2:8000'; in case that the host of the computer is Windows or Mac
config.idmURL = 'http://172.18.1.6:3000';
config.client_id = 'app2';
config.client_secret = 'app2';
config.callbackURL = 'http://172.18.1.8:5000/login';
config.jwt_secret = 'secret_app2'

module.exports = config;