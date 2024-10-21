import { useRef, useState } from "react";
import { setTrainerName, setTrainerAvatar } from "../store/slices/trainerName.Slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import images from "../assets/images/images.js";
import "../pages/styles/home.css";

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
        <section className="home__container">
                    <div className="home__page">
            <h1>POKEDEX</h1>
            <h2>Hi Trainer</h2>
            <h3>Press Star</h3>
            <div className="login__section">
            <form className="poke__form_login" onSubmit={handleSubmit}>
                <div>
                <input className="name__input" ref={nameRef} type="text" placeholder="Enter your name" />
                </div>
               
                <div className="avatar__section">
                    <h4>Select an Avatar:</h4>
                    {Object.entries(images).map(([key, src]) => (
                        <label className={`label__avatar ${selectedAvatar === src ? 'active' : ''}`} key={key}>
                            <input className="input__avatar"
                                type="radio"
                                name="avatar"
                                value={key}
                                onChange={() => setSelectedAvatar(src)}
                                style={{ display: 'none' }} // Oculta el input
                            />
                            <img className="avatar" src={src} alt={key} style={{ width: 50, height: 50 }} />
                        </label>
                    ))}
                </div>
                <div className="buttons">
                    <button className="btn">
                        <span></span>
                        <p data-start="good luck!" data-text="start!" data-title="new game"></p>
                    </button>
                </div>
            </form>
            </div>
            
        </div>
        </section>

    );
};

export default Home;
