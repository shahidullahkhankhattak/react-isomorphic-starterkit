import Sequelize, { Op } from 'sequelize';
import config from '../config/index';

const sequelize = new Sequelize(config.databaseUrl, {
  operatorsAliases: Op,
  define: {
    freezeTableName: true,
  },
});

export default sequelize;
