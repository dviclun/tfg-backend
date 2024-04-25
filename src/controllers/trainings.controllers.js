import conexion from "../mysql_conector.js";

export const getMuscularGroups = async (req, res) => {
    try {
        const [result] = await conexion.query("SELECT * FROM tfg_muscular_groups ORDER BY priority");
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}

export const getArmsVideos = async (req, res) => {
    try {
        const [result] = await conexion.query("SELECT * FROM tfg_training_videos WHERE muscular_group IN (3, 6, 7, 8)");
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}

export const getLegsVideos = async (req, res) => {
    try {
        const [result] = await conexion.query("SELECT * FROM tfg_training_videos WHERE muscular_group IN (4, 9, 10, 11, 12)");
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}


export const getVideosByGroup = async (req, res) => {
    try {
        
        const { muscular_group } = req.params
        const [result] = await conexion.query("SELECT * FROM tfg_training_videos WHERE muscular_group = ?", [muscular_group]);

        res.status(200).json(result); //la  respuesta que devuelve el servidor

    } catch (error) {
        res.status(500).json({
            message: "Error en el servidor"
        })
    }

};