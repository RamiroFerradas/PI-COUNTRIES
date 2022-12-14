const { DataTypes } = require("sequelize");
// Exportamos una función que define el modelo
// Luego le inyectamos la conexión a sequelize.
module.exports = (sequelize) => {
  // define activity model

  // Required properties
  sequelize.define(
    "activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: "uniqueActivity",
      },

      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // unique: "uniqueActivity",
        validate: {
          min: 1,
          max: 5,
        },
      },

      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // unique: "uniqueActivity",
        validate: {
          min: 1,
          max: 24,
        }, // Hours
      },

      season: {
        type: DataTypes.ARRAY(
          DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring")
        ),
        allowNull: false,
      },
    },
    //
    // Modify default timestamp titles
    {
      createdAt: false,
      updatedAt: false,
    }
    //
    // Modify default table name
  );
};

/*


*/
