import React from 'react'
import { useState, useEffect } from 'react';
import { getOption } from './service';
import ClgData from '../json/ClgData.json';
// import Data from '../json/Data.json'

function PopupClg({ closeModal }) {
  // const [result, stdlist] = useState([]);

  // const _optionsGet = async () => {
  //   let response;
  //   try {
  //     response = await getOption();
  //     stdlist(response.value);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => _optionsGet(), [])
  return (
    <div>
      <div class="popup_outer">

        <div class="popup_box" >
          <span class="close" onClick={() => closeModal(false)}><i class="fa fa-times-circle" ></i></span>
          <h2>Question Bank</h2>
          {/* <div>
          <input type="text" class="inputText" name="name" required />
                    <span>Question bank</span>
          </div> */}
          <form>
            <table class="tableList">
              <ul>
                <tr>

                  <li>
                    {/* <input type="text" class="inputText1" placeholder="Question Bank Name" required/>
                    <span class="floating-label">Your email address</span> */}
                    <input type="text" name="name" />
                    <span>Question Bank Name</span>
                  </li>

                </tr>
                {/* <tr>

                  <li><input type="text" name="name" />
                  <label class="ques">Question Bank Name</label> </li></tr> */}

                <tr >

                  <li>
                    <div class="trNum" >
                      <label id="year">Years</label>
                      <select>
                        <option ></option>
                        {
                          // result.length > 0 && result.map(x => {
                          ClgData.length > 0 && ClgData.map(x => {
                            return (
                              <option>{x.year}</option>
                            )
                          })}
                      </select></div>
                    <div class="trNum1" >
                      <label>Semester</label>
                      <select> <option></option>
                        {
                          ClgData.length > 0 && ClgData.map(x => {
                            return (
                              <option>{x.Semester}</option>
                            )
                          })}
                      </select></div></li>
                </tr>

                <tr>
                  <li>
                    <div class="sub">
                      <label >Subject</label>
                      <select> <option></option>
                        {
                          ClgData.length > 0 && ClgData.map(x => {
                            return (
                              <option>{x.Subject}</option>
                            )
                          })}</select>
                    </div>
                  </li></tr>
                {/* <div class="lists"> */}
                <tr>
                  <li><div class="topic">
                    <label>Topic</label>
                    <select>
                      <option></option>{
                        ClgData.length > 0 && ClgData.map(x => {
                          return (
                            <option>{x.Topic}</option>
                          )
                        })}
                    </select>
                  </div>
                  </li>
                </tr>
                <tr>
                  <li><div class="SubTopic">
                    <label>Sub Topic</label>
                    <select>
                      <option></option>{
                        ClgData.length > 0 && ClgData.map(x => {
                          return (
                            <option>{x.SubTopic}</option>
                          )
                        })}
                    </select></div></li></tr>
                <tr>
                  <li> <div class="faculty">
                    <label>Faculty</label>
                    <select>
                      <option></option>{
                        ClgData.length > 0 && ClgData.map(x => {
                          return (
                            <option>{x.Faculty}</option>
                          )
                        })}
                    </select></div>
                  </li></tr>
                {/* </div> */}
              </ul>
              <div class="button_place">
                <div class="buttonBottom">
                  <button onClick={() => closeModal(false)}>Close</button>
                </div>
                <div class="buttonBottom1">
                  <button class="save">Save</button>
                </div>
              </div>
            </table>
          </form>
        </div>
      </div>


    </div>
  )
}

export default PopupClg
