import { DataTypes } from "sequelize";
import sequelize from "..";
import ItemCode from "./item_code";

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID(),
        defaultValue: DataTypes.UUIDV4(),
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code_list: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: true,
    }
},{
    tableName: 'users'
})

User.hasMany(ItemCode, { foreignKey: 'userId' });

export default User;