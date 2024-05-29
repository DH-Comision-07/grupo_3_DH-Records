module.exports = (sequelize, DataTypes) => {

    let alias = "ImagenesProductos";

    let cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    };

    let config = {
      tableName: 'imagenes_productos',
      timestamps: false
    };

    let ImagenProducto = sequelize.define(alias, cols, config);
  
    ImagenProducto.associate = function(models){
      ImagenProducto.belongsTo(models.Productos,{
        as: "productos",
        foreignKey: "producto_id"
      });
    }

    return ImagenProducto;
}