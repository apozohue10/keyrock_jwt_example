'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('oauth_client', [
          {
            id: 'idm_admin_app',
            name: 'idm',
            description: 'idm',
            url: '',
            redirect_uri: '',
            grant_type: '',
            response_type: '',
            token_type: 'bearer',
            jwt_secret: '',
            image: 'default'
          },
          {
            id: 'app1',
            secret: 'app1',
            name: 'Chocolate Factory',
            description: 'Factory which makes chocolate', 
            url: 'http://172.18.1.7:4000',
            redirect_uri: 'http://172.18.1.7:4000/login',
            grant_type: 'authorization_code,implicit,password,client_credentials,refresh_token',
            response_type: 'code,token',
            image: 'default',
            token_type: 'jwt',
            jwt_secret: 'secret_app1'
          },
          {
            id: 'app2',
            secret: 'app2',
            name: 'Candy Factory',
            description: 'Factory which makes candy',
            url: 'http://172.18.1.8:5000',
            redirect_uri: 'http://172.18.1.8:5000/login',
            grant_type: 'authorization_code,implicit,password,client_credentials,refresh_token',
            response_type: 'code,token',
            image: 'default',
            token_type: 'jwt',
            jwt_secret: 'secret_app2'
          }
        ]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('oauth_client', null, {});
  }
};
