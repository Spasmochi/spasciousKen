import middleware from "../../middleware/database";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc = await req.db.collection("collection_space").findOne();
  console.log(doc);
  res.json(doc);
});

export default handler;
