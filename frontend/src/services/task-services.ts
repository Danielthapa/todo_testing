const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

export interface TaskResponse {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    category: string;
  }

  export const getAllTasks = async () => {
    const response = await fetch(baseURL + '/tasks');
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return (await response.json()) as TaskResponse[];
  };
  