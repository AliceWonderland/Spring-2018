'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('portfolio',
  {
      portDate:{
          type: Sequelize.DATE,
          allowNull: false
      },
      portTitle:{
          type: Sequelize.STRING,
          allowNull: false
      },
      portSub:{
          type: Sequelize.STRING,
          allowNull: true
      },
      portDesc:{
          type: Sequelize.STRING,
          allowNull: false
      },
      portImg:{
          type: Sequelize.STRING,
          allowNull: false
      },
      portPub:{
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
      },
      portLink:{
          type: Sequelize.STRING,
          allowNull: false
      },
      portLinkText:{
          type: Sequelize.STRING,
          allowNull: false
      },
      portEmployer:{
          type: Sequelize.STRING,
          allowNull: false
      },
      portEmployerCity:{
          type: Sequelize.STRING,
          allowNull: false
      },
      portYear:{
          type: Sequelize.STRING,
          allowNull: false
      },
      portKeywords:{
          type: Sequelize.STRING,
          allowNull: false
      }
  },
  {
      timestamps: false
  }
);
