module.exports = (sequelize, DataTypes) => {

  let alias = "Productos";
  
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT
    },
    precio_costo: {
      type: DataTypes.DECIMAL(8,2)
    },
    precio_venta: {
      type: DataTypes.DECIMAL(8,2)
    },
    release_date: {
      type: DataTypes.DATE
    },
    estilo: {
      type: DataTypes.STRING
    } 
  };

  let config = {
    tableName: 'productos',
    timestamps: false
  };

  let Producto = sequelize.define(alias, cols, config);

  Producto.associate = function(models){
    Producto.belongsTo(models.Generos,{
      as: "generos",
      foreignKey: "genero_id"
    })

    Producto.belongsTo(models.Autores, {
      as: "autores",
      foreignKey: "autor_id"
    })

    /*Producto.hasMany(models.ImagenesProductos,{
      as: "imagenes",
      foreignKey: "producto_id"
    })*/
  }

  return Producto;
}