import { DataTypes } from "sequelize";
import sequelize from "../..";
import Discount from "./discount";

enum EProductType {
    CODE,
    ITEM
}

const Product = sequelize.define("Product", {
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    details: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.INTEGER, 
        allowNull: false,  
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    discountId: {
        type: DataTypes.UUID,
        references: {
            model: 'discounts',
            key: 'id'
        }
    },
    start_sale_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_sale_date: {
        type: DataTypes.DATE
    }
}, {
    tableName: "products"
});

Product.belongsTo(Discount, { foreignKey: 'discountId' });

export default Product;
