import React from "react"
import './Guild.css';
import GuildMemberList from "../guild-member-list/Guild-Member-List"

function Guild(props) {
    return (
        <div>
            <h2 className="GuildName">Guild Name: {props.Guild["guild-name"]}</h2>
            <h2 className="GuildLeader">Guild Leader: {props.Guild["guild-leader"]}</h2>
            <GuildMemberList GuildMembers={props.Guild["guild-members"]}></GuildMemberList>
        </div>
    );
}

export default Guild