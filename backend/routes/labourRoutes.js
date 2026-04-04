router.post("/add", async (req, res) => {
  const data = new Labour(req.body)
  await data.save()
  res.json({ message: "Labour request saved" })
})

app.use("/labour", labourRoutes)