const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: 'Sin Descripción'
    },
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 5
    },
    platforms: {
      type: DataTypes.ENUM('PC', 'PlayStation', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4', 'PlayStation 5', 'Xbox Series S/X', 'Xbox 360', 'Xbox One', 'Xbox', 'Linux', 'macOS', 'Android', 'Nintendo Switch', 'iOS', 'PS Vita'),
      allowNull: false
    },
    image:{
      type: DataTypes.STRING
    },
    inDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {timestamps:false});
};
