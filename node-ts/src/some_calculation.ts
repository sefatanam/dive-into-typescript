
type QuoteAndDescription = {
    quote: string;
    description: string
}
export default function your_luck() {

    // Array of quotes and descriptions
    const quotesAndDescriptions: QuoteAndDescription[] = [
        {
            quote: "The only way to do great work is to love what you do.",
            description: "– Steve Jobs",
        },
        {
            quote: "In three words I can sum up everything I've learned about life: it goes on.",
            description: "– Robert Frost",
        },
        {
            quote: "Life is really simple, but we insist on making it complicated.",
            description: "– Confucius",
        },
    ];

    // Generate a random index to select a random quote and description
    const randomIndex = Math.floor(Math.random() * quotesAndDescriptions.length) || 1;

    // Get the random quote and description
    const { quote, description } = quotesAndDescriptions[randomIndex] as QuoteAndDescription;

    // Generate a random number between 1 and 100 (adjust as needed)
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    return { quote, description, randomNumber } as const;

    
}
