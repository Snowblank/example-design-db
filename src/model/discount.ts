import { DataTypes } from "sequelize";
import sequelize from "../..";
import Product from "./product";

const Discount = sequelize.define("Discount", {
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
        type: DataTypes.UUID,
        references: {
            model: 'products',
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
    tableName: "discounts"
});
Discount.hasOne(Product, { foreignKey: 'discountId' });

export default Discount;
