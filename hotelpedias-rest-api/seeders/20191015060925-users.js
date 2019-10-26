'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'dianprasetyo@gmail.com',
        password: 'inipassword',
        name: 'Admin'
      },
      {
        email: 'jhon.doe@gmail.com',
        password: 'secret',
        name: 'Jhon Doe'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
