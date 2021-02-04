module.exports = (sequelize, { STRING }) => {
    const User = sequelize.define('User', {
        firstName: STRING,
        lastName: STRING,
        email: STRING,
        password: STRING
    }, {});

    User.associate = ({ Project }) => {
        // associations can be defined here
        User.hasMany(Project, {
            foreignKey: 'userId'
        })
    };
    return User;
};