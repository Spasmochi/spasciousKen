import Head from "next/head";
import fetch from "isomorphic-unfetch";
import query from "./api/query";
import mission from "../components/mission";

const Home = ({ data }) => {
  const [Missions, SetMissions] = useState(data);

  const oncChange = (e) => {};
};

const getMission = async () => {
  const res = 
}


export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/query");
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}

export default Home;
