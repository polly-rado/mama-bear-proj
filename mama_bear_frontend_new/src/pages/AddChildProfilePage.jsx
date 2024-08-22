import React, { useState } from 'react';
import { api } from '../apis/axios';
import { useNavigate } from 'react-router-dom';

function AddChildProfilePage() {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [allergies, setAllergies] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/children/', {
                name,
                birthday,
                blood_type: bloodType,
                allergies,
            });
            if (response.status === 201) {
                navigate('/child-profile');
            }
        } catch (error) {
            console.error('Error creating child profile:', error);
        }
    };

    return (
        <div>
            <h1>Create Child Profile</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Child's Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Blood Type"
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Allergies (or 'None')"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                />
                <button type="submit">Add Child</button>
            </form>
        </div>
    );
}

export default AddChildProfilePage;
