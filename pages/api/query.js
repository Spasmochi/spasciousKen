import middleware from "../../middleware/database";
import nextConnect from "next-connect";
import { ObjectID } from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const { date } = req.query;

  const dataModel = {
    _id: new ObjectID(),
    "Company Name": "Company_Name",
    Location: "Location",
    date: "Datum",
  };
  1;
  let doc = {};

  if (date) {
    doc = await req.db
      .collection("collection_space")
      .findOne({ date: new Date(date) });
  } else {
    doc = await req.db.collection("collection_space").findOne();
  }

  if (doc == null) {
    doc = dataModel;
  }
  res.json(doc);
});

export default handler;

// "_id": "5f4f43c16f063bbfd91949ed",
// "Company Name": "SpaceX",
// "Location": "LC-39A, Kennedy Space Center, Florida, USA",
// "Datum": "Fri Aug 07, 2020 05:12 UTC",
// "Detail": "Falcon 9 Block 5 | Starlink V1 L9 & BlackSky",
// "Status Rocket": "StatusActive",
// " Rocket": "50.0 ",
// "Status Mission": "Success"
