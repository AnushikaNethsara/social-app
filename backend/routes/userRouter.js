const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    let { email, password, password_check, first_name, last_name } = req.body;

    // validate

    if (!email || !password || !password_check || !first_name || !last_name)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== password_check)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });


    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      first_name,
      last_name
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        first_name: user.first_name,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//**** update account details ****//
router.put("/:id", async (req, res) => {
  try {
    await User.findById(req.params.id).then((user) => {
      user.about = req.body.about;
      user.category = req.body.category;
      user.youtube = req.body.youtube;
      user.insta = req.body.insta;
      user.tiktok = req.body.tiktok;
      user
        .save()
        .then(() => res.status(200).json({ msg: "Account Updated!" }))
        .catch((err) => res.status(400).json({ error: err.message }));
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    id: user._id,
    email: user.email
  });
});

//** get all lessons to display**//
router.get("/all-users", async (req, res) => {
  try {
    await User.find()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.status(400).json("Error : " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});


//**recommend**//
router.get("/recommend/:id", async (req, res) => {
  try {
    var getUser = await User.findById(req.params.id)
      .catch((err) => res.status(400).json("Error : " + err));

    var categoryArray = getUser.category;
    console.log("f: " + categoryArray)

    await User.find({ 'category': { $in: categoryArray } })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => res.status(400).json("Error : " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

module.exports = router;