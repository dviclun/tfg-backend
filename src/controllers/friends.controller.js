// SELECT * FROM `tfg_users` WHERE user_id IN (SELECT CASE WHEN user_a_id = 1 THEN user_b_id ELSE user_a_id END FROM tfg_friends WHERE user_a_id = 1 OR user_b_id = 1)

import conexion from "../mysql_conector.js";

export const getAllFriends = async(req, res) => {
    try {
        
        const {user_id} = req.body;

        const [result] = await conexion.query("SELECT user_id, username, profile_image FROM `tfg_users` WHERE user_id IN (SELECT CASE WHEN user_a_id = ? THEN user_b_id ELSE user_a_id END FROM tfg_friends WHERE user_a_id = ? OR user_b_id = ?)",[user_id, user_id, user_id])

        res.status(200).json(result);

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}

export const getNonFriendsByUsername = async(req, res) => {
    try {

        const {username, user_id} = req.body;
        const formattedUsername = `%${username}%`;

        const [result] = await conexion.query("SELECT user_id, username, profile_image FROM tfg_users WHERE username LIKE ? AND user_id NOT IN (SELECT CASE WHEN user_a_id = ? THEN user_b_id ELSE user_a_id END FROM tfg_friends WHERE user_a_id = ? OR user_b_id = ?) AND user_id NOT LIKE ?", [formattedUsername, user_id, user_id, user_id, user_id]);

        res.status(200).json(result);


    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        }) 
    }
}