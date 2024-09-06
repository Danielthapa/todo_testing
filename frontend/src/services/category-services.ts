const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

export interface CategoryResponse {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    category: string;
  }

  export const getAllCategories = async () => {
    const response = await fetch(baseURL + '/categories');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return (await response.json()) as CategoryResponse[];
  };
  