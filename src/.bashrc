# Defined prompt only if is not already defined
if [ ! -z "$PS1" ]; then
        if [ -r ~/.bashrc.d/bashrc_prompt ]; then
            source ~/.bashrc.d/bashrc_prompt
    fi
fi

# Global aliases containing every alias available
if [ -r ~/.bashrc.d/bashrc_aliases ]; then
        source ~/.bashrc.d/bashrc_aliases
fi
# Import git completion
if [ -f ~/.git.d/.git-completion.bash ]; then
  . ~/.git.d/.git-completion.bash
fi
