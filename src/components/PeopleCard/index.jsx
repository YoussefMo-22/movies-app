import React from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '../../Constant/imgPath'
import personImg from '../../Assets/profileImg.jpg'

export default function PeopleCard({ person }) {
  return (
    <div className="col-md-2">
      <Link to={`/person/${person.id}`}>
        <div className="w-100">
          <img className="w-100 h-100" src={person?.profile_path?imgPath(person.profile_path):personImg} alt="person" />
          <h4 className="text-truncate text-black" data-toggle="tooltip" data-placement="bottom" title={person.name ? person.name : person.original_name}>{person.name ? person.name : person.original_name}</h4>
        </div>
      </Link>
    </div>
  )
}
