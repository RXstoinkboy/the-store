import React from 'react';
import {ModalDiv, Shade, CloseModal} from './Modal.style';
import {Text} from './Display.style';
import PropTypes from 'prop-types';

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

Modal.propTypes = {
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired
}

export default Modal;