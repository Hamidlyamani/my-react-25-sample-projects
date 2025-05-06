export interface UserProfile {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    username: string;
    password: string;
    birthDate: string; // ISO format string (e.g. "1996-5-30")
    image: string;
    phone: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
    address: {
        address: string;
        city: string;
        state: string;
        stateCode: string;
        postalCode: string;
        [key: string]: any; // for extra unknown fields
    };
    company: {
        department: string;
        name: string;
        title: string;
        address: {
            [key: string]: any;
        };
    };
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    };
    crypto: {
        coin: string;
        wallet: string;
        network: string;
    };
    university: string;
    ssn: string;
    ein: string;
    macAddress: string;
    ip: string;
    userAgent: string;
    role: string;
    bloodGroup: string;
}