'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', { //Nombre de la base de datos
      id: { //Atributo id
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: { //Atributo title
        type: Sequelize.STRING
      },
      content: { //Atributo content
        type: Sequelize.TEXT
      },
      UserId: { //Atributo UserId "Llave foranea"
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  }
};