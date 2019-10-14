import React from "react"
import GuildMember from "../guild-member/Guild-Member"

function GuildMemberList(props) {
    return (
        <div>
            {props.GuildMembers.map(function(name) {
                return <GuildMember key={name} Name={name}></GuildMember>;
            })}
        </div>
    );
}

export default GuildMemberList