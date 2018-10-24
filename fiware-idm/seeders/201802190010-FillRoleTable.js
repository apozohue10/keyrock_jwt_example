'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('role', [
          {
            id: 'provider', 
            is_internal: 1, 
            name: 'Provider', 
            oauth_client_id: 'idm_admin_app'
          },
          {
            id: 'purchaser', 
            is_internal: 1, 
            name: 'Purchaser', 
            oauth_client_id: 'idm_admin_app'
          },
          {
            id: 'factory_ownerCH', 
            is_internal: 0, 
            name: 'Factory Owner', 
            oauth_client_id: 'app1'
          },
          {
            id: 'chocolateroom', 
            is_internal: 0, 
            name: 'Chocolate Room', 
            oauth_client_id: 'app1'
          },
          {
            id: 'televisionroom', 
            is_internal: 0, 
            name: 'Television Room', 
            oauth_client_id: 'app1'
          },
          {
            id: 'inventingroom', 
            is_internal: 0, 
            name: 'Inventing Room', 
            oauth_client_id: 'app1'
          },
          {
            id: 'factory_ownerCY', 
            is_internal: 0, 
            name: 'Factory Owner', 
            oauth_client_id: 'app2'
          },
          {
            id: 'candyroom', 
            is_internal: 0, 
            name: 'Candy Room', 
            oauth_client_id: 'app2'
          },
          {
            id: 'candycaneroom', 
            is_internal: 0, 
            name: 'Candy Cane Room', 
            oauth_client_id: 'app2'
          },
          {
            id: 'chewinggumroom', 
            is_internal: 0, 
            name: 'Chewing Gum Room', 
            oauth_client_id: 'app2'
          }
        ]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('role', null, {});
  }
};