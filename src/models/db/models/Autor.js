module.exports = (sequelize, DataTypes) => {

    let alias = "Autores";
    
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
      tableName: 'autores',
      timestamps: false
    };

    let Autor = sequelize.define(alias, cols, config);
  
    Autor.associate = function(models){
      Autor.hasMany(models.Productos,{
        as: "productos",
        foreignKey: "autor_id"
      });
    }

    return Autor;
  }