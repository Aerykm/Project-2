module.exports = function(sequelize, DataTypes) {
    var Subscription = sequelize.define("Subscription", {
      sub_name: DataTypes.STRING,
      sub_cost: DataTypes.INTEGER,
      trial_period: DataTypes.BOOLEAN,
      Due_date: DataTypes.DATE
    });
  
  
    return Subscription;
  };
  