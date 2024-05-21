import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: '....',
    password: '....',
    database: '....',
    logging: false,
  });
  
  export default sequelize;