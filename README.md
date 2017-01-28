# config-bash-git-deployement

### Table of Contents
- **[Requirement](#requirement)**
- **[Files tree](#files-tree)**
- **[Installation](#installation)**
- **[Deployement :](#deployement)**
 - **[First step](#first-step)**
 - **[Second step](#second-step)**
 - **[Third step](#third-step)**
 - **[Fourth step](#fourth-step)**
- **[API documentation](#api-documentation)**
- **[Example](#example)**
- **[Acknowledgement](#acknowledgement)**
- **[Other project](#other-project)**


## **Requirement**

*You must have installed NODEJS* with :
 - [use NVM](https://github.com/creationix/nvm#install-script)

*You must run this import on linux os*

## **Files tree**
```
   .
    ├── .gitignore
    ├── index.js                    // file used for deployement
    ├── package.json                // list packages used by index.js
    ├── README.md
    └── src
        ├── .bashrc                 // master file called by every bash instance, it contain's import of others files
        ├── .bashrc.d               // directory for bash other scripts
        │   ├── bashrc_aliases      // bash alias contain's persistent alias
        │   └── bashrc_prompt       // contain's syntax coloration for terminal
        ├── .gitconfig              // git main config file with every git alias, set up for accounts etc...
        ├── .git.d                  // directory for git other scripts
        │   └── .git-completion.bash // allow git cmd completion
        └── .nanorc                 // custom nano settings

```

## **Installation**
Just run the cmd bellow to init the project.

```bash
    $ npm install

```
## **Deployement**
Now let just start import of this new configuration inside our `home`.

```bash
    $ npm run start
```

### First step:
It will ask you to provide a name for git to be able to commit.

```bash
Merci de remplir votre nom d'utilisateur git: <votre réponse ici>
```

### Second step:
It ask for your email now.

```bash
merci de remplir votre email : <votre email ici>
```

### Third step:
We save the original `.bashrc` and `.gitconfig` under those names :

```bash
réation d'un backup de /home/ben/.bashrc ------------> /home/ben/.bashrc.before.config.deployement.backup

création d'un backup de /home/ben/.gitconfig ------------> /home/ben/.gitconfig.before.config.deployement.backup
```

### Fourth step:
We merge your `.bashrc` backup and our new `.bashrc` config and we add a split between.

```bash

#OLD/YOUR CONFIG END <--------------------------------------------------
#
#
#
#-----------------------------------------------------> NEW CONFIG START

```

