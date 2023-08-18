import { ProjectForm } from '@/common.type';
import { createProjectMutation, createUserMutation, getUserQuery, projectsQuery } from '@/graphql';
import { GraphQLClient } from 'graphql-request';

const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql';
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'letmein';
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

const client = new GraphQLClient(apiUrl);

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        return await client.request(query, variables);
    } catch (error) {
        throw error;
    }
};

export const fetchToken = async () => {
    try {
        const responce = await fetch(`${serverUrl}/api/auth/token`);
        return responce.json();
    } catch (error) {
        throw error;
    }
};

export const getUser = (email: string) => {
    client.setHeader('x-api-key', apiKey);
    return makeGraphQLRequest(getUserQuery, { email });
};

export const createUser = (name: string, email: string, avatarUrl: string) => {
    client.setHeader('x-api-key', apiKey);

    const variables = {
        input: {
            name: name,
            email: email,
            avatarUrl: avatarUrl
        }
    };

    return makeGraphQLRequest(createUserMutation, variables);
};

const uploadImage = async (imagePath: string) => {
    try {
        const response = await fetch(`${serverUrl}/api/upload`, {
            method: 'POST',
            body: JSON.stringify({ path: imagePath })
        });

        return response.json();
    } catch (error) {
        throw error;
    }
};

export const createNewProject = async (form: ProjectForm, creatorId: string, token: string) => {
    const imageUrl = await uploadImage(form.image);

    if (imageUrl.url) {
        client.setHeader('Authorization', `Bearer ${token}`);

        const variables = {
            input: {
                ...form,
                image: imageUrl.url,
                createdBy: {
                    link: creatorId
                }
            }
        };

        return makeGraphQLRequest(createProjectMutation, variables);
    }
};

export const fetchAllProjects = async (category?: string, endcursor?: string) => {
    client.setHeader('x-api-key', apiKey);

    return makeGraphQLRequest(projectsQuery, { category, endcursor });
};
