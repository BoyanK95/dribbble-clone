export const getUserQuerty = `
    query GetUser($email: String!) {
        user(by: {email: $email}) {
            id
            name 
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
`