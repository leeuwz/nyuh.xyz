export default function useEasterEgg() {
    let keySequence = '';
    const targetSequence = 'lionz';
    
    const handleKeyPress = (event: KeyboardEvent) => {
        keySequence += event.key.toLowerCase();
        
        if (keySequence.length > targetSequence.length) {
            keySequence = keySequence.slice(-targetSequence.length);
        }
        
        if (keySequence === targetSequence) {
            window.location.href = 'https://dumbass.dog';
        }
    };
    
    if (typeof window !== 'undefined') {
        window.addEventListener('keydown', handleKeyPress);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }
    
    return () => {};
}