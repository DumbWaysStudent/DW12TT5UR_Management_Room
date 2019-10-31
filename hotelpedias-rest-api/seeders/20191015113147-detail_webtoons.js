'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detail_webtoons', [
      {
        title: 'Ep. 1',
        image:'https://webtoon-phinf.pstatic.net/20150420_203/14294586429743p2R9_JPEG/142945864294144027.jpg?type=q90',
        webtoon_id:1,
      },
      {
        title: 'Ep. 2',
        image:'https://webtoon-phinf.pstatic.net/20150429_242/1430251262263NKxXQ_JPEG/143025126222744039.jpg?type=q90',
        webtoon_id:1,
      },
      {
        title: 'Ep. 3',
        image:'https://webtoon-phinf.pstatic.net/20150429_61/1430251617532ac37i_JPEG/143025161749544046.jpg?type=q90',
        webtoon_id:1,
      },
      {
        title: 'Ep. 1',
        image:'https://webtoon-phinf.pstatic.net/20150828_6/14407414860498LuGP_JPEG/144074148600653213.jpg?type=q90',
        webtoon_id:2,
      },
      {
        title: 'Ep. 2',
        image:'https://webtoon-phinf.pstatic.net/20150828_42/14407416471695AxAP_JPEG/144074164713453220.jpg?type=q90',
        webtoon_id:2,
      },
      {
        title: 'Ep. 3',
        image:'https://webtoon-phinf.pstatic.net/20150828_283/1440741917837yaxjC_JPEG/144074191779653238.jpg?type=q90',
        webtoon_id:2,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('detail_webtoons', null, {});
  }
};
