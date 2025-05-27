// src/components/ContactBubble/ContactBubble.jsx
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FaEnvelope } from 'react-icons/fa';
import styles from './ContactBubble.module.css';
import eventBus from '../utils/eventBus';
import {FaUser} from "react-icons/fa6";

function ContactBubble() {
    const { t } = useTranslation();
    const bubbleRef = useRef(null);

    const handleOpenModal = () => {
        eventBus.dispatch('openContactModalEvent');
    };

    const contactBubbleUI = (
        <button
            ref={bubbleRef}
            className={styles.contactBubble}
            onClick={handleOpenModal}
            aria-label={t('contactBubble.open')}
            aria-haspopup="dialog"
        >
            {/* Wrap the icon in a div to apply circular styling to the wrapper */}
            <div className={styles.bubbleIconWrapper}>
                <FaUser />
            </div>
        </button>
    );

    if (typeof window !== 'undefined' && document.body) {
        return ReactDOM.createPortal(contactBubbleUI, document.body);
    }
    return null;
}

export default ContactBubble;