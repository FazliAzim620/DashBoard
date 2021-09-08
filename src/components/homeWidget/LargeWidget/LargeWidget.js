import React from 'react'
import './LargeWidget.css'
const LargeWidget=()=> {
  const Button =({type})=>{
   
  return <button   className={"largeWidgetButton " + type} >{type}</button>
  }
    return (
        <>
      <div className='largeWidget'>
        <h3 className='largeWidgetTitle'>Latest transiction</h3>
        <table className="largewidetTable">
        <tr className="largewidgetTr">
          <th className="largewidgetTh">Customer</th>
          <th className="largewidgetTh">Date</th>
          <th className="largewidgetTh">Amount</th>
          <th className="largewidgetTh">Status</th>
        </tr>
        <tr className="largewidgetTr">
          <td className="largewidgetUser">
            <img className='largeWidgetImg' src="https://images.unsplash.com/photo-1525450754258-0f4cbd02718d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXR0aXR1ZGUlMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
          <span className='largeWidgetName'>Sehrish</span>
          </td>
          <td className="largewidgetDate">28 08 2021</td>
          <td className="largewidgetAmount">$ 9403.00</td>
          <td className="largewidgetStatus"><Button type='Approved'/> </td>
        </tr>
        <tr className="largewidgetTr">
          <td className="largewidgetUser">
            <img className='largeWidgetImg' src="https://wallpapercave.com/wp/wp7147316.jpg" alt="" />
          <span className='largeWidgetName'>Najees</span>
          </td>
          <td className="largewidgetDate">02 09 2021</td>
          <td className="largewidgetAmount">$ 7603.00</td>
          <td className="largewidgetStatus"><Button type='Pendding'/> </td>
        </tr>  <tr className="largewidgetTr">
          <td className="largewidgetUser">
            <img className='largeWidgetImg' src="https://image.shutterstock.com/image-photo/face-beautiful-fun-cheerful-smiling-260nw-227642539.jpg" alt="" />
          <span className='largeWidgetName'>Jammes</span>
          </td>
          <td className="largewidgetDate">020 08 2021</td>
          <td className="largewidgetAmount">$ 87903.00</td>
          <td className="largewidgetStatus"><Button type='Declined'/> </td>
        </tr>
     
     
     
     
     
     
     
     
        </table>
      </div>
            
        </>
    )
}

export default LargeWidget;
