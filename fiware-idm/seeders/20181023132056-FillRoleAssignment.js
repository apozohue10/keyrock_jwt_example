'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role_assignment', [
          {
            id: '1',
            oauth_client_id: 'app1',
            role_id: 'factory_ownerCH',
            user_id: 'willywonka'
          },
          {
            id: '5',
            oauth_client_id: 'app1',
            role_id: 'provider',
            user_id: 'willywonka'
          },
          {
            id: '2',
            oauth_client_id: 'app1',
            role_id: 'chocolateroom',
            user_id: 'willywonka'
          },
          {
            id: '3',
            oauth_client_id: 'app1',
            role_id: 'chocolateroom',
            user_id: 'oompaloompaCH'
          },
          {
            id: '6',
            oauth_client_id: 'app2',
            role_id: 'factory_ownerCY',
            user_id: 'oompaloompaCY'
          },
          {
            id: '7',
            oauth_client_id: 'app2',
            role_id: 'provider',
            user_id: 'oompaloompaCY'
          },
          {
            id: '8',
            oauth_client_id: 'app2',
            role_id: 'candycaneroom',
            user_id: 'willywonka'
          },
          {
            id: '9',
            oauth_client_id: 'app2',
            role_id: 'chewinggumroom',
            user_id: 'willywonka'
          }
        ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role_assignment', null, {});
  }
};
