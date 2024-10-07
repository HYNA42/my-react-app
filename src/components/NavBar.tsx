import React from "react";

interface Pokemon {
  name: string;
  imgUrl?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

// Composant NavBar
const NavBar: React.FC<NavBarProps> = ({
  pokemonIndex,
  setPokemonIndex,
  pokemonList,
}) => {
  // Fonction pour aller au Pokemon précédent
  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  // Fonction pour aller au Pokémon suivant
  const handleNext = () => {
    if (pokemonIndex < pokemonList.length) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  return (
    <>
          {pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}
          
          {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleNext}>Suivant</button>
      )}
    </>
  );
};

export default NavBar;
