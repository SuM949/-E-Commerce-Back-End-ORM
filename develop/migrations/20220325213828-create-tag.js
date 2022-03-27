'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tag', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tag_name: {
        type: DataTypes.STRING,
      }});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
