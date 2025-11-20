import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],

  toggleFavorite: (recipe) =>
    set((state) => {
      const exists = state.favorites.some((item) => item.id === recipe.id);

      const updatedFavorites = exists
        ? state.favorites.filter((item) => item.id !== recipe.id)
        : [...state.favorites, recipe];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return { favorites: updatedFavorites };
    }),
}));
