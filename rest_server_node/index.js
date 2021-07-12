const express = require("express");
const app = express();
const PORT = 8000;
var cors = require("cors");
const multer = require("multer");
// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
	res.set({
		"Cache-Control": "no-cache",
	});
	next();
});

app.use(
	cors({
		origin: "http://localhost:8000",
		credentials: true,
		methods: ["GET", "POST"],
		preflightContinue: true,
	})
);
/**
 * @multer configure/ filter upload file types
 *
 *
 *
 */
const upload = multer({
	dest: "img",
	limits: {
		fileSize: 2000000,
	},
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/\.(jpg|png|PNG|gif)$/)) {
			return cb(
				new Error('Please upload a file with "png, jpg, or gif  extensions"')
			);
		}
		cb(undefined, true);
	},
});
/**
 * @route configure
 * @get route for user { Object}
 * @post route for upload file
 */
// exe 1
app.get("/user", (req, res) => {
	const user = { name: "Sayeed", age: 30, url: req.headers.host };
	res.json({ user });
});

app.post(
	"/upload",
	upload.single("avatar"),
	(req, res) => {
		res.send("photo uploaded successfully");
	},
	(err, req, res, next) => {
		res.status(400).send({ error: err.message });
	}
);
app.post("/date", (req, res, next) => {
	const date = new Date();
	const day = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	console.log(req.body);
	res.json({ day, time, username: req.body.username });
});
app.listen(8000, () => {
	console.log(`app running on port ${PORT}`);
});
