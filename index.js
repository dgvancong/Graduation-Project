const express = require("express");
const projectRouter = require("./routes/project");
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

// Sử dụng middleware morgan để ghi lại các yêu cầu HTTP
app.use(morgan('dev'));
app.use(cors());
app.use(cookieParser());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Sử dụng router cho các đường dẫn bắt đầu bằng /project
app.use('/project', projectRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
