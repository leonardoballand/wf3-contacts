/** Interface de l'objet user */

class Address {
    city: string;
}

class Company {
    name: string;
}

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
    phone: string;
    address: Address;
    company: Company;
}
