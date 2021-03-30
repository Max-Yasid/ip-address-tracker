export interface addressData{
    ip: string;
    location: ILocation;
    domains: [string];
    as: Ias;
    isp: string;
    proxy: Iproxy;
}

interface ILocation{
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
}

interface Ias{
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
}

interface Iproxy{
    proxy: boolean;
    vpn: boolean;
    tor: boolean;
}