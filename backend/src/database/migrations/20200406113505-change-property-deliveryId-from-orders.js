'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('orders', 'deliveryman_id', {
      type: Sequelize.INTEGER,
      references: { model: 'deliverymans', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('orders', 'deliveryman_id', {
      type: Sequelize.INTEGER,
      references: { model: 'deliverymans', key: 'id' },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      allowNull: true,
    });
  },
};
