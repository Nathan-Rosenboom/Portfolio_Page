module.exports = function(sequelize, DataTypes) {
    let Contact = sequelize.define("Contact", {
      // The email cannot be null, and must be a proper email before creation
      name: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      phone: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              isNumeric: true,
              len: [8, 10]
          }
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    return Contact;
  };