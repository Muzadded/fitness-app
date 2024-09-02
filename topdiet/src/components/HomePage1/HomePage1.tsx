import React from 'react'
import { CircularProgress } from '@mui/joy'
import { AiOutlineEye } from 'react-icons/ai'
import './HomePage1.css'

const HomePage1 = () => {
  
  const [data, setData] = React.useState<any>(null)
  
  const getData = async()=>{
    let temp = [
      {
        "name": "Calories Intake",
        "value": 2000,
        "unit": "kcal",
        "goal": 2500,
        "goalUnit": "kcal"
      },
      {
        "name": "Sleep",
        "value": 8,
        "unit": "hrs",
        "goal": 8,
        "goalUnit": "hrs"
      },
      {
        "name": "Steps",
        "value": 50,
        "unit": "steps",
        "goal": 10000,
        "goalUnit": "steps"
      },
      {
        "name": "Water",
        "value": 2000,
        "unit": "ml",
        "goal": 3000,
        "goalUnit": "ml"
      },
      {
        "name": "Weight",
        "value": 75,
        "unit": "kg",
        "goal": 70,
        "goalUnit": "kg"
      },
      {
        "name": "Workout",
        "value": 2,
        "unit": "days",
        "goal": 6,
        "goalUnit": "days"
      }
    ]
    setData(temp)
    console.log(temp)
  }
  React.useEffect(() => {
    getData()
  }, [])

  return (
    <div className='meters'>
      {
        data?.length>0 && data.map((item: any, index: number)=>{
          <div className="card" key={index}>
            <div className="card-header">
              <div className="card-header-box">
                <div className="card-header-box-name">{item.name}</div>
                <div className="card-header-box-value">{item.value}{item.unit}</div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default HomePage1
