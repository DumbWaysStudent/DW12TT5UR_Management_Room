'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    customer_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    is_booked: DataTypes.BOOLEAN,
    is_done: DataTypes.BOOLEAN,
    duration: DataTypes.INTEGER,
    order_end_time: DataTypes.DATE
  }, {});
  orders.associate = function(models) {
    orders.belongsTo(models.rooms, {
      as: 'roomsID',
      foreignKey: 'room_id'
    })
    orders.belongsTo(models.customers, {
      as: 'customersID',
      foreignKey: 'customer_id'
    })
  };
  return orders;
};