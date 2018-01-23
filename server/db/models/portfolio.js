'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('portfolio',
  {
      portDate:{
          type: Sequelize.DATEONLY,
          allowNull: false,
          defaultValue: Sequelize.NOW
      },
      portTitle:{
          type: Sequelize.TEXT,
          allowNull: false
      },
      portSub:{
          type: Sequelize.TEXT,
          allowNull: true
      },
      portDesc:{
          type: Sequelize.TEXT,
          allowNull: false
      },
      portImg:{
          type: Sequelize.TEXT,
          allowNull: true
      },
      portPub:{
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
      },
      portLink:{
          type: Sequelize.TEXT,
          allowNull: true
      },
      portLinkText:{
          type: Sequelize.TEXT,
          allowNull: true
      },
      portEmployer:{
          type: Sequelize.TEXT,
          allowNull: true
      },
      portEmployerCity:{
          type: Sequelize.TEXT,
          allowNull: true
      },
      portYear:{
          type: Sequelize.TEXT,
          allowNull: false
      },
      portKeywords:{
          type: Sequelize.TEXT,
          allowNull: true
      }
  },
  {
      timestamps: false
  }
);
