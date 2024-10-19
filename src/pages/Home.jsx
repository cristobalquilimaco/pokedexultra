import { useRef, useState } from "react";
import { setTrainerName, setTrainerAvatar } from "../store/slices/trainerName.Slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import images from "../assets/images/images.js";
import "../pages/styles/home.css"

const Home = () => {
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const nameRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value.trim();
        
        if (!selectedAvatar) {
            alert("Por favor, selecciona un avatar antes de continuar.");
            return;
        }
        if (!name) {
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        dispatch(setTrainerName(name));
        dispatch(setTrainerAvatar(selectedAvatar));
        navigate("/pokedex");
    };

    return (
        <div className="home__page">
            <h1>POKEDEX</h1>
            <h2>Hi Trainer</h2>
            <h3>Press Star</h3>
            <form className="poke__form" onSubmit={handleSubmit}>
                <input className="name__input" ref={nameRef} type="text" placeholder="Enter your name" />
                <div className="avatar__section">
                    <h4>Select an Avatar:</h4>
                    {Object.entries(images).map(([key, src]) => (
                        <label key={key}>
                            <input
                                type="radio"
                                name="avatar"
                                value={key}
                                onChange={() => setSelectedAvatar(src)}
                            />
                            <img className="avatar" src={src} alt={key} style={{ width: 50, height: 50 }} />
                        </label>
                    ))}
                </div>
                <button className="login__button" type="submit">Catch them all!</button>
            </form>
        </div>
    );
};

export default Home;
