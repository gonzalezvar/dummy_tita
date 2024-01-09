import React, { useEffect } from 'react';
import './Home.css';
import { useState } from 'react';
import { getListPost } from '../../store/apiSlice/thunks';
import Card from '../organisms/card/Card';
import { NavBar } from '../organisms/navBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { asingTestTags } from '../../store/apiSlice/apiSlice';
import { SideBar } from '../organisms/sideBar/SideBar';



export const Template = () => {

  const dispatch = useDispatch();
  const { post: dataCard, status } = useSelector(state => state.api)
  const [open, setOpen] = useState(false)
  const [openUserModal, setOpenUserModal] = useState(false)

  const testCardData = {
    "id": "60d21b4667d0d8992e610c85",
    "image": "https://b1638264.smushcdn.com/1638264/wp-content/uploads/2021/07/test.jpg?lossy=0&strip=1&webp=1",
    "likes": 0,
    "tags": [
        "tag1",
        "tag2",
        "tag3"
    ],
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia exercitationem",
    "publishDate": "2020-05-24T14:53:17.598Z",
    "owner": {
        "id": "60d0fe4f5311236168a109ca",
        "title": "ms",
        "firstName": "Jane Doe",
        "lastName": "",
        "picture": "https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
    }
  }

  useEffect(() => {
    dispatch(asingTestTags(["testtag1","testtag2","testtag3"]))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <SideBar />
      { new Array(20).fill("a").map((x,index)=>{
        return(
          <Card key={testCardData.id+index} setOpen={setOpen} setOpenUserModal={setOpenUserModal} data={testCardData} />
        )
      })
      }
    </div>
  );
}


