const jwt = require("jsonwebtoken");

const authChecker = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Missing authorization" });
    }

    const tokenParts = token.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      return res
        .status(401)
        .json({ message: "Invalid authorization token format" });
    }

    const onlyToken = tokenParts[1];
    jwt.verify(onlyToken, process.env.JWT_SECRET_KEY, async (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid Token" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(401).json({ message: "Invalid authorization token" });
  }
};

module.exports = { authChecker };
