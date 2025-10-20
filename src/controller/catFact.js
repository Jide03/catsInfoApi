//     const axios = require('axios')
//     const catFact = async (req, res) => {
//     const userData = {
//         email: "Jideadetiba@gmail.com",
//         name : "Babajide Adetiba",
//         stack : "Backend NodeJS",
//     }

//     try { 
//         const catFactResponseFromAxios  = await axios({
//             method: 'get',
//             url: 'https://catfact.ninja/fact',
//             headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         })
//         const data = catFactResponseFromAxios.data;

//         console.log("see", getCatFact)
  
//         if(getCatFact.status === "ok"){
//             res.status.json({
//                 status: 'failed',
//             })
//             // throw new Error("Something went wrong")
//         }

//         const catfacts = {
//             email: user.email,
//             name: user.name,
//             stack: user.stack
//         }

//         res.json({
//             status: "success",
//             user: userData,
//             timeStamp: new Date().toISOString(),
//             fact: data.catFact
//         })
//     } catch (error) {
//         console.log("error", error.response)
//         res.status(500).json({error: 'FAiled to fetch cat fact'    })
//     }
// }   
// module.exports = catFact
const axios = require('axios');

const catFact = async (req, res) => {
  const userData = {
    email: "jideadetiba@gmail.com",
    name: "Babajide Adetiba",
    stack: "backend developer (Node.js)"
  };

  try {
    const catFactResponseFromAxios = await axios({
      method: 'get',
      url: 'https://catfact.ninja/fact',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = catFactResponseFromAxios.data;

    console.log("Cat Fact Response:", data);

    res.json({ 
      status: 'success',
      user: userData,
      timeStamp: new Date().toISOString(),
      fact: data.fact 
    });

  } catch (error) {
    console.error("Error fetching cat-fact:", error.message);
    res.status(500).json({ error: 'Failed to fetch cat fact' });
  }
};

module.exports = catFact;