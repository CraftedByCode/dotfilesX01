# ---- History Setup ----
HISTFILE=$HOME/.zhistory
SAVEHIST=1000
HISTSIZE=999
setopt share_history
setopt hist_expire_dups_first
setopt hist_ignore_dups
setopt hist_verify

# ---- Completion using arrow keys (history-based) ----
bindkey '^[[A' history-search-backward
bindkey '^[[B' history-search-forward

