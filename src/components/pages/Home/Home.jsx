import React, { useEffect } from 'react';
import '../../template/Home.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListPost, getListTags } from '../../../store/apiSlice/thunks';
import { NavBar } from '../../organisms/navBar/NavBar';
import { Loader } from '../../atoms/loader/Loader';
import Card from '../../organisms/card/Card';
import Modal from '../../organisms/modal/Modal';
import {ModalUser} from '../../organisms/modalUser/ModalUser';
import { useNavigate } from 'react-router-dom';
import { SideBar } from '../../organisms/sideBar/SideBar';




export const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post: dataCard, status } = useSelector(state => state.api)
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false)


  useEffect(() => {
    dispatch(getListPost())
    dispatch(getListTags())
  }, [])

  return (
    <div className="App">
       <NavBar />
       <SideBar />
      {
        status === "loading" ?
          <Loader /> :
          <>
            {dataCard?.length > 0 ? dataCard.map((item, index) => {
              return (
                <Card key={item.id} setOpen={setOpen} setOpenUserModal={setOpenUserModal} data={item} />
              )
            })
            : <p>
                No hay publicaciones
              </p>
            }
            <ModalUser isOpen={openUserModal} onClose={setOpenUserModal} />
            <Modal isOpen={open} onClose={setOpen} />
          </>
      } 
    </div>
  );
}


