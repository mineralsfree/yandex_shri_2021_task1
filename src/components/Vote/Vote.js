import React from 'react'

import {cn} from "@bem-react/classname";
import {Title} from "../common /Title/Title";
import {Profile} from "../common /Profile/Profile";
import './Vote.scss'

const VoteCN = cn('vote')
export const Vote = props => {
  const {data: {emoji, selectedUserId, users, title, subtitle, offset = 0}} = props
  const userList = users.map(el => {
     delete el.valueText
    el.id === selectedUserId && (el.emoji = '👍')
    return <div key={el.id} data-action="update" data-params={JSON.stringify({alias: 'leaders', data: {selectedUserId: el.id}})}
                className={VoteCN('profile-container', {selected: el.id === selectedUserId})}>
      <Profile user={el}/>
    </div>
  }).slice(offset, offset + 8)
  return (<div className={VoteCN('container')}>
    <Title text={title} subtitle={subtitle}/>
    <div className={VoteCN('user-container-wrapper')}>
      <div className={VoteCN('user-container')}>
        {userList}
        <div className={VoteCN('button', {up: true, active: offset - 2 >= 0})}
             data-action="update"
             data-params={JSON.stringify({alias: 'vote', data: {offset: Math.max(offset - 2, 0)}})}/>
        <div className={VoteCN('button', {down: true, active: users.length - offset >= 6})}
             data-action="update"
             data-params={JSON.stringify({alias: 'vote', data: {offset: Math.min(offset + 2, users.length-6)}})}/>
      </div>
    </div>

  </div>)
}