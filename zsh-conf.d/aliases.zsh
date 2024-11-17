# Helpful aliases

# ---- hyprland-Common-Aliases -----
alias c='clear' # clear terminal

alias l='eza -lh --icons=auto' # long list
alias ls='eza -1 --icons=auto' # short list
alias ll='eza -lha --icons=auto --sort=name --group-directories-first' # long list all
alias ld='eza -lhD --icons=auto' # long list dirs
alias lt='eza --icons=auto --tree' # list folder as tree

# Aur package management
alias un='$aurhelper -Rns' # uninstall package
alias up='$aurhelper -Syu' # update system/package/aur
alias pl='$aurhelper -Qs' # list installed package
alias pa='$aurhelper -Ss' # list available package
alias pc='$aurhelper -Sc' # remove unused cache
alias po='$aurhelper -Qtdq | $aurhelper -Rns -' # remove unused packages, also try > $aurhelper -Qqd | $aurhelper -Rsu --print -


# Directory navigation shortcuts
alias cd="z"

# dirs navigation
alias ..='cd ..'
alias ...='cd ../..'
alias .3='cd ../../..'
alias .4='cd ../../../..'
alias .5='cd ../../../../..'

# Crud operations 
alias md="mkdir -pv"
alias del='rm -rfv'

# ---- List Eza -----
alias ls="eza --icons"
alias ls="eza --icons=always"
alias la="eza --icons -a"
alias lt="eza --icons -T"
alias ld="eza --icons -D -s=age"


# ----- Developer Flow      
## ---- git/Hub shortcutz ----
alias gin="git init"
alias gcl="git clone"

alias gcr="git create"

alias gdel="git delete"
alias gdel.="git delete ($basename $(pwd))"

alias gp="git push orgin"
alias gp-m="git push origin master"

alias gs="git stage"
alias ga="git add"

alias gcm="git commit -m"

# ---- Zsh Species ----
alias E-zsh="nvim ~/.zshrc"
alias E-alias="nvim ~/.config/zsh-conf.d/aliases.zsh"
alias E-zconf="nvim ~/.config/zsh-conf.d"
alias E-nvim="nvim ~/.config/nvim/"
alias E-starship="nvim ~/.config/starship/starship.toml"

alias reload-zsh="source ~/.zshrc"

# ---- pnpm manageer ----
alias pn="pnpm"

alias px="pnpm dlx"


# ---- Applications/tools ----
alias v="nvim"
alias vc='code' # gui code editor
alias zj="zellij"

# ---------  Alias Over ---------- 
