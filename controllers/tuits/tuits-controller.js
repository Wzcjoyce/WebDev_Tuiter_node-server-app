import * as tuitsDao from "./tuits-dao.js";


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}



const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users
        .find(u => u._id === userId);
    res.json(user);
}

const createTuit =  async  (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 10;
    newTuit.replies = 20;
    newTuit.retuits = 30;
    newTuit.avatar = 'nasa.jpeg';
    newTuit.userName = "Tesla";
    newTuit.handle = "@tesla";
    newTuit.time = "1h";
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete  = req.params.uid;
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    res.sendStatus(status);
}


const updateTuit  = async  (req, res) => {
    const tuitdIdToUpdate  = req.params.uid;
    const updates = req.body;

    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    res.json(status);
}


