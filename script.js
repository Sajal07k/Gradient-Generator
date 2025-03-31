const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const copyCode = document.querySelector('.copyCode');
const copyHeading = document.querySelector('h3');

const hexValues = () => {
    let hexaValues = "0123456789abcdef";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += hexaValues[Math.floor(Math.random() * 16)];
    }
    return color;
};

const handleButton1 = () => {
    let color1 = hexValues();
    let color2 = hexValues();
    btn1.innerHTML = color1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    copyCode.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
};

const handleButton2 = () => {
    let color1 = hexValues();
    let color2 = hexValues();
    btn2.innerHTML = color2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    copyCode.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2})`;
};

btn1.addEventListener('click', handleButton1);
btn2.addEventListener('click', handleButton2);

copyHeading.addEventListener('click', () => {
    navigator.clipboard.writeText(copyCode.innerHTML);
});
