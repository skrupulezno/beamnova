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
    const maxCharCount = 120;
    let foci: {angle: number; distance: number; size: number; char: string; speed: number}[] = [];
    const ringRadius = Math.min(canvas.width, canvas.height) / 3.2;
    const ringWidth = ringRadius * 0.1;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const ovalRadiusX = ringRadius  * 2.5;
    const ovalRadiusY = ringRadius *  0.4 + 10;
    const ovalChars = chars; 

    let ovalLabel: {angle: number; distance: number; size: number; char: string; speed: number}[] = [];
    let ovalFoci: {angle: number; distance: number; size: number; char: string; speed: number}[] = [];

    for (let i = 0; i < 100; i++) {
        foci.push({
            angle: Math.random() * Math.PI * 2,
            distance: ringRadius + (Math.random() - 0.5) * ringWidth ,
            size: (Math.random() * 0.5) + 0.5,
            char: chars[Math.floor(Math.random() * chars.length)],
            speed: ((Math.random() - 0.5) * 0.005) 
        });
    }

    for (let i = 0; i < maxCharCount; i++) {
        ovalFoci.push({
            angle: Math.random() * Math.PI * 2,
            distance: ovalRadiusX + (Math.random() - 0.3) * ovalRadiusY ,
            size: (Math.random() * 0.5) + 0.2, // Меньший размер для овальных символов
            char: ovalChars[Math.floor(Math.random() * ovalChars.length)],
            speed: (Math.random() - 0.5) * 0.005
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
            const centerX1 : number = centerX - 100; 
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
            
            //n
            ctx!.fillText("|", centerX1 + 119, centerY1 + 3);
            ctx!.fillText("|", centerX1 + 126, centerY1 + 16);

            ctx!.fillText("|", centerX1 + 133, centerY1 + 2);


            //v
            ctx!.fillText("|", centerX1 + 171, centerY1 + 2);
            ctx!.fillText("|", centerX1 + 176, centerY1 + 2);

            //a 
            ctx!.fillText("_", centerX1 + 190, centerY1 + 2);



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
            ctx!.fillText("_", centerX1 + 91, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 109, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 115, centerY1 + 17);
            //n
            ctx!.fillText("_", centerX1 + 124, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 137, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 137, centerY1 + 17);
            //o
            ctx!.fillText("_", centerX1 + 144, centerY1 + 17);
            ctx!.fillText("_", centerX1 + 151, centerY1 + 17);
            ctx!.fillText("_", centerX1 + 158, centerY1 + 17);

            ctx!.fillText("_", centerX1 + 144, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 151, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 158, centerY1 - 8);

            ctx!.fillText("_", centerX1 + 150, centerY1 + 4);

            //v
            ctx!.fillText("_", centerX1 + 174, centerY1 + 17);

            ctx!.fillText("_", centerX1 + 166, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 182, centerY1 - 8);


            //a
            ctx!.fillText("_", centerX1 + 191, centerY1 - 8);
            ctx!.fillText("_", centerX1 + 198, centerY1 - 8);

            ctx!.fillText("_", centerX1 + 185, centerY1 + 17);
            ctx!.fillText("_", centerX1 + 192, centerY1 + 17);
            ctx!.fillText("_", centerX1 + 199, centerY1 + 17);

            ctx!.fillText("-", centerX1 + 192, centerY1 + 13);

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
            ctx!.fillText("\\", centerX1 + 97, centerY1 + 3);
            ctx!.fillText("\\", centerX1 + 115, centerY1 + 3);
            ctx!.fillText("/", centerX1 + 103, centerY1 + 3);

            ctx!.fillText("/", centerX1 + 91, centerY1 + 17);
            ctx!.fillText("\\", centerX1 + 97, centerY1 + 17);
            ctx!.fillText("/", centerX1 + 103, centerY1 + 17);
            ctx!.fillText("\\", centerX1 + 109, centerY1 + 17);
            ctx!.fillText("\\", centerX1 + 119, centerY1 + 17);
            //n
            ctx!.fillText("\\", centerX1 + 131, centerY1 + 4);
            ctx!.fillText("\\", centerX1 + 131, centerY1 + 17);
            //o
            ctx!.fillText("/", centerX1 + 138, centerY1 + 4);
            ctx!.fillText("\\", centerX1 + 138, centerY1 + 17);

            ctx!.fillText("\\", centerX1 + 162, centerY1 + 4);
            ctx!.fillText("/", centerX1 + 162, centerY1 + 17);

            //v
            ctx!.fillText("\\", centerX1 + 167, centerY1 + 17);
            ctx!.fillText("/", centerX1 + 180, centerY1 + 17);
            ctx!.fillText("/", centerX1 + 184, centerY1 + 4);

            //a 
            ctx!.fillText("\\", centerX1 + 205, centerY1 + 4);
            ctx!.fillText("/", centerX1 + 205, centerY1 + 17);
        
        requestAnimationFrame(draw);
    }

    draw();
}