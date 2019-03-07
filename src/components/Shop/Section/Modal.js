import React from 'react';
import {ModalDiv, Shade, CloseModal} from './Modal.style';

const Modal =props=> {
    return (
        <Shade>
            <ModalDiv>
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