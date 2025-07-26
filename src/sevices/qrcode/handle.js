import qr from 'qrcode-terminal';
import chalk from 'chalk';

async function handle(err, result) {
    if(err) {
        console.error('error on application');
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green('QR Code gerado com sucesso!\n'));
        console.log(chalk.green(qrcode));
    });
    
}

export default handle;