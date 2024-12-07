declare namespace NodeJS {
    interface ProcessEnv {
        // Clerk environment variables
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
        CLERK_SECRET_KEY: string;
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: string;
        NEXT_PUBLIC_CLERK_SIGN_UP_URL: string;
        NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL: string;
        NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL: string;
        NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: string;
        NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: string;

        // Database credentials
        DATABASE_URL: string;

        // Neon-specific variables
        NEON_USERNAME?: string;
        NEON_HOST?: string;
        NEON_DATABASE?: string;
    }
}
