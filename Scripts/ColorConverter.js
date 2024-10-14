// Nasłuchiwanie na kliknięcie na div z kolorami, które wywoła color picker
document.getElementById('colorPreview').addEventListener('click', function() {
    document.getElementById('colorPicker').click(); // Kliknięcie wywoła ukryty color picker
});

// Gdy zmieni się wartość w color pickerze, aktualizujemy wszystkie pola
document.getElementById('colorPicker').addEventListener('input', function() {
    const hexColor = this.value; // Pobieramy nowy wybrany kolor HEX
    document.getElementById('hex').value = hexColor; // Aktualizujemy pole HEX

    // Konwertujemy kolor HEX na RGB i HSL
    const rgb = hexToRgb(hexColor);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    // Aktualizujemy pola RGB, HSL oraz podgląd koloru
    updateFields(hexColor, rgb, hsl);
});

// Inne eventy nasłuchujące na ręczną zmianę wartości HEX, RGB i HSL (jak poprzednio)
document.getElementById('hex').addEventListener('input', function() {
    const hex = this.value;
    if (isValidHex(hex)) {
        const rgb = hexToRgb(hex);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        updateFields(hex, rgb, hsl);
    }
});

document.getElementById('rgb').addEventListener('input', function() {
    const rgb = this.value;
    const rgbObj = parseRgb(rgb);
    if (rgbObj) {
        const hex = rgbToHex(rgbObj.r, rgbObj.g, rgbObj.b);
        const hsl = rgbToHsl(rgbObj.r, rgbObj.g, rgbObj.b);
        updateFields(hex, rgbObj, hsl);
    }
});

document.getElementById('hsl').addEventListener('input', function() {
    const hsl = this.value;
    const hslObj = parseHsl(hsl);
    if (hslObj) {
        const rgb = hslToRgb(hslObj.h, hslObj.s, hslObj.l);
        const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
        updateFields(hex, rgb, hslObj);
    }
});

function updateFields(hex, rgb, hsl) {
    document.getElementById('hex').value = hex;
    document.getElementById('rgb').value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    document.getElementById('hsl').value = `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`;
    document.getElementById('colorPreview').style.backgroundColor = hex;
}

function isValidHex(hex) {
    return /^#([A-Fa-f0-9]{6})$/.test(hex);
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max == min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToRgb(h, s, l) {
    h /= 360, s /= 100, l /= 100;
    let r, g, b;
    
    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 3) return q;
            if (t < 1 / 2) return p + (q - p) * 6 * (2 / 3 - t);
            return p;
        };
        
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function parseRgb(rgb) {
    const match = rgb.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
    return match ? { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) } : null;
}

function parseHsl(hsl) {
    const match = hsl.match(/^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/);
    return match ? { h: parseInt(match[1]), s: parseInt(match[2]), l: parseInt(match[3]) } : null;
}