'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('webtoons', [
      {
        title: 'Dice',
        genre: 'Fantasi',
        isFavorite: 1,
        image:'https://file-thumb.anyacg.co/W300/f9/0d/f90d06070bb7e50e63667f18bd5f648ae70746d6_811139_722_1083.png',
        createdBy:1,
      },
      {
        title: 'Lookism',
        genre: 'Drama',
        isFavorite: 0,
        image:'i.pinimg.com/originals/95/d9/5f/95d95f62949c858368357068eb24eeff.png',
        createdBy:1,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
  }
};
