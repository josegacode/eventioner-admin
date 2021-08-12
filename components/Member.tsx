import Router from "next/router";

const Member = (props: any) => {
  return(
    <div>
      <ul>
				{props.members.map((member: any) => (
					<li 
						key={member.userID}
					className="list-group-item 
								d-flex 
								justify-content-between 
								align-items-center
								list-group-item-action">
						<h5>
							{member.displayName}
						</h5>
						<span className="badge badge-info">Member role</span>
					</li>
				))}
      </ul>
    </div>
  )
};

export default Member;
