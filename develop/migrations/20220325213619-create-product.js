'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          isDecimal: true
        }
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        Validate: {
          isNumeric: true
        }
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'category',
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
