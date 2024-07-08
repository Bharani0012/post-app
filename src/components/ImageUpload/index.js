import React, { useState } from 'react';
import "./index.css";
const ImageUpload = ({ onImageUpload }) => {
    const [uploading, setUploading] = useState(false);

    const handleImageChange = async (e) => {
        const image = e.target.files[0];
        if (image) {
            setUploading(true);
            const formData = new FormData();
            formData.append('image', image);

            try {
                const response = await fetch(`https://api.imgbb.com/1/upload?key=0e50cf932346619b9e018d4349a44d8a`, {
                    method: 'POST',
                    body: formData,
                });
                const result = await response.json();
                if (result.success) {
                    onImageUpload(result.data.url);
                } else {
                    console.error('Error uploading image:', result);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            } finally {
                setUploading(false);
            }
        }
    };

    return (
        <div className="m-2 file-container">
            <input type="file" onChange={handleImageChange} required/>
            {uploading && <p>Uploading...</p>}
        </div>
    );
};

export default ImageUpload;
