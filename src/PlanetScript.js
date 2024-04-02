export default function script() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width  = 500;
        canvas.height = 200; 
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const chars = ['*', '.'];
    const maxCharCount = 200;
    let foci = [];
    const ringRadius = Math.min(canvas.width, canvas.height) / 3.2;
    const ringWidth = ringRadius * 0.1;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const res = Math.max(canvas.width, canvas.height) / Math.min(canvas.width, canvas.height);
    // Инициализация точек для кольца

    for (let i = 0; i < maxCharCount; i++) {
        foci.push({
            angle: Math.random() * Math.PI * 2,
            distance: ringRadius + (Math.random() - 0.5) * ringWidth ,
            size: (Math.random() * 0.5) + 0.5,
            char: chars[Math.floor(Math.random() * chars.length)],
            speed: ((Math.random() - 0.5) * 0.01) 
        });
    }

    // Дополнительные параметры для овала
    const ovalRadiusX = ringRadius  * 2.5;
    const ovalRadiusY = ringRadius *  0.4 + 10;
    const ovalChars = chars;  // Можно использовать другие символы для овала

    // Инициализация точек для овала
    let ovalFoci = [];
    let labelFoci = [];
    for (let i = 0; i < maxCharCount; i++) {
        ovalFoci.push({
            angle: Math.random() * Math.PI * 2,
            distance: ovalRadiusX + (Math.random() - 0.3) * ovalRadiusY ,
            size: (Math.random() * 0.5) + 0.2, // Меньший размер для овальных символов
            char: ovalChars[Math.floor(Math.random() * ovalChars.length)],
            speed: (Math.random() - 0.5) * 0.015
        });
    }



    function draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Отрисовка овал
        ovalFoci.forEach(focus => {
            focus.angle += focus.speed;
            const x = focus.distance * Math.cos(focus.angle) + centerX;
            const y = ovalRadiusY * Math.sin(focus.angle) + (centerY * (ringWidth / 3.5)) - (x / 3);
            const scale = 0.5 * (Math.sin(focus.angle) + 1);
            const alpha = 0.5 + 0.5 * Math.sin(focus.angle);

            ctx.font = `${scale}em monospace`;
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fillText(focus.char, x, y);
        });

        // Отрисовка круг
        foci.forEach(focus => {
            focus.angle += focus.speed;
            const x = focus.distance * Math.cos(focus.angle) + centerX;
            const y = focus.distance * Math.sin(focus.angle) + centerY;

            const scale = 0.5 * (Math.cos(focus.angle) + 1);
            const size = focus.size * scale;
            const alpha = 0.5 + 0.5 * Math.cos(focus.angle);

            ctx.font = `${size}em monospace`;
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fillText(focus.char, x, y);
        });
        ovalFoci.forEach(() => { 
            const size = ringWidth / 6;
            ctx.font = `${size}em monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            // ctx.fillText("beamnova", centerX, centerY);
        });
        
        requestAnimationFrame(draw);
    }

    draw();
}