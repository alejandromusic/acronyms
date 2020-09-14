const fs = require("fs");


fs.readFile("./a.csv", "utf8", (err, data) => {
  const objs = data.trim().split("\n").map( (e,i) => {
    const r = e.split(",");
    if (r[1] !== undefined)
      return { name: r[0], description: r[1] };
  });

  fs.writeFileSync("./a.json", JSON.stringify(objs));
});
