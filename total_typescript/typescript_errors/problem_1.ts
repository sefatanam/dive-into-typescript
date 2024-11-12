
/**
 * Fixing "X Is Not Assignable To Y"
 * https://www.totaltypescript.com/tutorials/solving-typescript-errors/errors/fixing-x-is-not-assignable-to-y
 */

type Theme = "light" | "dark" | "blue";

interface UserProfile {
    id: string;

    preferences: {
        theme: Theme
    };
}

let user: UserProfile = {
    id: "123",
    preferences: {
        theme: "blue",
    },
};
