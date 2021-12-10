const config = process.env;

const verifyApikey = (req, res, next) => {
  const apikey = req.headers["x-access-apikey"];

  if (apikey != config.API_KEY) {
    return res.send(
      JSON.stringify({ code: 403, message: "Invalid Api key !" })
    );
  }

  return next();
};

module.exports = verifyApikey;
