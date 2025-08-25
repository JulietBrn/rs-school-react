
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

export default function DataList() {

  const data = useSelector((state: RootState ) => state.form.formsData)

  return (
    <div>
      <h2>
        Submitted Form Data
      </h2>
      {data.length === 0 ? (
        <p>No data submitted</p>
      ) : (
        <ul>
          {data.map((form, index) => (
            <li key={index} className='flex gap-4'>
              <p><b>Name:</b> {form.name}</p>
              <p><b>Age:</b> {form.age}</p>
              <p><b>Email:</b> {form.email}</p>
              <p><b>Gender:</b> {form.gender}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
