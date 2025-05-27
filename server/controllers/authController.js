// controllers/authController.js
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { nombre, telefono, email, direccion, password } = req.body;

  if (!nombre || !telefono || !email || !direccion || !password) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
  }

  try {
    const [user] = await db.promise().query("SELECT * FROM usuarios WHERE email = ?", [email]);

    if (user.length > 0) {
      return res.status(409).json({ mensaje: "El correo ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.promise().query(
      "INSERT INTO usuarios (nombre, telefono, email, direccion, password) VALUES (?, ?, ?, ?, ?)",
      [nombre, telefono, email, direccion, hashedPassword]
    );


    res.status(201).json({ mensaje: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [user] = await db.promise().query("SELECT * FROM usuarios WHERE email = ?", [email]);

    if (user.length === 0) {
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      return res.status(401).json({ mensaje: "Credenciales incorrectas" });
    }

    const token = jwt.sign({ id: user[0].id, email: user[0].email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ mensaje: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
};
