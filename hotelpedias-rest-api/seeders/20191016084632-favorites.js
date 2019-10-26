'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('favorites', [
      {
        user_id: 2,
        webtoon_id: 2,
        isFavorite: 1,
      },
      {
        user_id: 2,
        webtoon_id: 1,
        isFavorite: 1,
      },
      {
        user_id: 3,
        webtoon_id: 2,
        isFavorite: 1,
      },
      {
        user_id: 4,
        webtoon_id: 2,
        isFavorite: 1,
      },
      {
        user_id: 4,
        webtoon_id: 1,
        isFavorite: 1,
      },
      {
        user_id: 5,
        webtoon_id: 1,
        isFavorite: 1,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('favorites', null, {});
  }
};
