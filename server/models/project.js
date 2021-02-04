module.exports = (sequelize, { STRING, TEXT, INTEGER }) => {
  const Project = sequelize.define('Project', {
    title: STRING,
    imageUrl: STRING,
    description: TEXT,
    userId: INTEGER
  }, {});

  Project.associate = function (models) {
    // associations can be defined here
    Project.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Project;
};

