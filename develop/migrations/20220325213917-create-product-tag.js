'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product-tag', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'product',
          key: 'id'
        }
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag',
          key: 'id'
        }
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
