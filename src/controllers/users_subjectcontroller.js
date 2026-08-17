import Usermodel from '../models/users.js';
import subject from '../models/subject.js';

export const createUserSubject = async (req, res) => {
  try {
    const { User_id, subject_id } = req.body;

    if (!User_id || !subject_id) {
      return res.status(400).json({error:"debe tener un usuario y materia"});
    }
    const usuario = await Usermodel.findByPk(User_id);
    const materia = await subject.findByPk(subject_id);

    if (!usuario || !materia) {
        return res.status(404).json({error:"no se encontro el usuario o materia"})
    }
    await usuario.addSubject(materia);
    res.status(201).json({ 
      mensaje: "relación creada con éxito",
      usuarioId:User_id,
      materiaId:subject_id
    });

  } catch (error) {
    res.status(400).json({error:"no se pudo crear la relación", detalles: error.message});
  }
};


export const getAlluserSubject = async (req, res) => {
  try {
    const data = await Usermodel.findAll({
      attributes: ['id', 'name', 'email'], 
      include: {
        model: subject,
        as: 'subjects',
        attributes: ['id', 'name'], 
        through: { attributes: [] } 
      }
    });
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "error al obtener los registros"});
  }
};
