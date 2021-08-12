import Container from "../components/Container";
import fetch from "isomorphic-unfetch";

import Head from "next/head";

import Member from "../components/Member";
import {Context} from "react";

const Index = (props: any) => (
  <Container>
    <Head>
      <title>Next - Home Page</title>
    </Head>
    <div>
      <h1 className="mb-4 text-center">Legion Hack | Usuarios de Discord</h1>
			<Member members={props.members} />
    </div>
  </Container>
);

Index.getInitialProps = async (ctx: Context<any>) => {
	const res = await fetch("http://localhost:5000/api/members");
  const resJSON = await res.json();
	console.log(JSON.stringify(resJSON, null, 4));
  return {
    members: resJSON,
  };
};

export default Index;

