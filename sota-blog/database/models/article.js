'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      thumbnail_path: DataTypes.STRING,
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      is_dist: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Article',
    }
  )
  return Article
}
