import prompt from 'prompt';
import mainPrompt from './prompt/prompt-main.js';
import createQRCode from './sevices/qrcode/create.js';
import createPassword from './sevices/password/create.js';  

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();
    });

    prompt.start();
}

main();