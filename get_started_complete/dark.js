// hello.mjs
export function hello(text) {
    console.log('test21');
    const div = document.createElement('div');
    div.textContent = `Hello ${text}`;
    document.body.appendChild(div);
}