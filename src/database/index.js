import Sequelize from 'sequelize';

// Models
import databaseConfig from '../config/database';

class Database {
  constructor() {
    this.sequelize = new Sequelize(databaseConfig);
  }
}

export default new Database();
