console.log("Web Serverni boshlanishi");
const express = require("express");
const app = express();
const http = require("http");

// 1 ->Expressga kirib kelayotgan ma'lumotga bog'liq kodlar
app.use(express.static("public")); //clientlarga public folderni ochiq qilib beradi. CSS shuni ichiga joylashadi
app.use(express.json()); // kirib kelayotgan json formatdagi datani objectga o'zgartirib beradi
app.use(express.urlencoded({ extended: true })); //HTMLdan traditional request formdan nimadir post qilsak express qabul qilib serverga kiritadi

// 2 -> Sessionga bog'liq ma'lumotlar yoziladi
// 3 -> Express uchun BSSR (Backendda view (Frontend) yasaymiz)
app.set("views", "views"); // agar folder nomini o'zgartirsak, 2-dagi "views"ni o'sha nomga o'zgartirishimiz kerak bo'ladi
app.set("view engine", "ejs"); //EJS - Backendda HTML frontendni yasaymiz

// 4 -> Routing kodlari
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/", function (req, res) {
  res.render("xarid");
});

// app.get("/", function (req, res) {
//   res.end(`<h1 style="background:red"> HELLO WORLD by hussein!</h1>`);
// });

// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="background:blue"> Siz bo'limning birinchi qismidasiz</h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1 style="background:green"> Siz sovg'alar bo'limidasiz</h1>`); // /hello; /gift - shu kabi bir nechta addresslarni shakllantira olaman
// });

const server = http.createServer(app); // createServer - bu method bitta parameterni - app - qabul qiladi.
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
