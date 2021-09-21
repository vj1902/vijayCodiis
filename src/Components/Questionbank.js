import React from 'react';
import Popup from "../Components/Popup";
import PopupClg from '../Components/PopupClg'
import Config_popup from '../Components/config'
import Data from '../json/Data.json';
import { useState } from "react";
import Table from './Table';

function Questionbank() {
  const [openModal, setopenModal] = useState(false);
  const [openConfig, setopenConfig] = useState(false);
  function toggleModal() {
    setopenModal(!openModal);
  }
  function toggleConfig() {
    var l = 1;
    setopenConfig(!openConfig);
  }

  return (
    <div>
      <header>
        <div class="container">
          <div class="header_logo">
            <img src="images/dici_logo.png" />
          </div>
          <div class="header_menu"></div>
        </div>
      </header>
      <div class="header_amber">
        <ul>
          <li><i class="fa fa-home" aria-hidden="true"></i></li>
          <li><i class="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li>Assessments</li>
          <li><i class="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li>Question Bank</li>
        </ul>
      </div>
      <div class="table_outer">
        <h3><i class="fa fa-archive" aria-hidden="true"></i> Question Banks</h3>
        <div class="table_search_field">
          <div class="search_input">
            <input type="text" name="" placeholder="Search" />
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
          <div class="button_place">


            <div class="question_bank_btn" onClick={toggleModal}><i class="fa fa-plus" aria-hidden="true"></i> Create Question Bank</div>
          </div>
        </div>
        <div class="main_table">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            {/* <tr>
              <th>SI.No</th>
              <th>Question Bank</th>
              <th>Description</th>
              <th>Created On</th>
              <th>Status</th>
              <th>Add Questions</th>
            </tr> */}

            {Data.map(value => {
              // return (
              //   // <tr>
              //   //   <td key={value}>{value.index}</td>
              //   //   <td>{value.questionbank}</td>
              //   //   <td>{value.description}</td>
              //   //   <td>{value.created}</td>
              //   //   <td>{value.status}</td>
              //   //   <td>
              //   //     <div class="button_place1">
              //   //       {/* <button class="file_btn">Excel<input type="file" name="" class="file" placeholder="fff" /></button> */}
              //   //       <button class="file_btn" onClick={toggleConfig} >Config</button>
              //   //     </div></td>
              //   // </tr>


              // )
            })}


          </table>
            <Table/>
        </div>
      </div>
      <div class="footer">
        <h6>© 2016 - 2021 © Copyright Codiis. All Rights Reserved. CONNECTED DIGITAL SYSTEMS PRIVATE LIMITED</h6>
      </div>

      {/* if(service.login=="faculty"){} */}
      {openModal && (<PopupClg closeModal={setopenModal} />)}
      {/* {openModal && (<Popup closeModal={setopenModal}/>)} */}
      {openConfig && (<Config_popup closeModal={setopenConfig} />)}


    </div>
  )
}

export default Questionbank
