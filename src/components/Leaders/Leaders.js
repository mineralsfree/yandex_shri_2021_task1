import React from 'react'
import {Title} from "../common /Title/Title";
import {Profile} from "../common /Profile/Profile";
import {sortProfiles} from "./SortHelper";
import "./Leaders.scss"
import {Bar} from "../common /Bar/Bar";
import {cn} from '@bem-react/classname'

const LeadersCN = cn('leaderboard')

export const Leaders = props => {
  const {data} = props;
  let voted;
  let users = [...data.users];
  users = users.splice(0, 5);
  if (data.selectedUserId && users[0].id !== data.selectedUserId) {
    if (!users.find(a => a.id === data.selectedUserId)) {
      users[4] = data.users.find(a => a.id === data.selectedUserId);
      users[4].emoji = '👍';
      users[4].position = data.users.findIndex(a => a.id === data.selectedUserId) + 1;
      voted = users[4];
    } else {
      let user = users.find(a => a.id === data.selectedUserId);
      if (data.users.findIndex(a => a.id === data.selectedUserId) > 2) {
        voted = user
      }
      user.emoji = '👍';
    }
    users[0].emoji = data.emoji;
  } else {
    users[0].emoji = data.emoji
  }
  users.forEach((el, i) => {
    el.position = el.position ? el.position : i + 1
  })
  users = sortProfiles(users);
  return (<div className={LeadersCN('main-container')}>
        <Title text={data.title} subtitle={data.subtitle}/>
      <div className={LeadersCN('container',)}>
        {users.map((el, i) => {
          return (<div key={el.id} className={LeadersCN('item_container', {[el.position > 5 ? 5 : el.position]: true})}>
              <div className={LeadersCN('profile')}>
                <Profile user={el}/>
              </div>
              <Bar number={el.position}
                   color={el.position === 1 ? 'yellow' : 'grey'}
              />
            </div>
          )
        })}
        <div className={LeadersCN('voted')}>
          {voted &&
          <div className={LeadersCN('voted')}>
            <Profile user={voted} titleColored/>
            <div className={LeadersCN('voted-line')}/>
            <div className={LeadersCN('voted-number')}>{voted.position}</div>
          </div>}
        </div>

      </div>
    </div>
  )
}