// src/context/GlobalState.js
import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  user: null,
  resources: [],
  forumPosts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_RESOURCES':
      return { ...state, resources: action.payload };
    case 'SET_FORUM_POSTS':
      return { ...state, forumPosts: action.payload };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchResources = async () => {
    const response = await axios.get('/api/resources');
    dispatch({ type: 'SET_RESOURCES', payload: response.data });
  };

  const fetchForumPosts = async () => {
    const response = await axios.get('/api/forum');
    dispatch({ type: 'SET_FORUM_POSTS', payload: response.data });
  };

  return (
    <GlobalContext.Provider value={{ state, fetchResources, fetchForumPosts }}>
      {children}
    </GlobalContext.Provider>
  );
};
