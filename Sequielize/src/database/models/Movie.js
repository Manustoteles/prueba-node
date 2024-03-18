
/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
    const alias = 'Movie';
    
    const cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER
        },
        awards: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATE
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        length: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    
    const config = {
        timestamps:false,
        tableName: 'movies'
    }

    const Movie = sequelize.define(alias, cols, config)

    return Movie;
}