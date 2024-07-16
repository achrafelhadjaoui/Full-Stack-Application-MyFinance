// Exemple de middleware d'authentification avec JWT
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors');

const authenticateUser = (req, res, next) => {
  // Récupérer le token d'en-tête Authorization
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: new UnauthorizedError('Unauthorized').message });
  }

  // Vérifier et décoder le token
  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: new UnauthorizedError('Unauthorized').message });
    }
    req.user = decoded.user; // Ajouter l'utilisateur décodé à l'objet de demande
    next(); // Autoriser la poursuite du traitement de la demande
  });
};

module.exports = { authenticateUser };
