import { DataTypes } from "sequelize";
import sequelize from "..";
import Bundle from "./bundle";
import Product from "./product";

const BundleProduct = sequelize.define("BundleProduct", {
    bundleId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Bundle,
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Product,
            key: 'id',
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'bundle_products'
});


export default BundleProduct;