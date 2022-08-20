const { DataTypes } = require("sequelize");
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // define country model
  //
  sequelize.define(
    "country",
    {
      // Required properties
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "country-capital-flag",
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "country-capital-flag",
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        // defaultValue: this.getDataValue(name),
        allowNull: false,
        unique: "country-capital-flag",
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      //
      // Extra properties
      officialName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unMember: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      maps: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timezones: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    },

    //
    // Modify default timestamp titles
    { timestamps: false },
    //
    // Modify default table name
    { tableName: "countries" }
  );
};
