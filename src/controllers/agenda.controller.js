import { pool } from "../db.js"

export const getAgenda = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM contacts");
        res.json(rows);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
}

export const createAgenda = async (req, res) => {
    const {
      identification_number,
      first_name,
      second_name,
      first_lastname,
      second_lastname,
      phone_numbers,
      email_addresses,
    } = req.body;
  
    // Realiza validaciones de tipo de datos
    if (
      typeof identification_number !== 'number' || 
      typeof first_name !== 'string' || 
      (second_name && typeof second_name !== 'string') || 
      typeof first_lastname !== 'string' || 
      typeof second_lastname !== 'string' || 
      !Array.isArray(phone_numbers) || 
      !Array.isArray(email_addresses)
    ) {
      return res.status(400).json({ message: 'Los datos proporcionados no cumplen con los tipos de datos requeridos.' });
    }
  
    // Si todas las validaciones pasan, ejecuta la consulta SQL
    const [rows] = await pool.query(
      'INSERT INTO contacts (identification_number, first_name, second_name, first_lastname, second_lastname, phone_numbers, email_addresses) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [identification_number, first_name, second_name, first_lastname, second_lastname, JSON.stringify(phone_numbers), JSON.stringify(email_addresses)]
    );
  
    res.send({
      id: rows.insertId,
      identification_number,
      first_name,
      second_name,
      first_lastname,
      second_lastname,
      phone_numbers,
      email_addresses,
    });
  };

export const getAgenda1 = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("SELECT * FROM contacts WHERE id = ?", [
          id,
        ]);
    
        if (rows.length <= 0) {
          return res.status(404).json({ message: "Contacts not found" });
        }
    
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
}

export const updateAgenda = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        identification_number,
        first_name,
        second_name,
        first_lastname,
        second_lastname,
        phone_numbers,
        email_addresses,
      } = req.body;
  
      const updateData = {
        identification_number,
        first_name,
        second_name,
        first_lastname,
        second_lastname,
        phone_numbers: JSON.stringify(phone_numbers),
        email_addresses: JSON.stringify(email_addresses),
      };
  
      const [result] = await pool.query(
        'UPDATE contacts SET ? WHERE id = ?',
        [updateData, id]
      );
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Contact not found" });
      }
  
      const [rows] = await pool.query("SELECT * FROM contacts WHERE id = ?", [id]);
  
      res.json(rows[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };


export const deleteAgenda = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("DELETE FROM contacts WHERE id = ?", [id]);
  
      if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: "Contacts not found" });
      }
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };