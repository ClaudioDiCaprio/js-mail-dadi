/* Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

const UrMail = prompt ('insert e-mail');
console.log(UrMail);

const MailList = ['pippo@cane.com', 'paperino@papero.com','topolino@topo.com'];
console.log(MailList)

let sentinel = false;

for (let i = 0; i < MailList.length; i++){
    if(MailList[i] == UrMail){
        sentinel = true;
    }
}
if (sentinel) {
    alert('Access Granted');
}else{
    alert('Access Denied');
}