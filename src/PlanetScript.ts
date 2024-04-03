export default function script(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    function resizeCanvas(): void {
        canvas.width  = 500;
        canvas.height = 200; 
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const chars = ['*','.'];
    const maxCharCount = 180;
    let foci: {angle: number; distance: number; size: number; char: string; speed: number}[] = [];
    const ringRadius = Math.min(canvas.width, canvas.height) / 3.2;
    const ringWidth = ringRadius * 0.1;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const res = Math.max(canvas.width, canvas.height) / Math.min(canvas.width, canvas.height);
    // Инициализация точек для кольца
    // Дополнительные параметры для овала
    const ovalRadiusX = ringRadius  * 2.5;
    const ovalRadiusY = ringRadius *  0.4 + 10;
    const ovalChars = chars;  // Можно использовать другие символы для овала

    // Инициализация точек для овала
    let ovalLabel: {angle: number; distance: number; size: number; char: string; speed: number}[] = [];
    let ovalFoci: {angle: number; distance: number; size: number; char: string; speed: number}[] = [];
    for (let i = 0; i < maxCharCount; i++) {
        foci.push({
            angle: Math.random() * Math.PI * 2,
            distance: ringRadius + (Math.random() - 0.5) * ringWidth ,
            size: (Math.random() * 0.5) + 0.5,
            char: chars[Math.floor(Math.random() * chars.length)],
            speed: ((Math.random() - 0.5) * 0.01) 
        });
        ovalFoci.push({
            angle: Math.random() * Math.PI * 2,
            distance: ovalRadiusX + (Math.random() - 0.3) * ovalRadiusY ,
            size: (Math.random() * 0.5) + 0.2, // Меньший размер для овальных символов
            char: ovalChars[Math.floor(Math.random() * ovalChars.length)],
            speed: (Math.random() - 0.5) * 0.015
        });
        ovalLabel.push({
            angle: Math.random() * Math.PI * 2,
            distance: ovalRadiusX + (Math.random() - 0.3) * ovalRadiusY ,
            size: (Math.random() * 0.5) + 0.2, // Меньший размер для овальных символов
            char: ovalChars[Math.floor(Math.random() * ovalChars.length)],
            speed: (Math.random() - 0.5) * 0.015
        });
    }



    function draw() {
        ctx!.fillStyle = 'rgb(6, 20, 52)';
        ctx!.fillRect(0, 0, canvas.width, canvas.height);

        // Отрисовка овал
        ovalFoci.forEach(focus => {
            focus.angle += focus.speed;
            const x = focus.distance * Math.cos(focus.angle) + centerX;
            const y = ovalRadiusY * Math.sin(focus.angle) + (centerY * (ringWidth / 3.5)) - (x / 3);
            const scale = 0.5 * (Math.sin(focus.angle) + 1);
            const alpha = 0.5 + 0.5 * Math.sin(focus.angle);

            ctx!.font = `${scale}em monospace`;
            ctx!.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx!.fillText(focus.char, x, y);
        });

        // Отрисовка круг
        foci.forEach(focus => {
            focus.angle += focus.speed;
            const x = focus.distance * Math.cos(focus.angle) + centerX;
            const y = focus.distance * Math.sin(focus.angle) + centerY;

            const scale = 0.5 * (Math.cos(focus.angle) + 1);
            const size = focus.size * scale;
            const alpha = 0.5 + 0.5 * Math.cos(focus.angle);

            ctx!.font = `${size}em monospace`;
            ctx!.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx!.fillText(focus.char, x, y);
        });
            ctx!.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx!.textAlign = 'center';
            ctx!.textBaseline = 'middle';
            const centerX1 : number = centerX - 120; 
            const centerY1 : number = centerY - 7;

            //14
            ctx!.font = '14px Arial';
            //b
            ctx!.fillText("|", centerX1, centerY1 - 15);
            ctx!.fillText("|", centerX1, centerY1);
            ctx!.fillText("|", centerX1, centerY1 + 15);

            ctx!.fillText("_", centerX1 + 22, centerY1 - 10);

            ctx!.fillText("_", centerX1 + 7, centerY1 + 15);

            //e
            ctx!.fillText("\\", centerX1 + 37, centerY1 + 17);
            


            //12
            ctx!.font = '12px Arial';
            ctx!.fillText("|", centerX1 + 13, centerY1);
            ctx!.fillText("|", centerX1 + 13, centerY1 - 15);

            //e
            ctx!.fillText("|", centerX1 + 60, centerY1 + 17);
            ctx!.fillText("|", centerX1 + 32, centerY1 + 17);
            ctx!.fillText(")", centerX1 + 64, centerY1 + 3);
            ctx!.fillText("_", centerX1 + 56, centerY1 + 4);
            //a
            ctx!.fillText("|", centerX1 + 86, centerY1 + 17);
            ctx!.fillText("_", centerX1 + 71, centerY1 + 2);
            
            ctx!.fillText("|", centerX1 + 125, centerY1 + 3);
            ctx!.fillText("|", centerX1 + 125, centerY1 + 17);

            //n
            ctx!.fillText("|", centerX1 + 86, centerY1 + 3);



            //9
            ctx!.font = '9px Arial';
            //b
            ctx!.fillText("_", centerX1 + 19, centerY1 + 2);
            //e
            ctx!.fillText("_", centerX1 + 46, centerY1 + 17);
            ctx!.fillText("_", centerX1 + 54, centerY1 + 17);

            ctx!.fillText("_", centerX1 + 42, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 50, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 58, centerY1 - 8);
            
            ctx!.fillText("_", centerX1 + 50, centerY1 - 1.2);
            //a
            ctx!.fillText("_", centerX1 + 65, centerY1 + 17);
            ctx!.fillText("_", centerX1 + 73, centerY1 + 17);
            ctx!.fillText("_", centerX1 + 81, centerY1 + 17);

            ctx!.fillText("_", centerX1 + 70, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 78, centerY1 - 8);

            ctx!.fillText("-", centerX1 + 71, centerY1 + 13);
            //m
            ctx!.fillText("_", centerX1 + 96, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 114, centerY1 - 8);
            

            //17
            ctx!.font = '17px Arial';
            ctx!.fillText("_", centerX1 + 6.7, centerY1 - 30);
            ctx!.fillText(",", centerX1 + 14, centerY1 + 14);
            ctx!.fillText("_", centerX1 + 23, centerY1 + 14);
            
            //e
            
            
            //15
            ctx!.font = '15px Arial';
            //b
            ctx!.fillText("\\", centerX1 + 30, centerY1 + 3);

            ctx!.fillText("/", centerX1 + 36, centerY1 + 3);
            //e
            //a
            ctx!.fillText("\\", centerX1 + 84, centerY1 + 3);
            //m
            ctx!.fillText("\\", centerX1 + 102, centerY1 + 3);
            ctx!.fillText("\\", centerX1 + 120, centerY1 + 3);
            ctx!.fillText("/", centerX1 + 108, centerY1 + 3);

            ctx!.fillText("/", centerX1 + 96, centerY1 + 17);
            ctx!.fillText("\\", centerX1 + 102, centerY1 + 17);
            ctx!.fillText("/", centerX1 + 108, centerY1 + 17);
            ctx!.fillText("\\", centerX1 + 114, centerY1 + 17);

            //n
            ctx!.fillText("\\", centerX1 + 140, centerY1 + 3);
            ctx!.fillText("\\", centerX1 + 136, centerY1 + 17);
        
        requestAnimationFrame(draw);
    }

    draw();
}