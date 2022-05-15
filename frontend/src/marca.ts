export interface Marca {
    date: string;
    day: string;
    data: data[];
}

export interface data {
    type : string;
    hour: string;
    competition: string;
    name: string;
    platform: string;
}