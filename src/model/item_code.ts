import { DataTypes } from "sequelize";
import sequelize from "../..";
import User from "./user";

const ItemCode = sequelize.define("ItemCode", {
    id: {
        type: DataTypes.UUID(),
        defaultValue: DataTypes.UUIDV4(),
        primaryKey: true,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    expire_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "item_codes"
})

ItemCode.belongsTo(User, { foreignKey: 'userId' });

export default ItemCode;