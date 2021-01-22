import {BASE_URL} from './constant'
import React, {Component, useEffect, useState } from "react";
import axios from 'axios'


export default function Details(props) {
    const { friendId, close } = props
    const [details, setDetails] = useState(null)

}