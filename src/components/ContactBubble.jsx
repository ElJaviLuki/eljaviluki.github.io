// src/components/ContactBubble/ContactBubble.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import {FaEnvelope, FaLinkedin, FaGithub, FaTimes, FaPhone} from 'react-icons/fa'; // Removed FaPhoneAlt
import { portfolioData } from '../data.js';
import styles from './ContactBubble.module.css';
import eventBus from '../utils/eventBus';

function ContactBubble() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { socialLinks } = portfolioData.personalInfo;
    const bubbleRef = useRef(null);
    const modalRef = useRef(null);

    const openModal = useCallback(() => {
        setIsModalOpen(true);
        document.body.classList.add('no-scroll');
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        document.body.classList.remove('no-scroll');
        if (bubbleRef.current) {
            bubbleRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscKey);

            const focusableElements = modalRef.current?.querySelectorAll(
                'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
            );
            const firstElement = focusableElements?.[0];
            const lastElement = focusableElements?.[focusableElements.length - 1];

            firstElement?.focus();

            const trapFocus = (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement?.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement?.focus();
                            e.preventDefault();
                        }
                    }
                }
            };
            document.addEventListener('keydown', trapFocus);
            return () => {
                document.removeEventListener('keydown', handleEscKey);
                document.removeEventListener('keydown', trapFocus);
                document.body.classList.remove('no-scroll');
            };
        }
        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.classList.remove('no-scroll');
        }
    }, [isModalOpen, closeModal]);

    useEffect(() => {
        const handleOpenModalEvent = () => {
            openModal();
        };
        eventBus.on('openContactModalEvent', handleOpenModalEvent);
        return () => {
            eventBus.remove('openContactModalEvent', handleOpenModalEvent);
        };
    }, [openModal]);


    const socialIconMap = {
        LinkedIn: <FaLinkedin />,
        GitHub: <FaGithub />,
        Email: <FaEnvelope />,
        Phone: <FaPhone />,
    };

    const contactBubbleUI = (
        <>
            <button
                ref={bubbleRef}
                className={styles.contactBubble}
                onClick={openModal}
                aria-label={t('contactBubble.open')}
                aria-haspopup="dialog"
                aria-expanded={isModalOpen}
            >
                <FaEnvelope />
            </button>

            {isModalOpen && (
                <div
                    className={styles.modalOverlay}
                    onClick={closeModal}
                    role="presentation"
                >
                    <div
                        ref={modalRef}
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-modal-title"
                    >
                        <button
                            className={styles.closeButton}
                            onClick={closeModal}
                            aria-label={t('contactBubble.close')}
                        >
                            <FaTimes />
                        </button>
                        <h2 id="contact-modal-title" className={styles.modalTitle}>
                            {t('contactBubble.title')}
                        </h2>
                        <div className={styles.modalMainArea}>
                            <div className={styles.qrCodeContainer}>
                                <img
                                    src="/qr-vcard.svg"
                                    alt={t('contactBubble.qrAlt', 'Scan for vCard')}
                                    className={styles.qrCodeImage}
                                />
                            </div>
                            <div className={styles.modalLinksContainer}>
                                {socialLinks.map(link => (
                                    <a
                                        key={link.platform}
                                        href={link.url}
                                        target={(link.platform === 'Email' || link.platform === 'Phone') ? '_self' : '_blank'}
                                        rel="noopener noreferrer"
                                        className={styles.modalLinkItem}
                                    >
                                        <span className={styles.modalIcon} aria-hidden="true">{socialIconMap[link.platform]}</span>
                                        <span className={styles.modalLabel}>{t(link.labelKey)}</span>
                                        {(link.platform !== 'Email' && link.platform !== 'Phone') && <span className={styles.externalArrow} aria-hidden="true">{t('externalLinkArrow')}</span>}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

    if (typeof window !== 'undefined' && document.body) {
        return ReactDOM.createPortal(contactBubbleUI, document.body);
    }
    return null;
}

export default ContactBubble;