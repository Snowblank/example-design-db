import { DataTypes } from "sequelize";
import sequelize from "..";
import User from "./user";
import Game from "./game";

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
        allowNull: true,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    gameId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'games',
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
ItemCode.belongsTo(Game, { foreignKey: 'gameId' });

export default ItemCode;