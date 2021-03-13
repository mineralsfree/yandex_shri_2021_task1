import React from 'react'

import {cn} from "@bem-react/classname";
import {Title} from "../common /Title/Title";
import {Profile} from "../common /Profile/Profile";
import './Vote.scss'

const VoteCN = cn('vote')
export const Vote = props => {
  const {data: {emoji, selectedUserId, users, title, subtitle}} = props
  const userList = users.map(el => {
    delete el.valueText;
    el.id ===selectedUserId && (el.emoji = '👍')
    return <div className={VoteCN('profile-container' ,{selected: el.id ===selectedUserId})}>
      <Profile user={el}/>
    </div>
  }).slice(0,8)
  console.log(props);
  console.log(props);
  return (<div className={VoteCN('container')}>
    <Title text={title} subtitle={subtitle}/>
    <div className={VoteCN('user-container-wrapper')}>
      <div className={VoteCN('user-container')}>
        {userList}
        <div className={VoteCN('button-up')}/>
        <div className={VoteCN('button-down')}/>
      </div>
    </div>

  </div>)
}