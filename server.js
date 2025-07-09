const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router("db.json");

// `users` üçün auth qaydaları
const rules = auth.rewriter({
  users: 600,
  wishlist: 660, // istifadəçi yalnız öz wishlistini görə və dəyişə bilər
});

app.db = router.db;

app.use(cors());
app.use(jsonServer.bodyParser);
app.use(rules);
app.use(auth);
app.use(router);

app.listen(3001, () => {
  console.log("JSON Server + Auth running on http://localhost:3001");
});
