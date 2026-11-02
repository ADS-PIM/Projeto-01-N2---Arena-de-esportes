export function validateRegistration({ name, email, phone, modalities }) {
    const errors = {};
    const nameParts = name.trim().split(/\s+/);

    if (nameParts.length < 2 || !nameParts.every(part => /^\p{L}[\p{L}\p{M}'’-]*$/u.test(part))) {
        errors.name = 'Informe seu nome completo.';
    }

    if (!/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(email.trim())) {
        errors.email = 'Digite um e-mail válido, como marina@exemplo.com.';
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (!/^[\d\s().-]+$/.test(phone) || !/^[1-9]{2}\d{8,9}$/.test(phoneDigits)) {
        errors.phone = 'Informe um telefone válido com DDD e 10 ou 11 dígitos.';
    }

    if (modalities.length === 0) {
        errors.modalities = 'Selecione uma modalidade para continuar.';
    }

    return errors;
}