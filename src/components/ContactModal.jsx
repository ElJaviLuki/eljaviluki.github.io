// src/components/ContactModal/ContactModal.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub, FaTimes, FaPhone } from 'react-icons/fa';
import { portfolioData } from '../data.js';
import styles from './ContactModal.module.css';
import eventBus from '../utils/eventBus';

const ANIMATION_DURATION = 300; // ms, keep in sync with CSS

function ContactModal() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // State to manage closing animation
    const { socialLinks, handle } = portfolioData.personalInfo;
    const modalRef = useRef(null);

    const openModal = useCallback(() => {
        setIsModalOpen(true);
        setIsClosing(false); // Ensure closing state is reset
        document.body.classList.add('no-scroll');
    }, []);

    const closeModal = useCallback(() => {
        setIsClosing(true); // Trigger closing animation
        document.body.classList.remove('no-scroll'); // Remove scroll lock immediately

        setTimeout(() => {
            setIsModalOpen(false);
            setIsClosing(false); // Reset closing state
        }, ANIMATION_DURATION);
    }, []);

    useEffect(() => {
        const handleOpenModalEvent = () => {
            openModal();
        };
        eventBus.on('openContactModalEvent', handleOpenModalEvent);
        return () => {
            eventBus.remove('openContactModalEvent', handleOpenModalEvent);
        };
    }, [openModal]);

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && isModalOpen && !isClosing) { // Prevent closing if already closing
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isModalOpen, isClosing, closeModal]);


    useEffect(() => {
        if (isModalOpen && !isClosing) { // Only trap focus if fully open
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
                document.removeEventListener('keydown', trapFocus);
            };
        }
    }, [isModalOpen, isClosing]);


    const socialIconMap = {
        LinkedIn: <FaLinkedin />,
        GitHub: <FaGithub />,
        Email: <FaEnvelope />,
        Phone: <FaPhone />,
    };

    if (!isModalOpen && !isClosing) { // Don't render if not open and not in the process of closing
        return null;
    }

    const contactModalUI = (
        <div
            className={`${styles.modalOverlay} ${isClosing ? styles.closing : ''}`}
            onClick={closeModal}
            role="presentation"
        >
            <div
                ref={modalRef}
                className={`${styles.modalContent} ${isClosing ? styles.closing : ''}`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
            >
                <button
                    className={styles.closeButton}
                    onClick={closeModal}
                    aria-label={t('contactBubble.close')}
                    disabled={isClosing} // Disable button during closing animation
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
                        {socialLinks.map(link => {
                            const platformName = t(link.labelKey);
                            let value = '';

                            switch (link.platform) {
                                case 'LinkedIn':
                                case 'GitHub':
                                    value = `@${handle}`;
                                    break;
                                case 'Email':
                                    value = link.url.replace('mailto:', '');
                                    break;
                                case 'Phone':
                                    value = link.url.replace('tel:', '');
                                    break;
                                default:
                                    value = link.url;
                            }

                            return (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target={(link.platform === 'Email' || link.platform === 'Phone') ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    className={styles.modalLinkItem}
                                >
                                    <span className={styles.modalIcon} aria-hidden="true">{socialIconMap[link.platform]}</span>
                                    <span className={styles.modalLabel}>
                                        <strong>{platformName}:</strong> {value}
                                    </span>
                                    {(link.platform !== 'Email' && link.platform !== 'Phone') && <span className={styles.externalArrow} aria-hidden="true">{t('externalLinkArrow')}</span>}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

    if (typeof window !== 'undefined' && document.body) {
        return ReactDOM.createPortal(contactModalUI, document.body);
    }
    return null;
}

export default ContactModal;