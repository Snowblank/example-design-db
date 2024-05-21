import { DataTypes } from "sequelize";
import sequelize from "..";
import Product from "./product";
import BundleProduct from "./bundleproduct";

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
}, {
    tableName: "bundles"
});

Bundle.belongsToMany(Product, { through: BundleProduct, foreignKey: 'bundleId' });

export default Bundle;
