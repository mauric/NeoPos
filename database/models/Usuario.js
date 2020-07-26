module.exports = (sequelize, DataTypes) => {
    let alias = "Usuario";
    let cols = {
        idusuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        name: {
            type: DataTypes.STRING },
        surname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        avatar: {
           type: DataTypes.STRING 
        }
    };
    let config = {
        tableName: "usuario",
        timestamps: false
    };
    
    const Usuario = sequelize.define(alias, cols, config);
    
    
    return Usuario;
}