import { Link } from 'react-router-dom';
import Button from '../../components/ui/button';
import { useState } from 'react';
import './style.css';
import Card from '../../components/ui/card';

const Profile = () => {
    const [measures, setMeasures] = useState([
        { id: 1, title: "Quilos", content: 92, icon: "bx-dna" },
        { id: 2, title: "Centímetros", content: 190, icon: "bx-move-vertical" },
        { id: 3, title: "Sangue", content: "O+", icon: "bx-dna" },
        { id: 4, title: "Anos", content: 24, icon: "bx-calendar" },
    ]);
    return (
        <div className="container">
            <div className="wrapper">
                <div className="profile">
                    <div className="profile-header">
                        <div className='profile-info'>
                            <div className="profile-img">
                                <img src="
                        https://plus.unsplash.com/premium_vector-1727126404837-fdf90a26e8aa?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
                        " alt="Profile user pic" />
                                <Link to="/" id="change-profile-pic">
                                    <i className="bx bxs-edit"></i>
                                </Link>
                            </div>
                            <div className="profile-data">
                                <p>
                                    Cristian Alves Silva
                                </p>
                                <span>contato@cran.com</span>
                            </div>
                        </div>
                        <Button
                            id="edit-profile"
                            variant="primary-btn"
                            content="Editar perfil" />
                    </div>
                    <div className="profile-content">
                        <div className="profile-measures">
                            {measures.map((f, index) => (
                                <Card key={index} content={f.content} title={f.title} icon={f.icon} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;