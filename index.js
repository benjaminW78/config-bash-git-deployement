'use strict';
const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'OHAI> aaaa '
    }),
    fse = require('fs-extra'),
    concat = require('concat-files'),
    fs = require('fs');

var gitUser = {
    name:null,
    email:null
};

rl.prompt();

function gitUserName(answer){
    if(answer !== '' && answer !== undefined && answer !== null){
        gitUser.name = answer;
        if(answer.indexOf('fred') !== -1 || answer.indexOf('anger') !== -1 ){
            console.log('Salut GROS fred! voici donc ton blaz de commiter pour git : ' + answer );
        }
        else if(answer.indexOf('delpuech') !== -1){
            console.log('Yeah le chef install la config !!! voici donc ton nom de commiter pour git : ' + answer);
        }
        else{
            console.log('Bonjour à toi : ' + answer + '');
        }
        rl.question('merci de remplir votre email : ',gitUserEmail);
    }else{
        console.log('votre réponse est null, undefined ou vide. Merci de recommencer');
        rl.question('Merci de renseigner une réponse valide: ',gitUserName);
    }
}

function gitUserEmail(answer){
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        reg = new RegExp(regexp);
    if(answer !== '' && answer !== undefined && answer !== null && reg.test(answer)){
        gitUser.email = answer;
        promptInitGit();
    }
    else{
        rl.question('Merci de renseigner un email Valide : ', gitUserEmail);
    }
}

function promptInitGit(){
    console.log('Merci pour votre participation '+ gitUser.name);
    console.log('initialisation du git config...');
    console.log('...');
    moveFiles();
}

function moveFiles(){
    if(!fse.existsSync(process.env.HOME+'/.bashrc.before.config.deployement.backup') && fse.existsSync(process.env.HOME+'/.bashrc')){
        fse.copy(process.env.HOME+'/.bashrc',process.env.HOME+'/.bashrc.before.config.deployement.backup',function(err){
            if(err===null){
                console.log('création d\'un backup de '+process.env.HOME+'/.bashrc ------------> '+process.env.HOME+'/.bashrc.before.config.deployement.backup\n');
            }else{
                console.log('une erreur c\'est produite\n',err);
            }
        });
        fse.copy(process.env.HOME+'/.gitconfig',process.env.HOME+'/.gitconfig.before.config.deployement.backup',function(err){
            if(err===null){
                console.log('création d\'un backup de '+process.env.HOME+'/.gitconfig ------------> '+process.env.HOME+'/.gitconfig.before.config.deployement.backup \n');
            }else{
                console.log('une erreur c\'est produite\n',err);
            }
        });
    }

    fse.copy(__dirname+'/src/', process.env.HOME+'/', function(err) {
      // done. it first created all the necessary directories, and then
      // tried fse.rename, then falls back to using nfse.copy to copy the dir
      // to dest and then rimraf to remove the source dir
        if(err===null){
            concat(
                [
                    process.env.HOME+'/.bashrc.before.config.deployement.backup',
                    __dirname+'/separatorConfigTemplate',
                    process.env.HOME+'/.bashrc'
                ],
                process.env.HOME+'/.bashrc',
                function(err){
                    if(!err){
                        editGitConf();
                    }else{
                        console.log('erreur au concat .bashrc');
                        rl.close();
                    }
            });
        }else {
            console.log('une erreur c\'est produite\n',err);
        }
    });
}

function editGitConf(){
    var test = '[user]\n    name = '+gitUser.name + "\n    email = "+gitUser.email+'\n';
    // done. it first created all the necessary directories, and then
    // tried fse.rename, then falls back to using nfse.copy to copy the dir
    // to dest and then rimraf to remove the source dir
    console.log('..\n....\n......\n........\nImport de la nouvelle config bash/git DONE\n');

    fs.appendFile(process.env.HOME+'/.gitconfig',test,encoding='utf8',function (err) {
        if (err){
            console.log('une erreur c\'est produite\n',err);
        }else{
            console.log('Ajout des identifiants name : ' +gitUser.name +', email : '+ gitUser.email +' dans '+ process.env.HOME +'/.gitconfig \n');
        }
        rl.close();
    });
}
rl.question('Merci de remplir votre nom d\'utilisateur git: ', gitUserName);

rl.on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
