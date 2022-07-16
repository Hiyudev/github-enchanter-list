import constrast from 'contrast';

export function getConstratColor(hex: string): string {
    const res = constrast(hex);
    return res === 'light' ? 'black' : 'white';
}