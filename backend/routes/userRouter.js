const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");
const multer = require("multer");
const _ = require("lodash");
let nodemailer = require("nodemailer");


const myEmail = process.env.EMAIL;
const EmailPassword = process.env.PASSWORD;

//*** Email ***//
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: myEmail,
    pass: EmailPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, "file_" + "-" + Date.now() + '-' + fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});


router.post("/register", async (req, res) => {

  try {
    let { email, password, password_check, userName } = req.body;
    // validate

    if (!email || !password || !password_check || !userName)
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
      userName,
      socialName: "",
      about: "",
      category: [],
      language: [],
      youtube: "",
      insta: "",
      tiktok: "",
      twitter: "",
      profilePic: "",
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
        userName: user.userName,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//**** update account details ****//
router.put("/:id", upload.single('photo'), async (req, res) => {
  try {
    const url = req.protocol + '://' + req.get('host')
    var photoChanged = req.body.changed;

    if (req.body.changed === "yes") {
      await User.findById(req.params.id).then((user) => {
        user.userName = req.body.userName;
        user.socialName = req.body.socialName;
        user.language = req.body.language;
        user.about = req.body.about;
        user.category = req.body.category;
        user.youtube = req.body.youtube;
        user.insta = req.body.insta;
        user.tiktok = req.body.tiktok;
        user.twitter = req.body.twitter;
        user.photo = url + '/public/' + req.file.filename;
        user
          .save()
          .then(() => res.status(200).json({ msg: "Account Updated!" }))
          .catch((err) => res.status(400).json({ error: err.message }));

      });
    }
    if (req.body.changed === "no") {
      await User.findById(req.params.id).then((user) => {
        user.userName = req.body.userName;
        user.socialName = req.body.socialName;
        user.language = req.body.language;
        user.about = req.body.about;
        user.category = req.body.category;
        user.youtube = req.body.youtube;
        user.insta = req.body.insta;
        user.tiktok = req.body.tiktok;
        user.twitter = req.body.twitter;
        user
          .save()
          .then(() => res.status(200).json({ msg: "Account Updated!" }))
          .catch((err) => res.status(400).json({ error: err.message }));

      });
    }
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




//** get user data**//
router.get("/:id", async (req, res) => {
  try {
    await User.find({ _id: req.params.id })
      .then((detail) => {
        res.status(200).json(detail);
      })
      .catch((err) => res.status(400).json("Error : " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//** remove photo**//
router.delete("/remove-photo/:id", async (req, res) => {
  try {
    await User.findById(req.params.id).then((user) => {
      user.photo = undefined;
      user
        .save()
        .then(() => res.status(200).json({ msg: "Account Updated!" }))
        .catch((err) => res.status(400).json({ error: err.message }));

    });
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
    var languageArray = getUser.language;
    var resultArray = [];

    await User.find({ $or: [{ category: { $in: categoryArray } }, { language: { $in: languageArray } }] })
      .then((user) => {
        user.forEach((item, index) => {
          if (item._id != req.params.id) {
            resultArray.push(item)
          }
        })
        res.json(resultArray);
      })
      .catch((err) => res.status(400).json("Error : " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});


//forget password
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  console.log(email)
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ msg: "User with this email does not exists." });
    }

    const token = jwt.sign(
      { _id: user._id },
      process.env.RESET_PASSWORD_KEY,
      { expiresIn: "20m" }
    );
    const mailOptions = {
      from: myEmail,
      to: email,
      subject: "Password Reset Link",
      html: `
      <h2> Please click on the given link to reset your passsword</h2>
      <p>${process.env.CLIENT_URL}/new-password/${token}</p>`,
    };

    return user.updateOne({ resetLink: token }, function (err, success) {
      if (err) {
        return res.status(400).json({ error: "reset password link error" });
      } else {
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            res.status(400).send({ msg: "Mail Sent error:" + error.message });
          } else {
            res.status(200).json({ msg: "Please check you email" });
          }
        });
      }
    });
  });
});


//reset password

router.post("/reset-password", async (req, res) => {
  const { resetLink, newPassword } = req.body;

  if (newPassword.length < 5)
    return res
      .status(400)
      .json({ msg: "The password needs to be at least 5 characters long." });

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(newPassword, salt);

  if (resetLink) {
    jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY, function (error, decodeData) {
      if (error) {
        return res.status(401).json({
          error: "Incorrect token or it is expired"
        })
      }

      User.findOne({ resetLink }, (err, user) => {
        if (err || !user) {
          return res
            .status(400)
            .json({ error: "User with this email does not exists." });
        }

        const obj = {
          password: passwordHash,
          resetLink: "",
        };

        //update the database
        user = _.extend(user, obj);
        user.save((err, result) => {
          if (err) {
            return res.status(400).json({ error: "reset password link error" });
          } else {
            return res.status(200).json({ error: "Your password has been changed" });
          }

        })

      })
    })

  } else {
    return res
      .status(401)
      .json({ msg: "Authentication error!" });

  }

});

module.exports = router;

