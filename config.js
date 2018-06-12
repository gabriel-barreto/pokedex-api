const mode = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;
const config = {
    port,
    mode,
};

module.exports = config;