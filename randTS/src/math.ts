

export interface ieasyMath {
    divided?: number;
    sum?: number;
    multiple?: number;
    multipleOfThreeNumber?(): number;
}

export abstract class easyMath implements ieasyMath {
    abstract divided: number;
    abstract sum: number;
    abstract multiple: number;
}

export abstract class hardMath implements ieasyMath {
    abstract multipleOfThreeNumber(): number;
}