module.exports = (sequelize, DataTypes) => {

    let alias = "Generos";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }  
    };

    let config = {
      tableName: 'generos',
      timestamps: false
    };

    let Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models){
      Genero.hasMany(models.Productos,{
        as: "productos",
        foreignKey: "genero_id"
      });
    }
  
    return Genero;
}