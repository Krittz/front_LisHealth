import './style.css';
import Button from '../../ui/button';
import { useEffect, useState } from 'react';
const Notification = ({ type, content, title, autoClose = 5000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);
    const iconMap = {
        success: <i className="bx bx-check-circle"></i>,
        warning: <i className="bx bx-error"></i>,
        error: <i className="bx bx-x-circle"></i>,
        info: <i className="bx bx-error-circle"></i>,
    };

    useEffect(() => {
        if (autoClose) {
            const timer = setTimeout(() => {
                handleClose();
            }, autoClose);
            return () => clearTimeout(timer);
        }
    }, [autoClose]);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    if (!isVisible) return null;


    return (
        <div className="notification">
            <div className={`notification-box ${type}`}>
                <i className="bx bx-x-circle" id="close-notification"
                    onClick={handleClose}
                ></i>
                <div className="notification-header">
                    {iconMap[type] || null}
                    <span>
                        {title}
                    </span>
                </div>
                <div className="notification-content">
                    <p>{content}</p>
                </div>
                <div className="notification-footer">
                    <Button
                        variant="primary-btn"
                        content="Ok"
                        type="button"
                        id="notification-ok"
                        onClick={handleClose}
                    />

                </div>
            </div>
        </div>
    );
}


export default Notification;