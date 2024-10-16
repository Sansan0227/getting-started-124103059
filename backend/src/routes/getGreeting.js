const GREETING = '';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
