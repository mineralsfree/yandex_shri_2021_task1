import React from 'react'
import './Profile.scss'
import {cn} from "@bem-react/classname";
import {importAll} from '../../../helpers/imageImport'



const ProfileCN = cn('profile')

const images = importAll();

export const Profile = props => {
  const {name = '', avatar, id, valueText, emoji,} = props.user;
  return (<div className={ProfileCN('container', )}>
    <div className={ProfileCN('emoji')}>{emoji}</div>
    <img src={(images[avatar]).default} className={ProfileCN('image', )} alt={'avatar'}/>
    <div className={ProfileCN('name')}>{name}</div>
    <div className={ProfileCN('bottom_text', {colored: props.titleColored})}>{valueText}</div>
  </div>)
}