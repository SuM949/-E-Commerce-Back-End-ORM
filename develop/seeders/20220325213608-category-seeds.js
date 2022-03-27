module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [
      {
        category_name: 'Shirts',
      },
      {
        category_name: 'Shorts',
      },
      {
        category_name: 'Music',
      },
      {
        category_name: 'Hats',
      },
      {
        category_name: 'Shoes',
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category', null, {});
  }
};