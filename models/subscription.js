module.exports = function(sequelize, DataTypes) {
  
  var Subscription = sequelize.define("Subscription", {
    subsName: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    subsCost: {
      type: DataTypes.INTEGER,
      len: [1]
    },


  return Subscription;
}
  