'use strict';
module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define('customers', {
    name: DataTypes.STRING,
    identity_number: DataTypes.INTEGER,
    phone_number: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  customers.associate = function(models) {
    // associations can be defined here
  };
  return customers;
};