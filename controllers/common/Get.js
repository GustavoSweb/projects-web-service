class Get {
  constructor(model) {
    this.model = model;
  }
  async All(req, res) {
    try {
      const data = await this.model.search.findAll();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      if (err.status) res.status(err.status).json({ err: err.message });
      res.sendStatus(500);
    }
  }
}

module.exports = Get;
