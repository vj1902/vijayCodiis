import React, { useState } from 'react'
import Data from '../json/Data.json';
import Data1 from '../json/Data1.json';
import './popup.css'
function Config_popup({ closeModal }) {

    const [total, setTotal] = useState();
    const [total1, setTotal1] = useState();

    //    const [difference,setDiffer] = useState();

    // function onNote(index,e){
    //     const l = total1* total;
    //     setDiffer(l)
    //    console.log("difference",difference)
    // }




    function onHandle(index, e) {
        setTotal(e)
        console.log("eee", total)
    }
    // function onHandle1(index,e){
    //     setTotal1({[index]:e})
    //      console.log("eee1",total1)
    //  }
    function onHandle1(index, e) {
        setTotal1(e)
        console.log("eee1", total1)
    }
    // const 
    // const totalPrice =(
    //     () => {
    //        const sum=0;

    //       }


    //   );

    //   setTotal(totalPrice);
    return (
        <div>

            <div class="popup_outer">

                <div class="popup_box pop">
                    <span class="close" onClick={() => closeModal(false)}><i class="fa fa-times-circle" ></i></span>
                    {/* {Data.map(value => {
                        return <h4 key={value.index}>Question Bank :{value.questionbank}</h4>
                    })
                    } */}

                    <div className="main_table">
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>

                                <th>Status</th>
                                <th>Quest Bank Type</th>

                                <th>Mark</th>
                                <th>NoOfQuests</th>
                                <th>TotalMark</th>
                                <th>NegativeMark</th>

                            </tr>

                            {Data1.map(value => {
                                //console.log("index",value)
                                return (
                                    <tr>

                                        <td>
                                            <div className="checkbox">

                                                <input className="check" type={value.input} />
                                            </div>
                                        </td>
                                        <td>
                                            {value.qtype1}
                                        </td>
                                        <td>
                                            <input key={value.index} type="number" className="mark" onChange={(e) => { let a = e.target.value; onHandle1(value.index, a); console.log(value.index) }} />
                                        </td>
                                        <td>
                                            <input key={value.index} className="mark" onChange={(e) => { let b = e.target.value; onHandle(value.index, b); console.log(value.index) }} type="number" />

                                        </td>
                                        <td >
                                            <input value={total * total1} className="mark" type="number" />
                                        </td>
                                        <td>
                                            <input className="mark" type="number" />
                                        </td>


                                    </tr>
                                )
                            })
                            }


                        </table>
                        <div class Name="total">
                            <input type="text" class="total_input" placeholder="TOTAL" />
                        </div>
                        <div class="button_place">
                            <button onClick={() => closeModal(false)}>Close</button>
                            <button class="save">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Config_popup