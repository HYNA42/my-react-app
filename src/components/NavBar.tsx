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
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {pokemonList.map((pokemen, index) => (
          <li key={pokemen.name}>
            <button
              onClick={() => setPokemonIndex(index)}
              style={{
                fontWeight: pokemonIndex === index ? "bold" : "normal",
              }}
            >
              {pokemen.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
