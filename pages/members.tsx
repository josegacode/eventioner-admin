import Container from "../components/Container";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Member from "../components/Member";
import {Context} from "react";

const Members = (props: any) => (
	<Container>
		<Head>
			<title>Legion Hack | Miembros</title>
		</Head>
    <div>
      <h1 className="font-weight-bold mb-4 text-center">
				Legion Hack | Miembros
			</h1>

			<div className="input-group mb-4">
				<input 
					className="d-inline-block form-control form-control-lg mr-4" 
					type="text" 
					placeholder="Buscar un miembro"
				/>
				<button 
					className="btn btn-lg btn-outline-info d-inline-block"
				>
					Buscar	
				</button>
			</div>

			<Member members={props.members} />
    </div>
	</Container>
);

export async function getServerSideProps(context: Context<any>) {
	const res = await fetch("http://localhost:5000/api/members");
  const members = await res.json();
	console.log(JSON.stringify(members, null, 4));

  if (!members) {
    return {
      notFound: true,
    }
  }

  return {
		props: {
			members	
		} 
  }
}

export default Members;
