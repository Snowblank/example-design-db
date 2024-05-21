import { DataTypes } from "sequelize";
import sequelize from "../..";

const Bundle = sequelize.define("Bundle", {
    id: {
        type: DataTypes.UUID(),
        defaultValue: DataTypes.UUIDV4(),
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    productId: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        references: {
            model: 'products',
            key: 'id'
        }
    },
}, {
    tableName: "bundles"
});

export default Bundle;
