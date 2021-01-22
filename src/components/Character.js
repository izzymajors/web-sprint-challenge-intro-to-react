// Write your Character component here
import {BASE_URL} from './constant'
import styled, { keyframes } from "styled-components";
import React, {Component, useEffect, useState } from "react";
import axios from 'axios'




export default function Character({ bold, info, action }) {
    return (
     <div>
        {info.name}
        <button onClick={() => action(info.id)}>See details</button>
        </div>
    );
  }