'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detail_episodes', [
      {
        page: 1,
        image:'https://webtoon-phinf.pstatic.net/20150420_221/14294586619349PAhM_JPEG/142945866188944021.jpg?type=q90',
        episode_id:1,
      },
      {
        page: 2,
        image:'https://webtoon-phinf.pstatic.net/20150420_295/1429458665962LATxf_JPEG/142945866590944029.jpg?type=q90',
        episode_id:1,
      },
      {
        page: 3,
        image:'https://webtoon-phinf.pstatic.net/20150420_6/1429458663422j32uB_JPEG/142945866335744026.jpg?type=q90',
        episode_id:1,
      },
      {
        page: 4,
        image:'https://webtoon-phinf.pstatic.net/20150420_193/1429458665191pTCb9_JPEG/142945866513344027.jpg?type=q90',
        episode_id:1,
      },



      {
        page: 1,
        image:'https://webtoon-phinf.pstatic.net/20150429_106/1430251281509xM4PM_JPEG/143025128145244037.jpg?type=q90',
        episode_id:2,
      },
      {
        page: 2,
        image:'https://webtoon-phinf.pstatic.net/20150429_191/1430251301893jtgDh_JPEG/143025130180444030.jpg?type=q90',
        episode_id:2,
      },
      {
        page: 3,
        image:'https://webtoon-phinf.pstatic.net/20150429_165/1430251291431rlHpH_JPEG/143025129134144035.jpg?type=q90',
        episode_id:2,
      },
      {
        page: 4,
        image:'https://webtoon-phinf.pstatic.net/20150429_188/14302512975671w3Re_JPEG/143025129749344032.jpg?type=q90',
        episode_id:2,
      },




      {
        page: 1,
        image:'https://webtoon-phinf.pstatic.net/20150429_229/1430251652773k1k01_JPEG/143025165269544048.jpg?type=q90',
        episode_id:3,
      },
      {
        page: 2,
        image:'https://webtoon-phinf.pstatic.net/20150429_285/1430251653265YhWN2_JPEG/143025165317544043.jpg?type=q90',
        episode_id:3,
      },
      {
        page: 3,
        image:'https://webtoon-phinf.pstatic.net/20150429_119/1430251644254U7eg5_JPEG/143025164419344049.jpg?type=q90',
        episode_id:3,
      },
      {
        page: 4,
        image:'https://webtoon-phinf.pstatic.net/20150429_74/1430251646227qndzD_JPEG/143025164615944047.jpg?type=q90',
        episode_id:3,
      },





      {
        page: 1,
        image:'https://webtoon-phinf.pstatic.net/20160927_285/1474954189216f9E6x_JPEG/147495418919253212.jpg?type=q90',
        episode_id:4,
      },
      {
        page: 2,
        image:'https://webtoon-phinf.pstatic.net/20150916_178/1442399748410Xm1GD_JPEG/144239974836453210.jpg?type=q90',
        episode_id:4,
      },
      {
        page: 3,
        image:'https://webtoon-phinf.pstatic.net/20150916_161/1442399748808DL1bb_JPEG/144239974875253217.jpg?type=q90',
        episode_id:4,
      },
      {
        page: 4,
        image:'https://webtoon-phinf.pstatic.net/20150916_67/14423997488930SE72_JPEG/144239974881653211.jpg?type=q90',
        episode_id:4,
      },





      {
        page: 1,
        image:'https://webtoon-phinf.pstatic.net/20150828_91/1440741655440Dk6lT_JPEG/144074165539553225.jpg?type=q90',
        episode_id:5,
      },
      {
        page: 2,
        image:'https://webtoon-phinf.pstatic.net/20150828_298/1440741655832yG1tW_JPEG/144074165576753229.jpg?type=q90',
        episode_id:5,
      },
      {
        page: 3,
        image:'https://webtoon-phinf.pstatic.net/20150828_121/1440741655686pdrJg_JPEG/144074165563053227.jpg?type=q90',
        episode_id:5,
      },
      {
        page: 4,
        image:'https://webtoon-phinf.pstatic.net/20150828_24/144074165584216DmW_JPEG/144074165577953228.jpg?type=q90',
        episode_id:5,
      },





      {
        page: 1,
        image:'https://webtoon-phinf.pstatic.net/20150828_221/1440741925604FFEOw_JPEG/144074192555253235.jpg?type=q90',
        episode_id:6,
      },
      {
        page: 2,
        image:'https://webtoon-phinf.pstatic.net/20150828_17/1440741925675OTLFJ_JPEG/144074192561753233.jpg?type=q90',
        episode_id:6,
      },
      {
        page: 3,
        image:'https://webtoon-phinf.pstatic.net/20150828_233/14407419256757lTlJ_JPEG/144074192561053237.jpg?type=q90',
        episode_id:6,
      },
      {
        page: 4,
        image:'https://webtoon-phinf.pstatic.net/20150828_233/14407419256757lTlJ_JPEG/144074192561053237.jpg?type=q90',
        episode_id:6,
      },



    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('detail_episodes', null, {});
  }
};
