"use client"
import React, { useState, useEffect } from 'react';
import Posts from '@/components/(admin)/posts/Posts';


const PostPage = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const fetchedData = await res.json();
        setDatas(fetchedData);
      } catch (error) {
        // Handle errors here if needed
        console.error(error);
      }
    };

    getData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (

    <div>
      <Posts datas={datas} />
    </div>

  );
};

export default PostPage;
