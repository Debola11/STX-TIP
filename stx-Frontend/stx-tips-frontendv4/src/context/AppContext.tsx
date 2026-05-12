import React, { createContext, useContext, useState } from 'react';

interface AppContextType
{
  currentPage: string;
  setCurrentPage: (value: string) => 