module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('users',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        verified:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },
        username:DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            unique:true
        },
        password:DataTypes.STRING
    });
    return User;
};