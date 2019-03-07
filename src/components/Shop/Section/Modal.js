import React from 'react';
import {ModalDiv, Shade, CloseModal} from './Modal.style';
import {Text} from './Display.style';

const Modal =props=> {
    return (
        <Shade>
            <ModalDiv>
                <Text style={{marginBottom: '1rem'}}>{props.name}</Text>                
                {props.description}
                <CloseModal
                    onClick={props.openModal}
                >
                    Close
                </CloseModal>
            </ModalDiv>
        </Shade>
    );
};

export default Modal;