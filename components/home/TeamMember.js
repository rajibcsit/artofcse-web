import TeamMemberCard from "@/components/cards/TeamMemberCard";

function TeamMember() {
  return (
    <div>
      <>
        <div className="section-padding">
          <div className="container">
            <div className="text-center">
              <div className="mini-title">Team Member</div>
              <div className="column-title">
                Our Expert
                <span className="shape-bg">Instructors</span>
              </div>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
              {/*===============Start Coding for team meber card===============*/}
              <TeamMemberCard type={"postTeamMember"} />
              <TeamMemberCard type={"postTeamMember"} />
              <TeamMemberCard type={"postTeamMember"} />
              <TeamMemberCard type={"postTeamMember"} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default TeamMember;
