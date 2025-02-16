function clup --wraps='sudo pacman -Qdtq | sudo pacman -Rns -' --description 'alias clup sudo pacman -Qdtq | sudo pacman -Rns -'
  sudo pacman -Qdtq | sudo pacman -Rns - $argv
        
end
