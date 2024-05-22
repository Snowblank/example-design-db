import { DataTypes } from "sequelize";
import sequelize from "..";

const Game = sequelize.define("Game", {
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
},{
    tableName: 'games'
})


export default Game;