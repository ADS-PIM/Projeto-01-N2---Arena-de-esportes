import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircleExclamation, faLock } from '@fortawesome/free-solid-svg-icons'
import registerImage from '../../assets/register_img.png'
import './RegisterPage.css'
import { validateRegistration } from '../../utils/registerValidation'

const RegisterPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [modalities, setModalities] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const errors = hasSubmitted ? validateRegistration({ name, email, phone, modalities }) : {};

    const handleModalityChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setModalities([...modalities, value]);
        } else {
            setModalities(modalities.filter((mod) => mod !== value));
        }
    };

    const submitForm = (event) => {
        event.preventDefault();
        setHasSubmitted(true);
        setIsRegistered(false);
        const validationErrors = validateRegistration({ name, email, phone, modalities });
        const firstInvalidField = Object.keys(validationErrors)[0];

        if (firstInvalidField) {
            const fieldName = firstInvalidField === 'modalities' ? 'tenis' : firstInvalidField;
            event.currentTarget.querySelector(`#${fieldName}`)?.focus();
            return;
        }

        setIsRegistered(true);
        setName('');
        setEmail('');
        setPhone('');
        setModalities([]);
        setHasSubmitted(false);
    }

    return (
        <div className="register-page">
            <main className="register-content">
                <aside id="register-image">
                    <img src={registerImage} alt="Duas pessoas caminhando em uma quadra de areia" />
                    <p id="image-tagline">AREIA, ESPORTE E BOAS CONEXÕES</p>
                    <h2 id="image-title">O PRIMEIRO<br />PASSO É<br />NA AREIA.</h2>
                    <div className="image-caption">
                        <p className="image-subtitle">Tem espaço para o seu ritmo.<br />E um novo jogo esperando por você.</p>
                        <p className="image-sports">BEACH TENNIS / VÔLEI DE PRAIA / FUTEVÔLEI</p>
                    </div>
                </aside>
                <section id="register-area">
                    <p className="register-eyebrow">CADASTRO DE CLIENTES</p>
                    <h1 id="register-title">Entre e se torne parte da<br />nossa arena</h1>
                    <p className="register-subtitle">Preencha seus dados e escolha seus esportes favoritos.</p>
                    <div id="register-form">
                        <p className="register-required">* Todos os campos são obrigatórios.</p>
                        <form onSubmit={submitForm} onChange={() => setIsRegistered(false)} noValidate>
                            <div className="register-field">
                                <label htmlFor="name">Nome completo *</label>
                                <div className="register-input-wrapper">
                                    <input type="text" id="name" name="name" placeholder="Digite seu nome e sobrenome" required value={name} onChange={(e) => setName(e.target.value)} />
                                    {errors.name && <FontAwesomeIcon icon={faCircleExclamation} className="register-error-icon" aria-hidden="true" />}
                                </div>
                                {errors.name && <p id="name-error" className="register-error">{errors.name}</p>}
                            </div>

                            <div className="register-field">
                                <label htmlFor="email">E-mail *</label>
                                <div className="register-input-wrapper">
                                    <input type="email" id="email" name="email" placeholder="seuemail@exemplo.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {errors.email && <FontAwesomeIcon icon={faCircleExclamation} className="register-error-icon" aria-hidden="true" />}
                                </div>
                                {errors.email && <p id="email-error" className="register-error">{errors.email}</p>}
                            </div>

                            <div className="register-field">
                                <label htmlFor="phone">Telefone *</label>
                                <div className="register-input-wrapper">
                                    <input type="tel" id="phone" name="phone" placeholder="(11) 99999-9999" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    {errors.phone && <FontAwesomeIcon icon={faCircleExclamation} className="register-error-icon" aria-hidden="true" />}
                                </div>
                                {errors.phone && <p id="phone-error" className="register-error">{errors.phone}</p>}
                            </div>

                            <fieldset className="register-modalities" aria-invalid={Boolean(errors.modalities)} aria-describedby={errors.modalities ? 'modalities-error' : 'modalities-hint'}>
                                <legend>Modalidade esportiva de interesse *</legend>
                                <div id="modalities">
                                    <label className="modality-option" htmlFor="tenis">
                                        <input type="checkbox" id="tenis" name="modalities" value="tenis" checked={modalities.includes('tenis')} onChange={(e) => handleModalityChange(e)} />
                                        <span>Beach tennis</span>
                                    </label>
                                    <label className="modality-option" htmlFor="volei">
                                        <input type="checkbox" id="volei" name="modalities" value="volei" checked={modalities.includes('volei')} onChange={(e) => handleModalityChange(e)} />
                                        <span>Vôlei de praia</span>
                                    </label>
                                    <label className="modality-option" htmlFor="futevolei">
                                        <input type="checkbox" id="futevolei" name="modalities" value="futevolei" checked={modalities.includes('futevolei')} onChange={(e) => handleModalityChange(e)} />
                                        <span>Futevôlei</span>
                                    </label>
                                </div>
                                {errors.modalities ? (
                                    <p id="modalities-error" className="register-error register-hint">{errors.modalities}</p>
                                ) : (
                                    <p id="modalities-hint" className="register-hint">Escolha as modalidades que você mais quer praticar.</p>
                                )}
                            </fieldset>
                            <div className="register-privacy">
                                <FontAwesomeIcon icon={faLock} aria-hidden="true" />
                                <p>Seus dados serão usados para registrar seu interesse e para contatos da Arena Brisa. Saiba mais em Privacidade e dados.</p>
                            </div>
                            <button className="register-submit" type="submit">
                                Cadastrar
                                <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: -45 }} aria-hidden="true" />
                            </button>
                            <div role="status">
                                {isRegistered && (
                                    <p className="register-success">Cadastro realizado com sucesso!</p>
                                )}
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default RegisterPage
