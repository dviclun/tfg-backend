import conexion from "../mysql_conector.js";
import bcrypt from 'bcryptjs';
import fetch from 'node-fetch';

//Get one user with POST method by username and password
export const getUserForLogin = async (req, res) => {
    try {
        const { email, passw } = req.body;

        const [result] = await conexion.query("SELECT user_id, username, passw, fullname, email, biography, points, rol FROM tfg_users WHERE email = ?", [email]);
        console.log(result);
        //Comprobamos si la contraseña enviada y la recibida de la base de datos son iguales
        const equalPass = await bcrypt.compare(passw, result[0].passw);

        console.log(equalPass);

        //Si son iguales devolvemos el usuario como respuesta
        if(equalPass){
            res.status(200).json([{
                user_id: result[0].user_id,
                username: result[0].username,
                fullname: result[0].fullname,
                email: result[0].email,
                biography: result[0].biography,
                points: result[0].points,
                rol: result[0].rol
            }]);
        } else { //En caso contrario devolvemos un array vacio
            res.status(200).json([]);
        } 
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
};

//Get all the users
export const getUsers = async (req, res) => {
    try {
        const [result] = await conexion.query("SELECT user_id, username, fullname, email, biography, points, rol FROM tfg_users ORDER BY points DESC");
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
};

//Get 10 users for ranking
export const getUsersForRanking = async (req, res) => {
    try {
        const [result] = await conexion.query("SELECT user_id, username, fullname, email, biography, points, rol FROM tfg_users ORDER BY points DESC LIMIT 10");
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
};

//Get one user by ID
export const getUserByID = async (req, res) => {
    try {
        const { user_id } = req.body;

        const [result] = await conexion.query("SELECT user_id, username, fullname, email, biography, points, rol FROM tfg_users WHERE user_id = ?", [user_id]);
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }

};

//Get one user by Username
export const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.params;

        const [result] = await conexion.query("SELECT user_id, username, fullname, email, biography, points, rol FROM tfg_users WHERE username = ?", [username]);
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
};


//Get one user by Email
export const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;

        const [result] = await conexion.query("SELECT user_id, username, fullname, email, biography, points, rol FROM tfg_users WHERE email = ?", [email]);
        console.log(result);
        res.status(200).json(result);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
};

//Funcion para verificar el recaptcha

export const verifyCaptcha = async(req, res) => {
    try {
        const {token} = req.body;

        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=6Le3qtspAAAAAEq8ALjmR445XPAyYgievlXEK6Vn&response=${token}`, {
            method: 'POST'
        });

        const data = await response.json();

        if (data.success) {
            // Verificación exitosa
            res.json({ success: true });
          } else {
            // Verificación fallida
            res.status(400).json({ success: false, error: data['error-codes'] });
          }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }


}

//Funcion para registrar un usuario en la aplicación
export const registerUser = async (req, res) => {
    try {
        const { username, fullname, email, passw } = req.body;

        const [result] = await conexion.query("INSERT INTO tfg_users VALUES(NULL, ?,?,?,?,'',0,'member')", [username, passw, fullname, email]);

        console.log(result);

        res.status(201).json({ id: result.insertId });

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}

export const updateUserPoints = async (req, res) => {
    try {
        const { addPoints, user_id} = req.body;

        const [result] = await conexion.query("UPDATE tfg_users SET points = ? + (SELECT points FROM tfg_users WHERE user_id = ?) WHERE user_id = ? ", [addPoints, user_id, user_id]);

        if(result.affectedRows > 0){
            res.status(200).json({message: 'Points updated sucessfully'})
        } else {
            res.status(500).json({message: 'User ID not found'})
        }
    } catch(error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}

export const updateBiography = async (req, res) => {
    try {
        const {biography, user_id} = req.body;

        const [result] = await conexion.query("UPDATE tfg_users SET biography = ? WHERE user_id = ?", [biography, user_id]);

        if(result.affectedRows > 0){
            res.status(200).json({message: 'Biography updated sucessfully'})
        } else {
            res.status(500).json({message: 'User ID not found'})
        }
        
    } catch(error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error en el servidor"
        })
    }
}



// export const getCursos = async (req, res) => {
//     try {
//         const [result] = await conexion.query("SELECT * FROM cursos");
//         console.log(result);
//         res.status(200).json(result);
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({
//             message: "Error en el servidor"
//         })
//     }

// };

// export const getModulos = async (req, res) => {
//     try {
//         console.log(req.params);
//         const { id } = req.params
//         const [result] = await conexion.query("SELECT * FROM modulos WHERE idCurso=?", [id]);

//         res.status(200).json(result); //la  respuesta que devuelve el servidor

//     } catch (error) {
//         res.status(500).json({
//             message: "Error en el servidor"
//         })
//     }

// };
// export const getAlumnos = async (req, res) => {
//     try {
//         console.log(req.params);
//         const { id } = req.params
//         const [result] = await conexion.query("SELECT * FROM alumnos WHERE idCurso=? order by apellidosNombre", [id]);

//         res.status(200).json(result); //la  respuesta que devuelve el servidor

//     } catch (error) {
//         res.status(500).json({
//             message: "Error en el servidor"
//         })
//     }

// };

// export const grabarNotas = async (req, res) => {
//     try {
//         console.log(req.body);
//         const { idCurso, idModulo, idAlumno, calificacion } = req.body;

//         const [result] = await conexion.query("INSERT INTO calificaciones VALUES(NULL,?,?,?,?)", [idCurso, idModulo, idAlumno, calificacion]);
//         console.log(result);

//         res.status(201).json({ id: result.insertId });
//     } catch (error) {
//         res.status(500).json({
//             message: "Error en el servidor"
//         })
//     }
// }
