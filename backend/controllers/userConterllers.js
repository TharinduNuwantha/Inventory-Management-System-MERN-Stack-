const registerUser = async (req, res) => {
  const { name, email, password } = req.body || {};

  if (!email) {
    return res.status(400).json({ message: "Please add an email" });
  }

  res.json({ message: "Register User", data: { name, email } });
};


module.exports = {
    registerUser,
};