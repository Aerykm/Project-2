module.exports = function(sequelize, DataTypes) {
  var Subscription = sequelize.define("Subscription", {
    subName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    subDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    subCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    trialPeriod: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });


  return Subscription;
};
  