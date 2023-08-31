"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

    return (
        <div>
    
        <div>
            <Videos/>
            
        </div>
        </div>
    )
}

export default Feed