import {apiClient} from "./base";

export interface QuizResponse {
    id: string
    name: string;
    isAdmin: boolean;
}

const quizzes = (id: string) => ({
    get: async () => {
        return await apiClient.get(`Classrooms/${id}/Quizzes`).json<QuizResponse[]>();
    },
    create: async (name: string) => {
        return await apiClient.post(`Classrooms/${id}/Quizzes`, {json: {name, requestorId: id}}).json<QuizResponse>();
    }
});

export default quizzes;
