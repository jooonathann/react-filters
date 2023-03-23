// // add validation!!!!!
// const validateReq = function (req, res, next) {
//   const { name, lastname, age, favoritecolor, hobbie, country } = req.body;
//   console.log('req bodYYYYYY isss', req.body)
//   console.log(`  ${name}, ${lastname}, ${age}, ${favoritecolor}, ${hobbie}, ${country}`)
//   if (!name || !lastname || !age || !favoritecolor || !hobbie || !country)
//     return res.status(401).send({
//       error: true,
//       msg: "Invalid!, make sure to complete the Name, lastname, age, favoritecolor,hobbie and country fields",
//     });

//   next();
// };

// const characterRoutes = (app, fs) => {
//   const dataPath = "./api/mock-data/madeUpData.json";

//   // READ


//   app.get("/characters", (req, res) => {
//     fs.readFile(dataPath, "utf-8", (err, data) => {
//       if (err) throw err;

//       let parsedData = JSON.parse(data);
//       res.send(parsedData);
//     });
//   });
//   // GET by id


//   app.get("/characters/:id", (req, res) => {
//     fs.readFile(dataPath, "utf-8", (err, data) => {
//       if (err) throw err;
//       parsedData = JSON.parse(data);

//       const characterId = parseInt(req.params["id"]);
//       let filtered = parsedData.filter((ele) => ele.id === characterId);
//       res.send(filtered);
//     });
//   });
//   // POST


//   app.post("/characters", validateReq, (req, res) => {
//     const {
//       basicProfilePictures,
//     } = require("../../server/api/mock-data/mockData");
//     const { name, lastname, age, favoritecolor, country, hobbie, id, image } = req.body;
//     console.log(
//       `name:  ${name}, lastname:  ${lastname}, age: ${age}, favoritecolor:  ${favoritecolor}, country: ${country}, hobbie: ${hobbie}`
//     );
//     // let newid = Date.now();
//     // let basicProfilePicturesIndex = Math.round(
//     //   Math.random() * (basicProfilePictures.length - 1)
//     // );
//     let obj = {
//       // id: newid,
//       id: id,
//       name,
//       lastname,
//       age,
//       favoritecolor,
//       country,
//       hobbie,
//       image: image,
//     };

//     fs.readFile(dataPath, "utf-8", (err, data) => {
//       if (err) throw err;
//       let parsedData = JSON.parse(data);
//       parsedData.push(obj);

//       fs.writeFile(dataPath, JSON.stringify(parsedData), (err) => {
//         if (err) throw err;
//         res.status(200).send(`new person made up with name ${name} with id ${id}`);
//       });

//     });
//   });

//   // UPODATE by id


//   app.put("/characters/:id", validateReq, (req, res) => {
//     console.log('BODY TO UPDAte', req.body)
//     const { name, lastname, age, favoritecolor, country, hobbie,image } = req.body;
//     const characterId = req.params.id;

//     let obj = {
//       id: parseInt(characterId),
//       name,
//       lastname,
//       age: parseInt(age),
//       favoritecolor,
//       country,
//       hobbie,
//       image
//     };

//     fs.readFile(dataPath, "utf-8", (err, data) => {
//       if (err) throw err;
//       let parsedData = JSON.parse(data);
//       let toUpdateIndex = parsedData.findIndex(
//         (ele) => ele.id === parseInt(characterId)
//       );

//       parsedData[toUpdateIndex] = obj;

//       fs.writeFile(dataPath, JSON.stringify(parsedData, null, 2), (err) => {
//         if (err) throw err;

//         res.status(200).send(`character Id:${characterId} updated`);
//       });
//     });
//   });

//   app.delete("/characters/:id", (req, res) => {
//     console.log("INSIDE OF MADEUPEPOPLE DELETE REQ", req);
//     const characterId = req.params.id;

//     fs.readFile(dataPath, "utf-8", (err, data) => {
//       if (err) throw err;
//       let parsedData = JSON.parse(data);
//       let fileteredData = parsedData.filter(
//         (x) => x.id !== parseInt(characterId)
//       );

//       //delete parsedData[characterId];

//       fs.writeFile(dataPath, JSON.stringify(fileteredData, null, 2), (err) => {
//         if (err) throw err;
        
//         res.status(200), res.send(`character id:${characterId} removed`);
//       });
//     });
//   });
// };

// module.exports = characterRoutes;
