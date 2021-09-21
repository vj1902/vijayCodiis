import React from 'react'
import { useState, useEffect } from 'react';
import { getOption } from './service';


function Popup({ closeModal }) {
  const [result, stdlist] = useState([]);

  const _optionsGet = async () => {
    let response;
    try {
      response = await getOption();
      stdlist(response.value);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => _optionsGet(), [])
  return (
    <div>
      <div class="popup_outer">

        <div class="popup_box">
          <span class="close" onClick={() => closeModal(false)}><i class="fa fa-times-circle" ></i></span>
          <h3><i class="fa fa-archive" aria-hidden="true"></i> Add Question Bank</h3>
          <form>
            <ul>
              <li><input type="text" name="name" placeholder="Question Bank Name" /></li>
              <li><input type="text" name="no" placeholder="Question Bank No" /></li>

              <li><select>
                <option>Standard</option>
                {
                  result.length > 0 && result.map(x => {
                    return (
                      <option>{x.topicname}</option>
                    )
                  })}
              </select>
                <select> <option>By Subject</option></select>
                <select> <option>Chapter</option></select>
              </li>
              <li>
                <select>
                  <option>Topic</option>
                </select>
                <select>
                  <option>Sub Topic</option>
                </select>
                <select>
                  <option>Faculty</option>
                </select>
              </li>
            </ul>
            <div class="button_place">
              <button onClick={() => closeModal(false)}>Close</button>
              <button class="save">Save</button>
            </div>
          </form>
        </div>
      </div>


    </div>
  )
}

export default Popup
