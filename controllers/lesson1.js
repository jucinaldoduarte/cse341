const rootRoute = (req, res) =>{
    res.send('Root');
};

const contactRoute = (req, res) =>{
    res.send('Contact');
};

const helpRoute = (req, res) =>{
    res.send('Help');
};

module.exports = {
    rootRoute,
    contactRoute,
    helpRoute
};