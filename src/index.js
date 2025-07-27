import prompt from 'prompt';
import promptSchemaMain from './prompts-schema/prompt-schema-main.js';
import createQRCode from './sevices/qrcode/create.js';
import createPassword from './sevices/password/create.js';  

async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();
    });

    prompt.start();
}

main();