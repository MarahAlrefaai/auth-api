'use strict'
const jwt=require('jsonwebtoken');
const Secret=process.env.SECRET||"firstTestToken";


const user = (sequelize, DataTypes) => sequelize.define('user', {

  //name -->column 
   name: {
     
        type: DataTypes.STRING,
        allowNull: false

    },
    
  //password -->second culomn 
    password: {
      
        type: DataTypes.STRING,
        allowNull: false,
    },
    token:{
      type:DataTypes.VIRTUAL,//save it temporary
     // get() {return jwt.sign({ name: this.name }, SECRET);       }
    },
     
    role:{
      //DataTypes.ENUM to give specific input
      type: DataTypes.ENUM('admin', 'writer', 'editor', 'user'),
      defaultValue: 'user',
    },
    actions: {
      //VIRTUAL don't save inside the database
      type: DataTypes.VIRTUAL,
      get() {
          const acl = {
              user: ['read'],
              writer: ['read', 'create'],
              editor: ['read', 'create', 'update'],
              admin: ['read', 'create', 'update', 'delete'],
          }
          return acl[this.role];
      }
  }
   
})


module.exports = user;