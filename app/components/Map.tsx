import React from 'react';

interface MapProps {
    width?: string;
    height?: string;
    className?: string;
}

const Map: React.FC<MapProps> = ({
    width = '100%',
    height = '500px',
    className = '',
}) => {
    return (
        <div
            className={`map-container ${className}`}
            style={{
                width,
                height,
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                borderRadius: '4px',
            }}
        >
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d105163.73262069648!2d-111.95616222439888!3d41.1741247716703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1750519591908!5m2!1sen!2sus" width={width} height={height}></iframe>
        </div>
    );
};

export default Map;