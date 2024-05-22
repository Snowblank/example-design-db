import { DataTypes } from "sequelize";
import sequelize from "..";
import Discount from "./discount";
import Bundle from "./bundle";
import BundleProduct from "./bundleproduct";
import Game from "./game";

const Product = sequelize.define("Product", {
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
    details: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    gameId: {
        type: DataTypes.UUID,
        references: {
            model: 'games',
            key:'id'
        }
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

Product.belongsTo(Game, { foreignKey: 'gameId' });
Product.belongsTo(Discount, { foreignKey: 'discountId' });
Product.belongsToMany(Bundle, { through: BundleProduct, foreignKey: 'productId' });

export default Product;
