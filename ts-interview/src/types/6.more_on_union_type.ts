type User = ({
    id: number;
    firstName: string;
    lastName: string
}) & UserRoleAttributes;

type UserRoleAttributes = {
    role: "Admin",
    adminPassword: string
} | {
    role: "User"
} | {
    role: "Super_Admin",
    superAdminPassword: string
}

type Role = UserRoleAttributes['role']

const user: User = {
    role: 'Admin',
    firstName: 'test',
    lastName: 'test',
    id: 1,
    adminPassword: 'password'
}