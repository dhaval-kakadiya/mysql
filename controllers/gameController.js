const db =require('../config/db');
const{ User, Game } = db

exports.addGame = async (req,res) => {
    try {

        const{ game_name, type , users } = req.body

        const newGame = {
           game_name,
           type
        }
    
        const game = await Game.create(newGame)

        if(Array.isArray(users)){
            await Promise.all(users.map( async userId => {

                const user = await User.findByPk(userId)

                if(user) {
                    await game.addUser(user)
                }

            }))
        }

        return res.status(200).json({
            success : true,
            message : 'Game Successfully Added',
            data : game
        })
    } catch (error) {
        return res.status(500).json({ 
            success :false,
            message : 'Game Not Added',
            error : error.message
        })
    }
}