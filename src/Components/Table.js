import React, { useState } from 'react'
import Data from '../json/Data.json';
import Config_popup from './config';
function Table() {
  const [openConfig, setopenConfig] = useState(false);
  function toggleConfig() {
    setopenConfig(!openConfig);
  }

  return (
    <div>
      <div class="main_table">
        <table class="miniTab1" cellspacing="0" cellpadding="0" border="0" width="100%">
          {Data.map(value => {
            return (
              <tr >

                {/* <td key={value}>{value.index}
                </td> */}
              
                  <td class="minTd" >
                  <table class="minTab" width="100%">
                    <tr>
                   <td><tr><td><b>{value.questionbank}</b></td>
                   <td><p>({value.index})</p></td></tr></td>
                   
                    
                    </tr>
                    </table>
                    <table class="minTab"  text-align="left" >
                    <tr><td><td>{value.subject}</td> 
                   <td>|</td>
                      <td >{value.Topic}</td>
                      <td>|</td>
                      <td >{value.SubTopic}</td>
                    {/* <table id="minTab1" >

                    </table> */}
                     </td> <td width="10%"><strong>{value.faculty}</strong>|{value.created}</td></tr>
                      </table>
                      
                  </td>
                
                <td  width="10%" >
                <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>

                </td>
                <td>
                  <div class="button_place1" width="10%">

                    <button class="file_btn" onClick={toggleConfig} >Add Questions</button>
                  </div></td>
              </tr>


            )
          })}

        </table>

      </div>
      {openConfig && (<Config_popup closeModal={setopenConfig} />)}
    </div>
  )
}

export default Table
