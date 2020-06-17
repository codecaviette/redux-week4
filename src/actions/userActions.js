import { ADD_USER, DELETE_USER, FETCH_USERS } from "./actionTypes";
import axios from "axios";

const url = "https://reqres.in/api/users/";

export function fetchUsers() {
  return function (dispatch) {
    const getData = async () => {
      try {
        let res = await axios.get(url);
        dispatch({
          type: FETCH_USERS,
          payload: res.data.data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  };
}

export function deleteUser(userId) {
  return function (dispatch) {
    const sendDelete = async () => {
      try {
        await axios.delete(`${url}${userId}`);
        dispatch({
          type: DELETE_USER,
          payload: userId,
        });
      } catch (error) {}
    };

    sendDelete();
  };
}

export function addUser(userData) {
  return function (dispatch) {
    const postData = async () => {
      try {
        let res = await axios.post(url, userData);
        console.log(res);
        dispatch({
          type: ADD_USER,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    postData();
  };
}

// func a

// func b

// func c
