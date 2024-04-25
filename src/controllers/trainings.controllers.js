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