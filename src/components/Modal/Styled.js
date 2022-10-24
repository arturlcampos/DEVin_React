import styled from 'styled-components'
import { MdClose } from "react-icons/md"

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: ${props => props.showModal ? '85vh' : '0vh'};
`

export const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(49, 149, 95, 0.9);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

export const ModalImg = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 10px 0 0 10px;
  background: white;
  object-fit: contain;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding-right: 8px;

  p {
    font-size: 13px;
    padding: 0px;
    margin: 0px;
  }
`

export const CloseModalButton = styled(MdClose)`
  cursor: poointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`