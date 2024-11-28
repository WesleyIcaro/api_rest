class FotoController {
  async store(req, res) {
    // file para arquivo único e files para arquivos múltiplos
    res.json(req.file);
  }
}

export default new FotoController();
