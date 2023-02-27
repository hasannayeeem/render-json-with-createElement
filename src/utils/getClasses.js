function getClass(selector) {
    const isValid = !/^\d/.test(selector);
    return `${isValid ? selector : `prefix-${Math.random().toString(36).substring(2, 8)}`}`;
}

export default getClass;