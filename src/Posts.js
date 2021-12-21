import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts}  from './action';
import './App.css';

function Posts(props) {
    const dispatch = useDispatch();

    const value = useSelector((state)=>{
        
        return state;
    })

    useEffect(() =>{
        dispatch(fetchPosts());
    },[dispatch])

    let count = 0;
    let value1=0;
    let count1 =0 ;
    let value2 = 0;
    let totGoals = 0;


    const renderPosts = () => {
        
        if(value.loading){
            return <h1>Loading...</h1>
        }

        return value.items.map(el =>{
            { 
                if(el.home_team_country === 'USA')
                    count=count+1;
                else{
                    count = count
                }
              
            
            }
           {value1 = parseFloat((count/7).toFixed(2)*100)}
           
           {
            if(el.away_team_country === 'USA')
                count1=count1+1;
            else{
                count1 = count1
            }
           }
           
            {value2 = parseFloat((count1/7)*100).toFixed(2)}

            {totGoals = el.home_team.goals+totGoals}
           
        })
        
            }

    return (
        <div>
           {renderPosts()}    
           <h4></h4>  
           <table className="tableStyle">
             <thead>
               <tr className='tableStyle'>
                 <th className="dataTable" >No. of games played at home </th>
                 <th className="dataTable" scope="col">Percentage win at home </th>
                 <th className="dataTable" scope="col">No. of games played away </th>
                 <th className="dataTable" scope="col">Percentage win away </th>
                 <th className="dataTable" scope="col">Total number of goals </th>
               </tr>
             </thead>
             <tbody>
              
                     <tr>
                         
                         <td className="dataTable">{count}</td>
                         <td className="dataTable">{value1}%</td>
                         <td className="dataTable">{count1}</td>
                         <td className="dataTable" >{value2}%</td>
                         <td className="dataTable" >{totGoals}</td>
                     </tr>
                
             </tbody>
           </table>
                 
        </div>
    );
}

export default Posts;