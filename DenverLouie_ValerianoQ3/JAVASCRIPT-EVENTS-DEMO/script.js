
const btn1 = document.getElementById('btn1');
if (btn1) btn1.addEventListener('click', () => console.log('Button 1 clicked'));

const btn2 = document.getElementById('btn2');
if (btn2) btn2.addEventListener('click', () => console.log('Button 2 clicked'));

const btn3 = document.getElementById('btn3');
if (btn3) btn3.addEventListener('click', () => {
    const name = document.getElementById('nameInput')?.value?.trim() || '';
    console.log(name ? `Button 3 clicked — Name entered: ${name}` : 'Button 3 clicked — no name entered');
});

document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// document.addEventListener('mousemove', (event) => {
//  console.log(`Mouse moved to: (${event.clientX}, ${event.clientY})`);
// });
