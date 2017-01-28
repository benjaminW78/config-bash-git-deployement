# Defined prompt only if is not already defined
if [ ! -z "$PS1" ]; then
        if [ -r ~/.bashrc.d/bashrc_prompt ]; then
            source ~/.bashrc.d/bashrc_prompt
    fi
fi

# Global aliases
if [ -r ~/.bashrc.d/bashrc_aliases ]; then
        source ~/.bashrc.d/bashrc_aliases
fi

if [ -f ~/.git-completion.bash ]; then
  . ~/.git.d/.git-completion.bash
fi