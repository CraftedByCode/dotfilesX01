#---- STARSHIP ----
eval "$(starship init zsh)"

# ---- Auto suggestions ----
source /usr/share/zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=#5a5a5a"

# ---- Syntax Highlighting ----
source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# ---- Vi mode ----
bindkey -v
source /usr/share/zsh/plugins/zsh-vi-mode

# ---- TheFuck ----
eval $(thefuck --alias)
eval $(thefuck --alias fk)

# ---- Zoxide ----
eval "$(zoxide init zsh)"

# ----- FZF -------
eval "$(fzf --zsh)"

# ---- Hub ----
eval "$(hub alias -s)"
