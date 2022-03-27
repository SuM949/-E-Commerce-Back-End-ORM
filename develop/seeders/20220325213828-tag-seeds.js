module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tag', [
      {
        tag_name: 'rock music',
      },
      {
        tag_name: 'pop music',
      },
      {
        tag_name: 'blue',
      },
      {
        tag_name: 'red',
      },
      {
        tag_name: 'green',
      },
      {
        tag_name: 'white',
      },
      {
        tag_name: 'gold',
      },
      {
        tag_name: 'pop culture',
      },
      {
        tag_name: 'rap music',
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tag', null, {});
  }
};