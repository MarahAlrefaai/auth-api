'use strict'

const Img = (sequelize,DataTypes)=> sequelize.define('images', {
  imgurl: {
      type: DataTypes.STRING,
      allowNull: false
  },
  imginfo: {
      type: DataTypes.STRING,
      allowNull: false
  }
})

module.exports = Img;