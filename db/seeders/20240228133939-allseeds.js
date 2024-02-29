'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Districts', [
      {
        name: 'Центральный федеральный округ',
      },
      {
        name: 'Северо-Западный федеральный округ',

      },
      {
        name: 'Южный федеральный округ',
      },
      {
        name: 'Северо-Кавказский федеральный округ',

      },
      {
        name: 'Приволжский федеральный округ',
      },
      {
        name: 'Уральский федеральный округ',

      },
      {
        name: 'Сибирский федеральный округ',
      },
      {
        name: 'Дальневосточный федеральный округ',

      },

    ], {});
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Иванов Иван Иванович', email: 'lol@mail.ru', password: await bcrypt.hash('123', 10), districtId: 2,
      },
      {
        username: 'Иванова Мария Ивановна', email: 'lola@mail.ru', password: await bcrypt.hash('123', 10), districtId: 6,
      },
      {
        username: 'Шляпников Иван Владимирович', email: 'lolaland@mail.ru', password: await bcrypt.hash('123', 10), districtId: 7,
      },

    ], {});
    await queryInterface.bulkInsert('Initiatives', [
      {
        name: 'Убирать за собачками', description: 'Я хочу, чтобы в моем дворе не было грязно. Хочу ходить по двору и выдавать пакетики.', voites: 2, districtId: 2, userId: 2,
      },
      {
        name: 'Выдавать шарики', description: 'Хочу, чтобы дети радовались, буду выдавать им шарики', voites: 0, districtId: 5, userId: 2,
      },
      {
        name: 'Раздельный сбор мусора', description: 'Я хочу, чтобы в моем дворе не было грязно. Хочу установить раздельные мусорные баки', voites: 6, districtId: 2, userId: 1,
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
