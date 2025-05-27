// src/components/ContactBubble/ContactBubble.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaLinkedin, FaGithub, FaTimes } from 'react-icons/fa';
import { portfolioData } from '../data.js'
import styles from './ContactBubble.module.css';

function ContactBubble() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { socialLinks } = portfolioData.personalInfo;
    const bubbleRef = useRef(null);
    const modalRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('no-scroll');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('no-scroll');
        bubbleRef.current?.focus(); // Return focus to the bubble
    };

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscKey);

            // Focus trap logic
            const focusableElements = modalRef.current?.querySelectorAll(
                'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
            );
            const firstElement = focusableElements?.[0];
            const lastElement = focusableElements?.[focusableElements.length - 1];

            firstElement?.focus();

            const trapFocus = (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) { // Shift + Tab
                        if (document.activeElement === firstElement) {
                            lastElement?.focus();
                            e.preventDefault();
                        }
                    } else { // Tab
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
                document.body.classList.remove('no-scroll'); // Ensure scroll is restored
            };
        }
        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.classList.remove('no-scroll'); // Ensure scroll is restored
        }
    }, [isModalOpen]);


    const socialIconMap = {
        LinkedIn: <FaLinkedin />,
        GitHub: <FaGithub />,
        Email: <FaEnvelope />,
    };

    return (
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
                    role="presentation" // Makes the overlay click-through for accessibility if needed, but here it closes.
                >
                    <div
                        ref={modalRef}
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
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
                        <div className={styles.modalLinks}>
                            {socialLinks.map(link => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target={link.platform === 'Email' ? '_self' : '_blank'}
                                    rel="noopener noreferrer" // Good practice for target="_blank"
                                    className={styles.modalLinkItem}
                                    // aria-label={t(link.labelKey)} // Labelled by text content
                                >
                                    <span className={styles.modalIcon} aria-hidden="true">{socialIconMap[link.platform]}</span>
                                    <span className={styles.modalLabel}>{t(link.labelKey)}</span>
                                    {link.platform !== 'Email' && <span className={styles.externalArrow} aria-hidden="true">{t('externalLinkArrow')}</span>}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactBubble;
