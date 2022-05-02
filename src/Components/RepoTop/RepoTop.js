import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { searchData } from '../../store/features/github/githubSlice'

const RepoTop = () => {
  const [find, setFind] = useState('')

  const dispatch = useDispatch()
  const res = useSelector((state) => state.github)
  const fil = res.filteredData.repos

  const filterArray = (e) => {
    setFind(e.target.value)

    const filteredData = fil.filter((value) => {
      const searchStr = e.target.value.toLowerCase()
      const name = value.name.toLowerCase().includes(searchStr)
      return name
    })

    let data = {
      hasError: false,
      profile: res.data.profile,
      repos: filteredData,
    }

    dispatch(searchData(data))
  }
  return (
    <div className='repo-top'>
      <div className='repo-input'>
        <input
          type='text'
          placeholder='Find a repository...'
          value={find}
          onChange={(e) => filterArray(e)}
        />
      </div>

      <div className='repo-select'>
        <button>
          Type <KeyboardArrowDownIcon style={{ fontSize: '14px' }} />
        </button>

        <button>
          Language <KeyboardArrowDownIcon style={{ fontSize: '14px' }} />
        </button>

        <button>
          Sort <KeyboardArrowDownIcon style={{ fontSize: '14px' }} />
        </button>
      </div>
    </div>
  )
}

export default RepoTop
